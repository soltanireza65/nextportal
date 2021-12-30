import { Box, Container, Grid, GridItem, List, Text } from "@chakra-ui/react";
import { CategoryApi, NewsApi } from "axios/client";
import CategoryListItem from "components/template-3/CategoryListItem/CategoryListItem";
import InnerHero from "components/template-3/InnerHero/InnerHero";
import Layout from "components/template-3/Layout";
import NewsCard from "components/template-3/NewsCard/NewsCard";
import NewsList from "components/template-3/NewsList/NewsList";
import { ICategory, INews, IServiceResult } from "interfaces";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "reduxStore/store";
import { checkHasLocation } from "utils/checkHasLocation";

interface IProps {
  title: string;
  category: any;
  heroNews: IServiceResult<INews[]>;
  latestNews: IServiceResult<INews[]>;
}

const ServicePage: NextPage<IProps> = ({ title, category, heroNews, latestNews }: IProps) => {
  const router = useRouter();

  let [cat] = useSelector((store: AppState) => store.categories.entities).filter(
    (item: ICategory) => item.categoryCode == Number(router.query.slug[0])
  ) as ICategory[];

  const links = [
    {
      title: category.title,
      url: "",
    },
  ];

  return (
    <Layout title={title}>
      <Box backgroundColor="white" paddingBottom="10">
        <Head>
          <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath} />
        </Head>

        <Box height={{ base: "350px", md: "50vh", lg: "70vh" }}>
          <InnerHero
            title={category.title}
            imgSrc={cat.mediaFiles[0].filePath || "/images/item.jpg"}
            breadCrumb={links}
          />
        </Box>
        <Container maxW="container.lg">
          <Text fontSize="large" marginY="10" boxShadow="lg">
            {category.description}
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            <GridItem
              colSpan={1}
              order={{
                base: 2,
                md: 1,
                lg: 1,
              }}
            >
              <List boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.25)" spacing={3} rounded="15px" padding="10px">
                {cat.childs.length > 0 &&
                  cat.childs.map((category, index) => {
                    return <CategoryListItem key={index} category={category} />;
                  })}
              </List>
              <Box
                boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.25)"
                rounded="15px"
                padding="10px"
                marginTop="10px"
                //   padding="10px"
                //   paddingTop="10px"
              >
                <NewsList news={latestNews} width={70} height={70} />
              </Box>
            </GridItem>
            <GridItem
              order={{
                base: 1,
                md: 2,
                lg: 2,
              }}
              colSpan={3}
            >
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={6}
              >
                {latestNews &&
                  latestNews.data.length > 0 &&
                  latestNews.data.map((newsItem: INews, index: number) => <NewsCard newsItem={newsItem} />)}
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;

  if (slug && slug.length > 2) {
    return { notFound: true };
  }

  // const [catCode, titr] = slug
  let catCode = slug ? slug[0] : "";
  // let titr = slug ? slug[1] : ""

  const { data: category } = await CategoryApi.GetCategoryByCategoryCode(catCode);

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
  } = category;

  // getChildCategories

  const specialNews = checkHasLocation(locations, "SPECIAL") ? await NewsApi.GetLocationNews(id, "SPECIAL", 1) : null;
  const mostVisitedNews = await NewsApi.GetMostVisitedNewsNews([], "", 7);
  const latestNews = await NewsApi.GetLatestNews([], "", 7);

  return {
    props: {
      title,
      category,
      specialNews,
      mostVisitedNews,
      latestNews,
    },
  };
};
export default ServicePage;
