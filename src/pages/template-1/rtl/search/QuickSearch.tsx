import api, { CategoryApi, NewsApi } from "axios/client";
import ArchiveItem from "components/shared/Card/ArchiveItem";
import Layout from "components/template-1/shared/Layout";
import { INews, IServiceResult } from "interfaces";
import { DatePicker } from "jalali-react-datepicker";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import turnToArray from "utils/turnToArray";
import styles from "./QuickSearch.module.scss";

interface IProps {
  catList: any;
  SSRres: IServiceResult<INews[]>;
  mockNews: INews[];
  mockSingleNews: INews[];
}

const QuickSearchPage: React.FC<IProps> = ({ catList, SSRres }) => {
  // const { getNewsList, getCategories, state } = useContext(AppContext)
  const [fromDate, setFromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [categoryId, setCategoryId] = useState([""]);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [searchResult, setSearchResult] = useState<INews[]>([]);

  const router = useRouter();

  const doSearch = async () => {
    const res = await NewsApi.GetPublishedNews({
      Titr: title,
      Tags: tags,
      FromStartPublishDateTime: fromDate,
      TillStartPublishDateTime: toDate,
      DefaultCategoriesID: categoryId,
    });
    setSearchResult(res.data);
    if (SSRres && SSRres.data.length > 0) {
      setSearchResult(SSRres.data);
    }
  };

  useEffect(() => {
    doSearch();
  }, [router.query.term]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    title.length > 0 ? router.push(`/search/QuickSearch?term=${title}`) : router.push(`/search/QuickSearch`);
    doSearch();
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={`${styles.searchToolbar} mx-auto mt-4 bg-white`}>
        <div className="d-flex justify-content-between">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            className={`${styles.searchTerm} pr-3 mr-lg-4`}
            placeholder="متن جستجو"
          />

          <a
            className="btn"
            data-bs-toggle="collapse"
            href="#collapseSearch"
            role="button"
            aria-expanded="false"
            aria-controls="collapseSearch"
          >
            <IoArrowDownOutline />
          </a>
        </div>
        <div className="collapse_ position-relative" id="collapseSearch">
          <div className="d-flex flex-column align-items-end">
            <div className=" d-flex flex-column flex-md-row justify-content-between w-100 ">
              <div className={`${styles.datePickerWrapper} mr-md-4  d-flex`}>
                <DatePicker
                  label="از"
                  // timePicker={false}
                  // onClickSubmitButton={handleChange}
                  onClickSubmitButton={(fromDate) => setFromDate(fromDate.value.toISOString())}
                />
                <DatePicker
                  label="تا"
                  // timePicker={false}
                  onClickSubmitButton={(toDate) => settoDate(toDate.value.toISOString())}
                />
              </div>
              <select
                name="selectedService"
                onChange={(e) => setCategoryId([e.target.value])}
                className={`${styles.serviceSelect} form-select mr-md-3 `}
                aria-label=""
              >
                <option defaultChecked>سرویس ها</option>
                {catList &&
                  catList.map((item: any, newsIndex: number) => {
                    return (
                      <option key={newsIndex} value={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
              </select>

              <input
                type="text"
                name="tags"
                value={tags}
                onChange={(e) => setTags(turnToArray(e.target.value))}
                className={`${styles.keywords} mr-md-4 ml-lg-4 `}
                placeholder=" کلید واژه ها جداسازی با ,"
              ></input>
            </div>

            <div className="w-25 mt-4 text-left">
              <button type="submit" className={`${styles.searchButton} btn w-50 mr-auto`}>
                <span className="fa fa-search"></span>
              </button>
            </div>
          </div>
        </div>
      </form>
      {searchResult && searchResult.length > 0 && (
        <div className={`${styles.searchInner} mx-auto my-4 p-3`}>
          <ul className="row w-100">
            {searchResult.map((newsItem: INews, newsIndex: number) => {
              return (
                <li key={newsIndex} className={`${styles.newsItem} col-12 col-md-6 col-lg-3 mb-3`}>
                  <ArchiveItem newsItem={newsItem} width={500} height={360} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const catList = await CategoryApi.GetShortCategories(true, 1, 500);
  const SSRres = await api.get(`/news/api/News/GetPublishedNews`, {
    params: {
      Titr: query?.term,
    },
  });
  return {
    props: {
      catList: catList.data,
      SSRres: SSRres.data,
    },
  };
};

export default QuickSearchPage;
