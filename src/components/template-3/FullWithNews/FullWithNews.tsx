import { Box, Button, Heading } from "@chakra-ui/react"
import { INews, IServiceResult } from "interfaces"
import Link from "next/link"
import React from "react"

interface Props {
  news: IServiceResult<INews[]>
}

const FullWithNews = ({ news }: Props) => {
  const { data, message, status } = news
  if (data.length < 1 || status == 2) {
    return (
      <Box>
        <Heading as="h1">{message}</Heading>
      </Box>
    )
  }

  return (
    <Box width="100%">
      {data &&
        data.map((newsItem: INews, newsIndex: number) => (
          <Box
            key={newsIndex}
            position="relative"
            width="100vw"
            height={{ base: "40vh", sm: "40vh", md: "50vh", lg: "90vh" }}
            backgroundImage="url('/images/item.jpg')"
            backgroundAttachment="fixed"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // backgroundPosition="center"
          >
            <Box
              position="absolute"
              width="100%"
              height="100%"
              zIndex="1"
              backgroundColor="#0000004d"
              backgroundImage="linear-gradient(
              rgba(0, 128, 100, 0.5) 0%,
              rgba(0, 128, 101, 0) 100%
            )"
              paddingRight={{
                base: "30px",
                sm: "30px",
                md: "100px",
                lg: "100px",
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box>
                <Heading
                  color="white"
                  as="h4"
                  fontSize={{
                    base: "1.5rem",
                    // sm: "1rem",
                    md: "2rem",
                    lg: "2.5rem",
                  }}
                  // height="40"
                  lineHeight="7rem"
                  isTruncated
                >
                  {newsItem.titr.substr(0, 35)}
                </Heading>
              </Box>
              <Box>
                <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                  <Heading
                    as="h2"
                    color="white"
                    // height="20"
                    lineHeight="5rem"
                    fontSize={{
                      base: "1.2rem",
                      md: "1.5rem",
                      lg: "1.8rem",
                    }}
                    isTruncated
                  >
                    {newsItem.lead}
                  </Heading>
                </Link>
              </Box>
              <Box>
                <Button borderRadius="15px" alignSelf="start">
                  بیشتر بخوان ...
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
    </Box>
  )
}

export default FullWithNews
