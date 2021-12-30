import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { INews, IServiceResult } from "interfaces";
import Link from "next/link";
import React from "react";
interface IProps {
  news: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}

const Customers = ({ news }: IProps) => {
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
    <Box
      my={{
        base: "8",
        md: "28",
      }}
      mx={{
        base: "5",
        md: "28",
      }}
    >
      <Heading
        mt={{
          base: "12",
          md: "20",
        }}
        mb={{
          base: "5",
          md: "16",
        }}
        color="#011F43"
        fontWeight="medium"
        textAlign="center"
        as="h4"
      >
        مشتریان
      </Heading>
      <SimpleGrid
        columns={[3, 5, 9]}
        spacing="40px"
        mb={{
          base: "5",
          md: "16",
        }}
      >
        {data &&
          data.map((newsItem: INews, index: number) => (
            <Flex
              cursor="pointer"
              key={index}
              boxShadow="1px 4px 9px rgba(1, 31, 67, 0.057146)"
              borderRadius="4"
              overflow="hidden"
              bgColor="gray.100"
            >
              <Link href="">
                <Image
                  src={
                    (newsItem.mediaFiles[0].filePaths &&
                      newsItem.mediaFiles[0].filePaths.length > 0 &&
                      newsItem.mediaFiles[0].filePaths[0].filePath) ||
                    ""
                  }
                  alt="Segun Adebayo"
                />
              </Link>
            </Flex>
          ))}
      </SimpleGrid>

      <Flex
        flexDir="column"
        justifyContent="center"
        cursor="pointer"
        alignItems="center"
      >
        <Link href="#">
          <Heading fontSize="14">موارد بیشتر</Heading>
        </Link>
        <ChevronDownIcon color="red" fontSize="20" />
      </Flex>
    </Box>
  );
};

export default Customers;
