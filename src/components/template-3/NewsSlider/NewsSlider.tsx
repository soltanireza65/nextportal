import { Box, Container, Heading } from "@chakra-ui/react"
import { INews, IServiceResult } from "interfaces"
import React from "react"
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper"
// import Swiper from "react-id-swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import NewsCard from "../NewsCard/NewsCard"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

interface IProps {
  title: string
  news: IServiceResult<INews[]>
}

const NewsSlider = ({ title, news }: IProps) => {
  const { data, message, status } = news

  if (data.length < 1 || status == 2) {
    return (
      <Box>
        <Heading as="h1" size="4xl" isTruncated>
          {message}
        </Heading>
      </Box>
    )
  }

  return (
    <Container w="90%" maxW="full">
      <Heading as="h3" color="gray.500" mb="10" h="20" isTruncated>
        {title}
      </Heading>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          "640": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "768": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "1024": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {data &&
          data.map((newsItem: INews, index: number) => (
            <SwiperSlide>
              {/* <ServiceCard
                key={index}
                newsItem={newsItem}
                width={200}
                height={150}
              /> */}
              <NewsCard
                key={index}
                newsItem={newsItem}
                width={200}
                height={150}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default NewsSlider
