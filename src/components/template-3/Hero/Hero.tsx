import { Box, Button, Container, Heading, Image } from "@chakra-ui/react"
import { INews, IServiceResult } from "interfaces"
import Link from "next/link"
import React, { Fragment } from "react"
import SwiperCore, { Autoplay, Pagination } from "swiper/core"
import { Swiper, SwiperSlide } from "swiper/react"
SwiperCore.use([Pagination, Autoplay])
interface IProps {
  news: IServiceResult<INews[]>
  width?: number
  height?: number
}

const Hero = ({ news }: IProps) => {
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
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      // className="mySwiper"
      className="h-100 "
    >
      {data &&
        data.map((newsItem: INews, index: number) => (
          <Fragment key={index}>
            <SwiperSlide className="h-100">
              <Box height="100%">
                <Image
                  src={
                    (newsItem.mediaFiles[0].filePaths &&
                      newsItem.mediaFiles[0].filePaths.length > 0 &&
                      newsItem.mediaFiles[0].filePaths[0].filePath) ||
                    ""
                  }
                  objectFit="cover"
                  backgroundPosition="center"
                  backgroundSize="cover"
                  width="full"
                  minWidth="full"
                />

                <Box position="absolute" w="100vw" bottom="50">
                  <Container w="full" maxW="80%">
                    <Heading color="white" as="h1" isTruncated h="20">
                      {newsItem.titr}
                    </Heading>
                    <Link
                      href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}
                    >
                      <Button
                        colorScheme="green"
                        borderRadius="15px"
                        alignSelf="start"
                      >
                        بیشتر بخوان ...
                      </Button>
                    </Link>
                  </Container>
                </Box>
              </Box>
            </SwiperSlide>
          </Fragment>
        ))}
    </Swiper>
  )
}

export default Hero
