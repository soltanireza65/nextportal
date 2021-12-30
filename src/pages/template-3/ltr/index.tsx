import { Box } from "@chakra-ui/react"
import { CategoryApi, NewsApi } from "axios/client"
import FullWithNews from "components/template-3/FullWithNews/FullWithNews"
import Healthcare from "components/template-3/Healthcare/Healthcare"
import Hero from "components/template-3/Hero/Hero"
import Layout from "components/template-3/Layout"
import NewsSlider from "components/template-3/NewsSlider/NewsSlider"
import Services from "components/template-3/Services/Services"
import { INews, IServiceResult } from "interfaces"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { checkHasLocation } from "utils/checkHasLocation"
interface IProps {
  title: string
  heroNews: IServiceResult<INews[]>
  notes: IServiceResult<INews[]>
  rightAdvertize: IServiceResult<INews[]>
  topNews: IServiceResult<INews[]>
  specialNews: IServiceResult<INews[]>
  mostVisitedNews: IServiceResult<INews[]>
  latestNews: IServiceResult<INews[]>
  leftAdvertize: IServiceResult<INews[]>

  fullWith: IServiceResult<INews[]>
}

const IndexPage: NextPage<IProps> = ({
  title,
  heroNews,
  // notes,
  // rightAdvertize,
  // topNews,
  // specialNews,
  // mostVisitedNews,
  latestNews,
  // leftAdvertize,
  fullWith,
}) => {
  return (
    <Layout>
      <Box>
        <Head>
          <title>{title}</title>
          <link
            rel="canonical"
            href={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath}
          />
        </Head>
        <Box height={{ base: "350px", md: "50vh", lg: "90vh" }}>
          <Hero news={heroNews} />
        </Box>
        <Box bgColor="white" paddingBottom="16">
          <Healthcare title={"title"} news={latestNews} />
        </Box>

        <Box>
          <Services title={"title"} news={latestNews} />
        </Box>
        <Box bgColor="white">
          <FullWithNews news={heroNews} />
        </Box>
        <Box bgColor="white" paddingY="14">
          <NewsSlider title="آخرین اخبار" news={latestNews} />
        </Box>
        <Box bgColor="gray.100" paddingY="14">
          <NewsSlider title="رویدادها " news={latestNews} />
        </Box>
      </Box>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: MainPageCategory } = await CategoryApi.GetMainPageCategories(
    true
  )
  const { id, locations, title } = MainPageCategory[0]

  const heroNewsPromise = checkHasLocation(locations, "HERO")
    ? NewsApi.GetLocationNews(id, "HERO", 1)
    : null

  const notesPromise = checkHasLocation(locations, "NOTE")
    ? NewsApi.GetLocationNews(id, "NOTE", 6)
    : null
  const rightAdvertizePromise = checkHasLocation(locations, "RIGHT_ADVERTIZE")
    ? NewsApi.GetLocationNews(id, "RIGHT_ADVERTIZE", 1)
    : null
  const topNewsPromise = checkHasLocation(locations, "TOP")
    ? NewsApi.GetLocationNews(id, "TOP", 6)
    : null
  const specialNewsPromise = checkHasLocation(locations, "SPECIAL")
    ? NewsApi.GetLocationNews(id, "SPECIAL", 1)
    : null

  const mostVisitedNewsPromise = NewsApi.GetMostVisitedNewsNews([], "", 7)
  const latestNewsPromise = NewsApi.GetLatestNews([], "", 7)

  const leftAdvertizePromise = checkHasLocation(locations, "LEFT_ADVERTIZE")
    ? NewsApi.GetLocationNews(id, "LEFT_ADVERTIZE", 1)
    : null

  const fullWithPromise = checkHasLocation(locations, "FULLWITH")
    ? NewsApi.GetLocationNews(id, "FULLWITH", 2)
    : null

  const [
    heroNews,
    notes,
    rightAdvertize,
    topNews,
    specialNews,
    mostVisitedNews,
    latestNews,
    leftAdvertize,
    fullWith,
  ] = await Promise.all([
    heroNewsPromise,
    notesPromise,
    rightAdvertizePromise,
    topNewsPromise,
    specialNewsPromise,
    mostVisitedNewsPromise,
    latestNewsPromise,
    latestNewsPromise,
    leftAdvertizePromise,
    fullWithPromise,
  ])

  return {
    props: {
      title,

      heroNews: heroNews,
      notes: notes,
      rightAdvertize: rightAdvertize,

      topNews: topNews,
      specialNews: specialNews,

      mostVisitedNews: mostVisitedNews,
      latestNews: latestNews,
      leftAdvertize: leftAdvertize,
      fullWith: fullWith,
    },
  }
}

export default IndexPage
