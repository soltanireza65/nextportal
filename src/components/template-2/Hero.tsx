import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { INews, IServiceResult } from "interfaces";
import React from "react";
import CircleDevider from "./CircleDevider";
import Bars from "./icons/Bars";
interface IProps {
  news: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}

const Hero = ({ news }: IProps) => {
  const { data, message, status } = news;

  if (data.length < 1 || status == 2) {
    return (
      <Box>
        <Heading as="h1" size="4xl" isTruncated>
          {message}
        </Heading>
      </Box>
    );
  }
  return (
    <>
      {data &&
        data.map((newsItem: INews, index: number) => (
          <Box
            key={index}
            backgroundImage={
              (newsItem.mediaFiles[0].filePaths &&
                newsItem.mediaFiles[0].filePaths.length > 0 &&
                newsItem.mediaFiles[0].filePaths[0].filePath) ||
              ""
            }
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            <Box
              pos="relative"
              backgroundColor="blackAlpha.700"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Flex
                alignItems="center"
                width={{ base: "full", md: "full", lg: "50vw" }}
                marginStart="auto"
                textAlign="center"
                bottom="0"
                paddingY={{ base: "24", md: "44", lg: "56" }}
                paddingEnd={{ base: "0", md: "0", lg: "44" }}
              >
                <Box>
                  <Heading
                    fontSize="5xl"
                    fontWeight="light"
                    marginBottom="20"
                    color="white"
                  >
                    {newsItem.titr}
                  </Heading>
                  <Flex marginStart="12">
                    <Text
                      flex="1"
                      fontSize="large"
                      color="white"
                      p={{
                        base: "5",
                        md: "0",
                      }}
                    >
                      {newsItem.lead}
                    </Text>

                    <Box marginStart="12">
                      <Bars />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              <CircleDevider />
            </Box>
          </Box>
        ))}
    </>
  );
};

export default Hero;
