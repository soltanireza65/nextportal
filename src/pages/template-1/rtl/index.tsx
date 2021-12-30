import { CategoryApi, NewsApi } from "axios/client";
import MultiMedia from "components/MultiMedia/MultiMedia";
import { default as Ad, default as HomeAd } from "components/template-1/Ad/Ad";
// import Radio from 'components/Radio/Radio'
import NewsCard from "components/template-1/News/NewsCard/NewsCard";
import NewsList from "components/template-1/News/NewsList/NewsList";
import NewsListWithBullet from "components/template-1/News/NewsListWithBullet/NewsListWithBullet";
// import NewsList from 'components/News/NewsList/NewsList'
import NewsWrapper from "components/template-1/News/NewsWrapper";
import PollingItem from "components/template-1/Polling/PollingItem";
import Layout from "components/template-1/shared/Layout";
import { INews, IServiceResult, LocationModuleType } from "interfaces";
import { SiteLinksSearchBoxJsonLd } from "next-seo";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { GetPollingByContentID } from "reduxStore/pollingSlice";
import { AppState, wrapper } from "reduxStore/store";
import { checkHasLocation } from "utils/checkHasLocation";
import { adMock } from "utils/sample-data";

interface IProps {
  title: string;
  upperNoteNews: IServiceResult<INews[]>;
  notes: IServiceResult<INews[]>;
  rightAdvertize: IServiceResult<INews[]>;
  topNews: IServiceResult<INews[]>;
  specialNews: IServiceResult<INews[]>;
  mostVisitedNews: IServiceResult<INews[]>;
  latestNews: IServiceResult<INews[]>;
  leftAdvertize: IServiceResult<INews[]>;

  multiMedia: IServiceResult<INews[]>;
}

const IndexPage: React.FC<IProps> = ({
  title,
  upperNoteNews,
  notes,
  topNews,
  specialNews,
  mostVisitedNews,
  latestNews,
  multiMedia,
}) => {
  const { entities: pollings } = useSelector((store: AppState) => store.pollings);

  return (
    <Layout>
      <SiteLinksSearchBoxJsonLd
        url={process.env.NEXT_PUBLIC_SITE_URL + ""}
        potentialActions={[
          {
            target: `${process.env.NEXT_PUBLIC_SITE_URL}/search/QuickSearch?term`,
            queryInput: "search_term_string",
          },
        ]}
      />

      <Head>
        <title>{title}</title>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath} />
      </Head>
      <div className="container-fluid my-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 order-2 order-md-1">
              {pollings.length > 0 && (
                <NewsWrapper title="نظرسنجی روز">
                  {pollings.map((polling) => (
                    <PollingItem polling={polling} key={polling.id} />
                  ))}
                </NewsWrapper>
              )}

              <div className="mt-3 mt-md-0">
                <NewsCard news={upperNoteNews} width={255} height={192} />
              </div>
              <div className="mt-3">
                <NewsWrapper title="یادداشت">
                  <NewsList news={notes} width={93} height={68} />
                </NewsWrapper>
              </div>
              <div className="mt-3">
                {/* <Radio
                  image='/images/audio_cover.png'
                  audio='/audios/audio.mp3'
                /> */}
              </div>
              <div className="mt-3">
                <Ad ad={adMock} width={250} height={250} />
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div>
                <NewsCard news={topNews} width={628} height={472} />
              </div>
              <div className="mt-3">
                <NewsWrapper>
                  <NewsList news={specialNews} width={93} height={68} />
                </NewsWrapper>
              </div>
            </div>
            <div className="col-12 col-md-3 order-3 order-md-3">
              <div className="mt-3 mt-md-0">
                <NewsWrapper title="پربازدیدترین خبرها">
                  <NewsListWithBullet news={mostVisitedNews} />
                </NewsWrapper>
              </div>
              <div className="mt-3">
                <NewsWrapper title="آخرین خبرها">
                  <NewsListWithBullet news={latestNews} />
                </NewsWrapper>
              </div>
              <div className="mt-3">
                <HomeAd ad={adMock} width={250} height={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeButtomSection bg-dark m-0 p-0">
        <div className="container">
          <MultiMedia news={multiMedia} width={550} height={390} />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { data: MainPageCategory } = await CategoryApi.GetMainPageCategories(true);
  const { id, locations, title } = MainPageCategory[0];

  const upperNoteNewsPromise = checkHasLocation(locations, "UPPERNOTE")
    ? NewsApi.GetLocationNews(id, "UPPERNOTE", 1)
    : null;

  const notesPromise = checkHasLocation(locations, "NOTE") ? NewsApi.GetLocationNews(id, "NOTE", 6) : null;
  const rightAdvertizePromise = checkHasLocation(locations, "RIGHT_ADVERTIZE")
    ? NewsApi.GetLocationNews(id, "RIGHT_ADVERTIZE", 1)
    : null;
  const topNewsPromise = checkHasLocation(locations, "TOP") ? NewsApi.GetLocationNews(id, "TOP", 6) : null;
  const specialNewsPromise = checkHasLocation(locations, "SPECIAL") ? NewsApi.GetLocationNews(id, "SPECIAL", 1) : null;

  const mostVisitedNewsPromise = NewsApi.GetMostVisitedNewsNews([], "", 7);
  const latestNewsPromise = NewsApi.GetLatestNews([], "", 7);

  const leftAdvertizePromise = checkHasLocation(locations, "LEFT_ADVERTIZE")
    ? NewsApi.GetLocationNews(id, "LEFT_ADVERTIZE", 1)
    : null;

  const multiMediaPromise = checkHasLocation(locations, "MULTIMEDIA")
    ? NewsApi.GetLocationNews(id, "MULTIMEDIA", 2)
    : null;

  const pollingsPromise = store.dispatch(
    GetPollingByContentID({
      ModuleType: LocationModuleType.Category,
      ContentId: id,
    })
  );
  const [
    upperNoteNews,
    notes,
    rightAdvertize,

    topNews,
    specialNews,

    mostVisitedNews,
    latestNews,
    leftAdvertize,
    multiMedia,
  ] = await Promise.all([
    upperNoteNewsPromise,
    notesPromise,
    rightAdvertizePromise,
    topNewsPromise,
    specialNewsPromise,
    mostVisitedNewsPromise,
    latestNewsPromise,
    leftAdvertizePromise,
    multiMediaPromise,
    pollingsPromise,
  ]);

  return {
    props: {
      title,
      upperNoteNews,
      notes,
      rightAdvertize,

      topNews,
      specialNews,

      mostVisitedNews,
      latestNews,
      leftAdvertize,
      multiMedia,
    },
  };
});
export default IndexPage;
