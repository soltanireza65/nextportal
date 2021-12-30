import { CommentsApi, NewsApi } from "axios/client";
import DateWidget from "components/shared/Date/PublishedDate";
import Badge from "components/template-1/Badge/Badge";
import Breadcrumb from "components/template-1/Breadcrumb/Breadcrumb";
import CommentList from "components/template-1/Comments/commentList";
import Keywords from "components/template-1/Keywords/Keywords";
import NewsList from "components/template-1/News/NewsList/NewsList";
import NewsListWithBullet from "components/template-1/News/NewsListWithBullet/NewsListWithBullet";
import NewsWrapper from "components/template-1/News/NewsWrapper";
import Radio from "components/template-1/Radio/Radio";
import Layout from "components/template-1/shared/Layout";
import { IComment, IMediaFile, INews, IServiceResult } from "interfaces";
import { GetServerSideProps, NextPage } from "next";
import { BreadcrumbJsonLd, LogoJsonLd, NewsArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getImages } from "utils/getImages";
import styles from "./Item.module.scss";

interface IProps {
  newsItem: IServiceResult<INews>;
  relatedNews: IServiceResult<INews[]>;
  comments: IComment[];
  images: string[];
}

const NewsItemPage: NextPage<IProps> = ({ newsItem, relatedNews, comments, images }) => {
  let { data: newsItemResult, status, message } = newsItem;
  if (newsItemResult && status == 2) {
    return (
      <div className={styles.wrapper}>
        <h4>{message}</h4>
      </div>
    );
  }

  const [mainMedia, setMainMedia] = useState<IMediaFile[]>(
    newsItemResult?.mediaFiles?.filter((mediaFile) => mediaFile.mediaFileType === 1)
  );

  //   const [images, setImages] = useState<string[]>([])
  useEffect(() => {
    // setImages(getImages(newsItemResult.mediaFiles))
  }, []);
  return (
    <Layout>
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
        // TODO Add twitter handle => SINA
        // twitter={{
        //   handle: '@handle',
        //   site: '@site',
        //   cardType: 'summary_large_image',
        // }}
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
      <div className="container-fluid my-3" itemScope itemType="https://schema.org/Article">
        <div className="container">
          <div className="row">
            {newsItemResult && (
              <div className="col-12 col-md-8 bg-white px-0 position-relative ">
                {newsItemResult.mediaFiles && (
                  <div className="main-image-wrapper">
                    <Image
                      src={mainMedia[0]?.filePaths[0].filePath}
                      // src={
                      //   (newsItemResult.mediaFiles[0].filePaths &&
                      //     newsItemResult.mediaFiles[0].filePaths.length > 0 &&
                      //     newsItemResult.mediaFiles[0].filePaths[0].filePath) ||
                      //   ""
                      // }
                      width={1000}
                      height={600}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <Badge title="رازی پرس" />
                  </div>
                )}

                <div className="news-item-bg py-2 px-3">
                  <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                    {newsItemResult.breadCrumb && <Breadcrumb links={newsItemResult.breadCrumb} />}
                    {newsItemResult.persianStartPublishDateTime && (
                      <DateWidget dateTime={newsItemResult.persianStartPublishDateTime} />
                    )}
                  </div>
                  <div className={`${styles.contentWrapper} mt-2 py-2 w-100`}>
                    {newsItemResult.rotitr && <h3 className={`${styles.newsRotitr} m-0`}>{newsItemResult.rotitr}:</h3>}
                    <h1 className={`${styles.newsTitrWrapper} my-3 font-weight-bold`}>
                      {newsItemResult.titr && (
                        <a className={styles.newsTitr} href="" itemProp="name">
                          {newsItemResult.titr}
                        </a>
                      )}
                    </h1>
                    {newsItemResult.lead && <h2>TODO {newsItemResult.lead}</h2>}
                    {/* {newsItemResult.content && <p itemProp="description" dangerouslySetInnerHTML={{ __html: newsItemResult.content }}> </p>} */}
                    {newsItemResult.newsCode && (
                      <div className="my-3">
                        <span className={`${styles.pillData} m-1`}>کد خبر : {newsItemResult.newsCode}</span>
                      </div>
                    )}
                    {relatedNews && (
                      <div className="related-news-wrapper">
                        <h6 className={`${styles.relatedNewsHeader} my-3 font-weight-bold`}>
                          پیشنهاد میکنیم این مطالب را هم بخوانید
                        </h6>
                        <NewsWrapper>
                          <div style={{ backgroundColor: "#FBFDCC" }}>
                            {relatedNews && <NewsList news={relatedNews} width={250} height={160} />}
                          </div>
                        </NewsWrapper>
                      </div>
                    )}
                    {newsItemResult.tags && <Keywords tags={newsItemResult.tags} />}
                    <CommentList contentId={newsItemResult.id.toString()} commentList={comments} moduleType={1} />
                  </div>
                </div>
              </div>
            )}
            <div className="col-12 col-md-4">
              <div className="mt-3">
                <NewsWrapper title="پربازدیدترین خبرها">
                  <NewsListWithBullet news={relatedNews} />
                </NewsWrapper>
              </div>
              <div className="mt-3">
                <Radio image="/images/audio_cover.png" audio="/audios/audio.mp3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const newsItem = await NewsApi.GetNewsByNewsCode(params?.slug[0] ? params?.slug[0] : "");
  const relatedNews = await NewsApi.GetRelatedNewsById(newsItem.data.id, 6);

  const { data: comments } = await CommentsApi.GetModuleComment(newsItem.data.id, 1);

  const images = getImages(newsItem.data.mediaFiles);

  return {
    props: {
      newsItem,
      relatedNews,
      comments,
      images,
    },
  };
};

export default NewsItemPage;
