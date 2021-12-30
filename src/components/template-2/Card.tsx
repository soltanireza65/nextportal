import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { INews } from "interfaces";
// import NextImage from "next/image";
import React from "react";

interface Props {
  newsItem: INews;
}

const Card = ({ newsItem }: Props) => {
  return (
    <Flex
      minH="60"
      h="60"
      overflow="hidden"
      flexDir="column"
      alignItems="center"
      marginX={{
        base: "12",
        md: "12",
        lg: "12",
      }}
      padding={{
        base: "12",
        md: "12",
        lg: "12",
      }}
      boxShadow="md"
      textAlign="center"
      paddingX={{ base: "10", md: "10" }}
      _hover={{
        transform: "scale(1.1, 1.1)",
        boxShadow: "0px 0px 20px 0px rgba(240,45,45,0.5)",
      }}
      transition="all 0.2s"
      borderRadius="20"
    >
      <Image
        // boxSize="20"
        mb="10"
        maxW="24"
        // minW="20"
        minH="16"
        // borderRadius="50%"
        src={
          (newsItem.mediaFiles[0].filePaths &&
            newsItem.mediaFiles[0].filePaths.length > 0 &&
            newsItem.mediaFiles[0].filePaths[0].filePath) ||
          ""
        }
      />
      <Heading
        color="#011F43"
        fontSize="small"
        fontWeight="normal"
        marginBottom="4"
      >
        {newsItem.titr}
      </Heading>
      <Text fontSize="smaller">{newsItem.lead}</Text>
    </Flex>
  );
};

export default Card;
