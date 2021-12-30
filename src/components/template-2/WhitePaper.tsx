// import Image from "next/image";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { INews, IServiceResult } from "interfaces";
import Link from "next/link";
import React from "react";
import { IoChevronBack } from "react-icons/io5";
import CircleDevider from "./CircleDevider";
import WhitePaperCard from "./WhitePaperCard";

interface IProps {
  news: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}

const WhitePaper = ({ news }: IProps) => {
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
    <Box pos="relative">
      <Heading
        mt={{
          base: "12",
          md: "28",
        }}
        mb={{
          base: "5",
          md: "28",
        }}
        textAlign="center"
        fontSize="2xl"
        fontWeight="normal"
      >
        واید پیپر ، محتوایی برای آموزش
      </Heading>
      <Box
        mx={{
          base: "5",
          md: "28",
        }}
      >
        <SimpleGrid columns={[1, 2, 3]} spacing="40px" mb="20">
          {data &&
            data.map((newsItem: INews, index: number) => (
              <WhitePaperCard key={index} newsItem={newsItem} />
            ))}
        </SimpleGrid>
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          marginTop="8"
          mb="20"
          cursor="pointer"
        >
          <Link href="#">
            <Text>آرشیو</Text>
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
      </Box>
      <Flex justifyContent="center">
        <CircleDevider />
      </Flex>
    </Box>
  );
};

export default WhitePaper;
