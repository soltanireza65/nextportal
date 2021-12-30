import { Box, Divider, Heading, Image } from "@chakra-ui/react"
import { ILink } from "interfaces"
import React from "react"
import AppBreadcrumb from "../Breadcrumb/AppBreadcrumb"

interface Props {
  title: string
  imgSrc: string
  breadCrumb?: ILink[]
}

const InnerHero = ({ imgSrc, title, breadCrumb }: Props) => {
  return (
    <Box position="relative" maxHeight="full" height="full">
      <Box maxHeight="full" height="full">
        <Image
          src={imgSrc}
          objectFit="cover"
          backgroundPosition="center"
          backgroundSize="cover"
          width="full"
          minWidth="full"
          maxHeight="full"
          height="full"
        />
      </Box>
      <Box
        position="absolute"
        bottom={{ base: "5", md: "3rem", lg: "3rem" }}
        right={{ base: "5", md: "3rem", lg: "3rem" }}
        color="white"
      >
        <Heading
          as="h1"
          fontSize={{ base: "1rem", md: "1.5rem", lg: "1.8rem" }}
          mb="5"
        >
          {title}
        </Heading>
        <Divider />
        <AppBreadcrumb links={breadCrumb} />
      </Box>
    </Box>
  )
}

export default InnerHero
