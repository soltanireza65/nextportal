import { Box } from "@chakra-ui/layout";
import { CategoryApi, NewsApi } from "axios/client";
import InnerHero from "components/template-2/InnerHero";
import Layout from "components/template-2/layout/Layout";
import ServiceList from "components/template-2/ServiceList";
import { INews, IServiceResult } from "interfaces";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { checkHasLocation } from "utils/checkHasLocation";

interface IProps {
  title: string;
  specialNews: IServiceResult<INews[]>;
  mostVisitedNews: IServiceResult<INews[]>;
  latestNews: IServiceResult<INews[]>;
}

const ServicePage: React.FC<IProps> = ({ title, mostVisitedNews, specialNews, latestNews }) => {
  return (
    <Layout>
      <>
        <NextSeo title="Simple Usage Example" description="A short description goes here." />
        <Head>
          <title>{title}</title>
          <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath} />
          <meta property="og:type" content="website" />

          <meta property="og:locale" content="fa" />
          <meta property="og:site_name" content={title} />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath} />
          <meta property="og:title" content={title} />
          {/* <meta property='og:description' content='' /> */}
          {/* <meta property='og:image' content={data.mediaFiles[0].filePaths[0].filePath} /> */}
          {/* <meta name='twitter:card' content='' /> */}
          {/* <meta name='twitter:site' content='' /> */}
          {/* <meta name='twitter:creator' content='' /> */}
          <meta name="twitter:title" content={title} />
          {/* <meta name='twitter:description' content='' /> */}
          {/* <meta name='twitter:image:src' content='' /> */}
          {/* <meta name='twitter:image:alt' content='' /> */}
          <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_SITE_URL} />
          <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_TITLE} />
          {/* <meta property='og:article:author' content='' /> */}
          {/* <meta property='og:article:section' content='' /> */}
        </Head>
      </>
      <Box>
        <InnerHero title={title} />
        <ServiceList />
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  let catCode = slug ? slug[0] : "";
  // let titr = slug ? slug[1] : ""

  if (slug && slug.length > 2) {
    return { notFound: true };
  }
  const { data: catResult } = await CategoryApi.GetCategoryByCategoryCode(catCode);

  const {
    id,
    locations,
    title,
    // mediaFiles,
    // parentId,
    // childs,
    // additionalData,
    // isMainPageCategory,
    // categoryCode,
  } = catResult;

  const specialNews = checkHasLocation(locations, "SPECIAL") ? await NewsApi.GetLocationNews(id, "SPECIAL", 1) : null;
  const mostVisitedNews = await NewsApi.GetMostVisitedNewsNews([], "", 7);
  const latestNews = await NewsApi.GetLatestNews([], "", 7);

  return {
    props: {
      title,
      specialNews,
      mostVisitedNews,
      latestNews,
    },
  };
};

export default ServicePage;
