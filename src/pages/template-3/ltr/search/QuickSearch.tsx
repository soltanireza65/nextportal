import api, { NewsApi } from "axios/client";
import Layout from "components/template-3/Layout";
import ListItem from "components/template-3/ListItem/ListItem";
import { INews, IServiceResult } from "interfaces";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Select, { ActionMeta } from "react-select";
import { AppState } from "reduxStore/store";
import turnToArray from "utils/turnToArray";
import styles from "./QuickSearch.module.scss";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data: SSRres } = await api.get(`/news/api/News/GetPublishedNews`, {
    params: {
      Titr: query?.term,
    },
  });
  return { props: { SSRres } };
};

interface IProps {
  SSRres: IServiceResult<INews[]>;
}
const QuickSearchPage: NextPage<IProps> = ({ SSRres }) => {
  const categoryList = useSelector((store: AppState) => store.categories.entities);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [categoryId, setCategoryId] = useState([""]);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [searchResult, setSearchResult] = useState<INews[]>([]);

  const [services, setServices] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setServices(() =>
      categoryList.map((item: any, newsIndex: number) => {
        return { value: item.id, label: item.title };
      })
    );
  }, []);

  useEffect(() => {
    doSearch();
  }, [router.query.term]);

  const doSearch = async () => {
    const { data: res } = await NewsApi.GetPublishedNews({
      Titr: title,
      Tags: tags,
      DefaultCategoriesID: categoryId,
    });

    setSearchResult(res);

    if (SSRres && SSRres.data.length > 0) {
      setSearchResult(SSRres.data);
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    title.length > 0 ? router.push(`/search/QuickSearch?term=${title}`) : router.push(`/search/QuickSearch`);
    doSearch();
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      // width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      // color: state.selectProps.menuColor,
      // padding: 2,
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid white",
      background: state.isSelected ? "#54565A" : "#54565A",
      color: state.isSelected ? "white" : "white",
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      // width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      const color = "white";

      return { ...provided, opacity, transition, color };
    },
  };
  return (
    <Layout>
      <div className={`${styles.wrapper}`}>
        <form onSubmit={handleSubmit} className={`${styles.form} `}>
          <div className="d-flex border-bottom mb-5">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
              className={`${styles.input} pr-3 mr-lg-4`}
              placeholder="متن جستجو"
            />
            <input
              type="text"
              name="tags"
              value={tags}
              onChange={(e) => setTags(turnToArray(e.target.value))}
              className={`${styles.input} pr-3 mr-lg-4`}
              placeholder=" کلید واژه ها جداسازی با ,"
            ></input>

            <div onClick={handleSubmit} className="" style={{ cursor: "pointer" }}>
              <IoSearchOutline size="2rem" color="white" />
            </div>
          </div>

          <div className="d-flex border-bottom mb-5">
            <Select
              name="selectedService"
              options={services}
              defaultValue={services[0]}
              isClearable
              isSearchable
              className="w-100"
              onChange={({ value }, actionMeta: ActionMeta<any>) => setCategoryId([value])}
              styles={customStyles}
            />
          </div>
        </form>
        {searchResult && searchResult.length > 0 && (
          <ul className={`${styles.searchInner} mx-auto my-4 p-3`}>
            {searchResult.map((newsItem: INews, index: number) => {
              return (
                <li key={index} className={`${styles.newsItem} mb-3`}>
                  <ListItem newsItem={newsItem} width={150} height={150} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default QuickSearchPage;
