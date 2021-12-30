import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { INews, IServiceResult } from "interfaces";
import Link from "next/link";
import React from "react";
import { IoChevronBack } from "react-icons/io5";
import SwiperCore, { Pagination } from "swiper";
import CircleDevider from "./CircleDevider";

interface IProps {
  latestNews: IServiceResult<INews[]>;
  newslater: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}

SwiperCore.use([Pagination]);

const LastestNews = ({ latestNews,newslater }: IProps) => {
  const { data: latestNewsData, message:latestMessage, status:latestStatus } = latestNews;
  const { data: newslaterData, message:newslaterMessage, status:newslaterStatus } = newslater;

  if (latestNewsData.length < 1 || latestStatus == 2) {
    return (
      <Box>
        <Heading as="h1" size="4xl" isTruncated>
          {latestMessage}
        </Heading>
      </Box>
    );
  }
  return (
    <Box
      bgColor="#171111"
      pos="relative"
      px={{
        base: "5",
        md: "28",
      }}
      py={{
        base: "5",
        md: "14",
      }}
    >
      <Flex
        flexDirection={{
          base: "column",
          md: "row",
        }}
        alignItems="center"
      >
        <Box
          w={{
            base: "100%",
            md: "70%",
          }}
          boxShadow="dark-lg"
        >
          <Box
            py={{
              base: "5",
              md: "10",
            }}
            px={{
              base: "3",
              md: "6",
            }}
          >
            <Flex justifyContent="space-between" mb="4">
              <Heading fontSize="2xl" fontWeight="normal" color="red.500">
                آخرین خبر
              </Heading>
              <Flex
                justifyContent="flex-end"
                alignItems="center"
                cursor="pointer"
              >
                <Link href="#">
                  <Text
                    color="whiteAlpha.600"
                    // fontSize="2xl"
                    fontWeight="normal"
                  >
                    آرشیو
                  </Text>
                </Link>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  boxSize="10"
                  borderRadius="50%"
                  boxShadow="lg"
                  marginStart="4"
                >
                  <IoChevronBack color="red" />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-between"
            >
              {latestNewsData &&
                latestNewsData.slice(0, 3).map((newsItem: INews, index: number) => (
                  <Box
                    flex="1"
                    key={index}
                    color="whiteAlpha.700"
                    _hover={{
                      color: "red.700",
                    }}
                    m={{
                      base: "1",
                      md: "5",
                    }}
                  >
                    <Image
                      borderRadius={{
                        base: "4",
                        md: "14",
                      }}
                      maxH={{
                        base: "",
                        md: "",
                      }}
                      boxSize={
                        {
                          // base: "28",
                          // md: "300px",
                        }
                      }
                      // minW="28"
                      // maxH={{
                      //   base: "28",
                      //   md: "300px",
                      // }}
                      objectFit="cover"
                      objectPosition="center"
                      src={
                        (newsItem.mediaFiles[0].filePaths &&
                          newsItem.mediaFiles[0].filePaths.length > 0 &&
                          newsItem.mediaFiles[0].filePaths[0].filePath) ||
                        ""
                      }
                      alt="Segun Adebayo"
                    />
                    <Text mt="5">{newsItem.titr}</Text>
                  </Box>
                ))}
            </Flex>
          </Box>
        </Box>
        <Box
          w={{
            base: "100%",
            md: "30%",
          }}
          marginStart="5"
        >
          <Heading
            fontSize="3xl"
            fontWeight="normal"
            my="5"
            marginStart="10"
            color="red.500"
          >
            اطلاعیه
          </Heading>

          <Box
            maxH="sm"
            overflowY="scroll"
            className="latestNewsScroll"
            css={{
              "&::-webkit-scrollbar": {
                width: "5px",
                // display: "none",
                // scrollbarWidth: "none",
                // msOverflowStyle: "none",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#D8D8D8",
                borderRadius: "24px",
              },
            }}
          >
            {newslaterData &&
              newslaterData.map((newsItem: INews, index: number) => (
                <Text
                  Box
                  key={index}
                  color="white"
                  p="5"
                  _hover={{
                    boxShadow: "dark-lg",
                  }}
                  mb="2"
                >
                  {newsItem.titr}
                </Text>
              ))}
          </Box>
        </Box>
      </Flex>

      <Flex justifyContent="center">
        <CircleDevider />
      </Flex>
    </Box>
  );
};

export default LastestNews;
