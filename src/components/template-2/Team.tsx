// import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { INews, IServiceResult } from "interfaces";
import React from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Member from "./Member";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
interface IProps {
  news: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}

const Team = ({ news }: IProps) => {
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
    <Box>
      <Flex height="100%" flexDirection="column" justifyContent="space-around">
        <Heading
          color="#011F43"
          textAlign="center"
          fontSize="2xl"
          fontWeight="normal"
          mb={{
            base: "28",
            md: "28",
          }}
        >
          متخصصان تارنماگستر
        </Heading>

        <Box
          bgColor="#171111"
          px={{
            base: "5",
            md: "28",
          }}
        >
          <Box mt="-20" mb="14">
            <Swiper
              // slidesPerView={2}
              spaceBetween={20}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                960: {
                  slidesPerView: 5,
                },
              }}
            >
              {data &&
                data.map((newsItem: INews, index: number) => (
                  <SwiperSlide key={index}>
                    <Member newsItem={newsItem} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Team;
