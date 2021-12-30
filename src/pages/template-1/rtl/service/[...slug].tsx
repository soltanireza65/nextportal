import { CategoryApi, NewsApi } from "axios/client"
import NewsList from "components/template-1/News/NewsList/NewsList"
import NewsListWithBullet from "components/template-1/News/NewsListWithBullet/NewsListWithBullet"
import NewsWrapper from "components/template-1/News/NewsWrapper"
import Radio from "components/template-1/Radio/Radio"
import Layout from "components/template-1/shared/Layout"
import { INews, IServiceResult } from "interfaces"
import { GetServerSideProps } from "next"
import { NextSeo } from "next-seo"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import React from "react"
import { checkHasLocation } from "utils/checkHasLocation"

interface IProps {
  title: string
  specialNews: IServiceResult<INews[]>
  mostVisitedNews: IServiceResult<INews[]>
  latestNews: IServiceResult<INews[]>
}

const ServicePage: React.FC<IProps> = ({
  title,
  mostVisitedNews,
  specialNews,
  latestNews,
}) => {
  return (
    <Layout>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <Head>
        <title>{title}</title>
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath}
        />
        <meta property="og:type" content="website" />

        <meta property="og:locale" content="fa" />
        <meta property="og:site_name" content={title} />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath}
        />
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
        <meta
          name="twitter:domain"
          content={process.env.NEXT_PUBLIC_SITE_URL}
        />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITE_TITLE}
        />
        {/* <meta property='og:article:author' content='' /> */}
        {/* <meta property='og:article:section' content='' /> */}
      </Head>
      <div className="container-fluid my-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 order-2 order-md-1">
              <Radio
                image="/images/audio_cover.png"
                audio="/audios/audio.mp3"
              />
              {mostVisitedNews && (
                <div className="mt-3">
                  <NewsWrapper title="پربازدیدترین خبرها">
                    <NewsListWithBullet news={mostVisitedNews} />
                  </NewsWrapper>
                </div>
              )}
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              {specialNews && (
                <div className="mt-3">
                  <NewsWrapper>
                    <NewsList news={specialNews} width={200} height={120} />
                  </NewsWrapper>
                </div>
              )}
            </div>
            <div className="col-12 col-md-3 order-3 order-md-3">
              <div className="mt-3">
                <NewsWrapper title="آخرین خبرها">
                  <NewsListWithBullet news={latestNews} />
                </NewsWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug
  let catCode = slug ? slug[0] : ""
  // let titr = slug ? slug[1] : ""

  if (slug && slug.length > 2) {
    return { notFound: true }
  }
  const { data: catResult } = await CategoryApi.GetCategoryByCategoryCode(
    catCode
  )

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
  } = catResult

  const specialNews = checkHasLocation(locations, "SPECIAL")
    ? await NewsApi.GetLocationNews(id, "SPECIAL", 1)
    : null
  const mostVisitedNews = await NewsApi.GetMostVisitedNewsNews([], "", 7)
  const latestNews = await NewsApi.GetLatestNews([], "", 7)

  return {
    props: {
      title,
      specialNews,
      mostVisitedNews,
      latestNews,
    },
  }
}

export default ServicePage
