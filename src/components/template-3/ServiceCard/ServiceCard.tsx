import { Box } from "@chakra-ui/react"
import { INews } from "interfaces"
import Image from "next/image"
import React from "react"
interface Props {
  newsItem: INews
  width?: number
  height?: number
}
const ServiceCard = ({ newsItem }: Props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src="/images/item.jpg"
        alt="ffff"
        width={260}
        height={260}
        layout="responsive"
        objectFit="cover"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {newsItem.titr}
          </Box>
        </Box>

        <Box>
          {newsItem.lead}
          <Box as="span" color="gray.600" fontSize="sm">
            / ...
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {newsItem.visitedCount} بازدید
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceCard
