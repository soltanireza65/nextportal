import { Box } from "@chakra-ui/layout";
import InnerHero from "components/template-2/InnerHero";
import Layout from "components/template-2/layout/Layout";
import NewsList from "components/template-2/NewsList";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

interface IProps {
  // newsItem: IServiceResult<INews>;
  // relatedNews: IServiceResult<INews[]>;
  // comments: IComment[];
  // store: any;
}

const NewsItemPage: NextPage<IProps> = (
  {
    // newsItem,
    //  comments,
    //   images
    // store,
  }
) => {
  // let { data: newsItemResult, status, message } = newsItem;
  // if (newsItemResult && status == 2) {
  //   return (
  //     <div>
  //       <h4>{message}</h4>
  //     </div>
  //   );
  // }

  return (
    <Layout>
      <Box>
        <InnerHero title={"title"} />
        <NewsList />
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const { newsItem } = await NewsApi.GetNewsByNewsCode(params?.slug[0] ? params?.slug[0] : "");
  // const relatedNews = await NewsApi.GetRelatedNewsById(newsItem.data.id, 6);

  // const { data: comments } = await CommentsApi.GetModuleComment(newsItem.data.id, 1);
  return {
    props: {
      // newsItem,
      // relatedNews,
      // comments,
    },
  };
};

export default NewsItemPage;
