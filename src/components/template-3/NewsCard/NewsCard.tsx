import { Box, Text } from "@chakra-ui/react"
import { INews } from "interfaces"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "./NewsCard.module.scss"

interface Props {
  newsItem: INews
  width?: number
  height?: number
}

const NewsCard = ({ newsItem }: Props) => {
  return (
    <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
      <Box
        cursor="pointer"
        maxW="sm"
        marginY="2"
        //  borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.25)"
      >
        <Image
          src="/images/item.jpg"
          alt="ffff"
          width={260}
          height={260}
          layout="responsive"
          objectFit="cover"
          className={styles.imgBox}
        />

        <Box p="3" overflow="hidden">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              <Text isTruncated>{newsItem.titr}</Text>
            </Box>
          </Box>

          <Box>
            <Text isTruncated>{newsItem.lead}</Text>
            {/* {newsItem.lead.substring(0, 20)} */}
            {/* <Box as="span" color="gray.600" fontSize="sm">
            / ...
          </Box> */}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {newsItem.visitedCount} بازدید
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default NewsCard
