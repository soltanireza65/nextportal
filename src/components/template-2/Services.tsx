import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { INews, IServiceResult } from "interfaces";
import React, { useState } from "react";
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CircleDevider from "./CircleDevider";
import Content from "./icons/Content";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

interface IProps {
  news: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}
const Services = ({ news }: IProps) => {
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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box
      position="relative"
      justifyContent="center"
      alignItems="center"
      backgroundImage="/images/template-2/0-1.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      py={{
        base: "0",
        md: "28",
      }}
    >
      <Box
        pos="relative"
        boxShadow="0px 0px 15px 5px rgba(0,0,0,0.75)"
        maxW="5xl"
        mx="auto"
        borderRadius="20px"
        overflow="hidden"
        py={{
          base: "5",
          md: "5",
        }}
      >
        <Box>
          <Swiper
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
          >
            {data &&
              data.map((newsItem: INews, index: number) => (
                <SwiperSlide>
                  <Flex
                    flexDir="column"
                    // bgColor="blackAlpha.100"

                    mx={{
                      base: "5",
                      md: "14",
                    }}
                    textAlign="center"
                  >
                    <Heading
                      fontWeight="medium"
                      textAlign="center"
                      mt={{
                        base: "8",
                        md: "16",
                      }}
                      mb={{
                        base: "8",
                        md: "20",
                      }}
                      as="h4"
                      color="#FF4343"
                    >
                      {newsItem.titr}
                    </Heading>
                    <Text
                      fontSize="small"
                      color="whiteAlpha.500"
                      my="14"
                      mx={{
                        base: "2",
                        md: "20",
                      }}
                    >
                      {newsItem.lead}
                    </Text>
                  </Flex>
                </SwiperSlide>
              ))}
          </Swiper>

          <Box
            mx={{
              base: "0",
              md: "28",
            }}
          >
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >
              {data &&
                data.map((newsItem: INews, index: number) => (
                  <SwiperSlide>
                    <Box
                      cursor="pointer"
                      // m="5"
                      color="whiteAlpha.500"
                      _hover={{
                        color: "red.800",
                      }}
                    >
                      <Flex
                        justifyContent="center"
                        alignItems="center"
                        boxSize={{ base: "20", md: "28" }}
                        border="1px solid gray"
                        borderRadius="50%"
                        position="relative"
                        _hover={{
                          borderColor: "red.800",
                          _after: {
                            content: "' '",
                            position: "absolute",
                            bgColor: "red",
                            bottom: "0",
                            marginBottom: "-3px",
                            width: "4px",
                            height: "4px",
                          },
                        }}
                      >
                        <Image
                          boxSize={{
                            base: "24",
                            md: "",
                          }}
                          src={
                            (newsItem.mediaFiles[0].filePaths &&
                              newsItem.mediaFiles[0].filePaths.length > 0 &&
                              newsItem.mediaFiles[0].filePaths[0].filePath) ||
                            ""
                          }
                        />
                      </Flex>
                    </Box>
                  </SwiperSlide>
                ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
      <Flex justifyContent="center">
        <CircleDevider />
      </Flex>
    </Box>
  );
};

export default Services;
