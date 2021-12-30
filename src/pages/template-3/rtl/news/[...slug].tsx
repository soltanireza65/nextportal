import { Box, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import { CommentsApi, NewsApi } from "axios/client"
import CommentList from "components/shared/Comments/commentList"
import DateWidget from "components/shared/Date/PublishedDate"
import Keywords from "components/shared/Keywords/Keywords"
import Radio from "components/template-1/Radio/Radio"
import InnerHero from "components/template-3/InnerHero/InnerHero"
import Layout from "components/template-3/Layout"
import NewsList from "components/template-3/NewsList/NewsList"
import NewsListWithBullet from "components/template-3/NewsListWithBullet/NewsListWithBullet"
import { IComment, IMediaFile, INews, IServiceResult } from "interfaces"
import { GetServerSideProps, NextPage } from "next"
import {
  BreadcrumbJsonLd,
  LogoJsonLd,
  NewsArticleJsonLd,
  NextSeo,
} from "next-seo"
import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import styles from "./Item.module.scss"

interface IProps {
  newsItem: IServiceResult<INews>
  relatedNews: IServiceResult<INews[]>
  comments: IComment[]
  images: string[]
}

const NewsItemPage: NextPage<IProps> = ({
  newsItem,
  relatedNews,
  comments,
  images,
}) => {
  let { data: newsItemResult, status, message } = newsItem
  if (newsItemResult && status == 2) {
    return (
      <div className={styles.wrapper}>
        <h4>{message}</h4>
      </div>
    )
  }
  const [mainMedia, setMainMedia] = useState<IMediaFile[]>(
    newsItemResult?.mediaFiles?.filter(
      (mediaFile) => mediaFile.mediaFileType === 1
    )
  )
  return (
    <Layout title={newsItemResult.title}>
      <>
        <NextSeo
          canonical={process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath}
          title={newsItemResult.titr}
          defaultTitle={`jjj | ${newsItemResult.titr}`}
          noindex={false}
          nofollow={false}
          robotsProps={{
            nosnippet: false,
            notranslate: false,
            noimageindex: false,
            noarchive: false,
            maxSnippet: -1,
            maxImagePreview: "standard",
          }}
          additionalMetaTags={[
            {
              property: "dc:creator",
              content: newsItemResult.authorUserFullName,
            },

            {
              httpEquiv: "x-ua-compatible",
              content: "IE=edge; chrome=1",
            },
          ]}
          openGraph={{
            type: "article",
            url: process.env.NEXT_PUBLIC_SITE_URL + useRouter().asPath,
            // titr
            title: newsItemResult.titr,
            // description: '',
            images: [
              // pass
              {
                // url: newsItemResult.mediaFiles?[0].filePaths[0].filePath,
                url: "",
                width: 800,
                height: 600,
                alt: newsItemResult.titr,
              },
            ],
            article: {
              publishedTime: newsItemResult.startPublishDateTime,
              modifiedTime: newsItemResult.lastModifiedDateTime,
              // section: 'Section II', TODO category
              tags: newsItemResult.tags,
            },

            site_name: process.env.NEXT_PUBLIC_SITE_TITLE,
          }}
        />

        <NewsArticleJsonLd
          keyOverride="NewsArticleJsonLd"
          url={process.env.NEXT_PUBLIC_SITE_TITLE + useRouter().asPath}
          title={newsItemResult.titr}
          // TODO Solve images data structure =>> wanna  array of strings ==> map over filePaths
          images={[
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg",
          ]}
          // TODO catch from router (Slug)
          section="politic"
          // TODO map array to str
          keywords={newsItemResult.tags.toString()}
          dateCreated={newsItemResult.createdDateTime}
          datePublished={newsItemResult.startPublishDateTime}
          dateModified={newsItemResult.lastModifiedDateTime}
          authorName={newsItemResult.authorUserFullName}
          publisherName={newsItemResult.authorUserFullName}
          publisherLogo={`${process.env.NEXT_PUBLIC_SITE_URL}/images/header-logo.png`}
          description={""} //newsItemResult.lead
          // TODO Just String, its required!!!
          body="This is all text for this news article"
          // body={newsItemResult.content?.toString()}
        />

        <BreadcrumbJsonLd
          keyOverride="BreadcrumbJsonLd"
          // TODO Breadcrumb isn't implemented yet, have to talk about
          itemListElements={[
            {
              position: 1,
              name: "Books",
              item: "https://example.com/books",
            },
            {
              position: 2,
              name: "Authors",
              item: "https://example.com/books/authors",
            },
            {
              position: 3,
              name: "Ann Leckie",
              item: "https://example.com/books/authors/annleckie",
            },
          ]}
        />
        <LogoJsonLd
          keyOverride="LogoJsonLd"
          logo={`${process.env.NEXT_PUBLIC_SITE_URL}/images/header-logo.png`}
          url={process.env.NEXT_PUBLIC_SITE_URL + ""}
        />
      </>

      <Box height={{ base: "350px", md: "50vh", lg: "70vh" }}>
        <InnerHero
          title={newsItemResult.titr}
          imgSrc={mainMedia[0]?.filePaths[0].filePath}
          breadCrumb={newsItemResult.breadCrumb}
        />
      </Box>
      <Container
        itemScope
        itemType="https://schema.org/Article"
        maxW="container.lg"
        backgroundColor="white"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            colSpan={3}
            order={{
              base: 1,
              md: 1,
              lg: 1,
            }}
          >
            <Box position="relative" backgroundColor="white" padding="5">
              <Box>
                {newsItemResult.persianStartPublishDateTime && (
                  <DateWidget
                    dateTime={newsItemResult.persianStartPublishDateTime}
                  />
                )}
              </Box>
              <Box className={`${styles.contentWrapper} mt-2 py-2 w-100`}>
                {newsItemResult.rotitr && (
                  <Text as="h3">{newsItemResult.rotitr}:</Text>
                )}
                <Heading as="h1" fontSize="1.6rem" marginY="3">
                  {newsItemResult.titr}
                </Heading>
                {newsItemResult.lead && <h2>TODO {newsItemResult.lead}</h2>}
                {newsItemResult.content && (
                  <p
                    itemProp="description"
                    dangerouslySetInnerHTML={{
                      __html: newsItemResult.content,
                    }}
                  ></p>
                )}
                {newsItemResult.newsCode && (
                  <Box className="my-3">
                    <Box
                      backgroundColor="gray.200"
                      padding="2"
                      display="inline-block"
                      rounded="15px"
                    >
                      کد خبر : {newsItemResult.newsCode}
                    </Box>
                  </Box>
                )}
                {relatedNews && (
                  <Box>
                    <Text as="h2" fontWeight="bold" marginY="3">
                      پیشنهاد میکنیم این مطالب را هم بخوانید
                    </Text>
                    <Box className={styles.relatedNewsWrapper}>
                      {relatedNews && (
                        <NewsList news={relatedNews} width={150} height={100} />
                      )}
                    </Box>
                  </Box>
                )}
                {newsItemResult.tags && <Keywords tags={newsItemResult.tags} />}
                <CommentList
                  contentId={newsItemResult.id.toString()}
                  commentList={comments}
                  moduleType={1}
                />
              </Box>
            </Box>
          </GridItem>
          <GridItem
            order={{
              base: 2,
              md: 2,
              lg: 2,
            }}
            colSpan={1}
          >
            <Box boxShadow="lg" padding="10px" marginTop="10px">
              <Text as="h2" fontWeight="bold" marginY="3">
                پربازدیدترین خبرها{" "}
              </Text>
              <NewsListWithBullet news={relatedNews} />
            </Box>
            <Box className="mt-3">
              <Radio
                image="/images/audio_cover.png"
                audio="/audios/audio.mp3"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const newsItem = await NewsApi.GetNewsByNewsCode(
    params?.slug[0] ? params?.slug[0] : ""
  )
  const relatedNews = await NewsApi.GetRelatedNewsById(newsItem.data.id, 6)

  const { data: comments } = await CommentsApi.GetModuleComment(
    newsItem.data.id,
    1
  )
  return {
    props: {
      newsItem,
      relatedNews,
      comments,
    },
  }
}

export default NewsItemPage
