import { Box, Flex, Text } from "@chakra-ui/layout";
// import Image from "next/image";
import { Image } from "@chakra-ui/react";
import { INews } from "interfaces";
import React from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Document from "./icons/Document";
import Linkedin from "./icons/Linkedin";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
interface Props {
  newsItem: INews;
}

const Member = ({ newsItem }: Props) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      marginTop="1"
    >
      <Box
        padding="5"
        border="1px solid gray"
        borderRadius="full"
        bgColor="transparent"
        color="white"
        _hover={{
          border: "1px solid red",
        }}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          // maxW="150px"
          // maxH="150px"
          boxShadow="0px 0px 10px 12px rgba(0,0,0,0.35)"
          src={
            (newsItem.mediaFiles[0].filePaths &&
              newsItem.mediaFiles[0].filePaths.length > 0 &&
              newsItem.mediaFiles[0].filePaths[0].filePath) ||
            ""
          }
          alt="Segun Adebayo"
          objectFit="cover"
          backgroundPosition="top"
        />
      </Box>
      <Flex
        flexDir="column"
        h="28"
        justifyContent="space-around"
        alignItems="center"
      >
        <Text color="white">سمت شغلی</Text>
        <Text color="white">مسعود مردان نیا</Text>
        <Flex w="24" justifyContent="space-around">
          <Document />
          <Linkedin />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Member;
