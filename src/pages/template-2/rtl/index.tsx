import { CategoryApi, NewsApi } from "axios/client";
import About from "components/template-2/About";
import Customers from "components/template-2/Customers";
import FAQ from "components/template-2/FAQ";
import Hero from "components/template-2/Hero";
import LastestNews from "components/template-2/LastestNews";
import Layout from "components/template-2/layout/Layout";
import Services from "components/template-2/Services";
import Team from "components/template-2/Team";
import WhitePaper from "components/template-2/WhitePaper";
import { INews, IServiceResult } from "interfaces";
import { SiteLinksSearchBoxJsonLd } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { wrapper } from "reduxStore/store";
import { checkHasLocation } from "utils/checkHasLocation";

interface IProps {
  title?: string;
  topNews?: IServiceResult<INews[]>;
  aboutCompany?: IServiceResult<INews[]>;
  latestNews?: IServiceResult<INews[]>;
  companyServices?: IServiceResult<INews[]>;
  customers?: IServiceResult<INews[]>;
  team?: IServiceResult<INews[]>;
  newslater?: IServiceResult<INews[]>;
  whitePaper?: IServiceResult<INews[]>;
  FAQFirst?: IServiceResult<INews[]>;
  FAQSecond?: IServiceResult<INews[]>;
}

const IndexPage: React.FC<IProps> = ({
  title,
  topNews,
  aboutCompany,
  latestNews,
  companyServices,
  customers,
  whitePaper,
  team,
  newslater,
  FAQFirst,
  FAQSecond,
}) => {
  return (
    <Layout title={title}>
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
      <Hero news={topNews} />
      <About news={aboutCompany} />
      <Services news={companyServices} />
      <Customers news={customers} />
      <Team news={team} />
      <WhitePaper news={whitePaper} />
      <LastestNews latestNews={latestNews} newslater={newslater} />
      <FAQ FAQFirst={FAQFirst} FAQSecond={FAQSecond} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { data: MainPageCategory } = await CategoryApi.GetMainPageCategories(true);

  const { id, locations, title } = MainPageCategory[0];

  const topNewsPromise = checkHasLocation(locations, "TOP") ? NewsApi.GetLocationNews(id, "TOP", 1) : null;

  const aboutCompanyPromise = checkHasLocation(locations, "ABOUT_COMPANY")
    ? NewsApi.GetLocationNews(id, "ABOUT_COMPANY", 6)
    : null;
  const companyServicesPromise = checkHasLocation(locations, "COMPANY_SERVICES")
    ? NewsApi.GetLocationNews(id, "COMPANY_SERVICES", 6)
    : null;
  const customersPromise = checkHasLocation(locations, "CUSTOMERS")
    ? NewsApi.GetLocationNews(id, "CUSTOMERS", 6)
    : null;
  const teamPromise = checkHasLocation(locations, "TEAM") ? NewsApi.GetLocationNews(id, "TEAM", 6) : null;
  const newslaterPromise = checkHasLocation(locations, "NEWSLATER")
    ? NewsApi.GetLocationNews(id, "NEWSLATER", 6)
    : null;
  const whitePaperPromise = checkHasLocation(locations, "WHITE_PAPER")
    ? NewsApi.GetLocationNews(id, "WHITE_PAPER", 6)
    : null;
  const FAQ_FIRSTPromise = checkHasLocation(locations, "FAQ_FIRST")
    ? NewsApi.GetLocationNews(id, "FAQ_FIRST", 6)
    : null;
  const FAQ_SECONDPromise = checkHasLocation(locations, "FAQ_SECOND")
    ? NewsApi.GetLocationNews(id, "FAQ_SECOND", 6)
    : null;

  const latestNewsPromise = NewsApi.GetLatestNews([], "", 7);

  const [
    topNews,
    aboutCompany,
    latestNews,
    companyServices,
    customers,
    team,
    newslater,
    whitePaper,
    FAQFirst,
    FAQSecond,
  ] = await Promise.all([
    topNewsPromise,
    aboutCompanyPromise,
    latestNewsPromise,
    companyServicesPromise,
    customersPromise,
    teamPromise,
    newslaterPromise,
    whitePaperPromise,
    FAQ_FIRSTPromise,
    FAQ_SECONDPromise,
  ]);

  return {
    props: {
      title,
      topNews,
      aboutCompany,
      latestNews,
      companyServices,
      customers,
      whitePaper,
      team,
      newslater,
      FAQFirst,
      FAQSecond,
    },
  };
});
export default IndexPage;
