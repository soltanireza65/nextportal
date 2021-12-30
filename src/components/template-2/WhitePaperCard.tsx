import { Box, Flex, Text } from "@chakra-ui/layout";
import { INews } from "interfaces";
import React from "react";
import { IoHourglassOutline, IoPersonCircleSharp } from "react-icons/io5";

interface Props {
  newsItem: INews;
}

const WhitePaperCard = ({ newsItem }: Props) => {
  return (
    <Box>
      <Box
        backgroundImage={
          (newsItem.mediaFiles[0].filePaths &&
            newsItem.mediaFiles[0].filePaths.length > 0 &&
            newsItem.mediaFiles[0].filePaths[0].filePath) ||
          ""
        }
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius="20px"
        overflow="hidden"
        boxShadow="sm"
      >
        <Flex
          alignItems="center"
          minH="40"
          // h="40"
          bgGradient="linear(to-tr,red.500,transparent,blackAlpha.800)"
          paddingX="5"
        >
          <Text color="white">{newsItem.titr}</Text>
        </Flex>

        <Flex
          paddingY="4"
          paddingX="5"
          backgroundColor="gray.100"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <IoPersonCircleSharp size="20px" />
            <Text marginStart="2">{newsItem.authorUserFullName}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>4 min</Text>
            <IoHourglassOutline size="20px" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default WhitePaperCard;
