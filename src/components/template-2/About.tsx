// import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Card from "components/template-2/Card";
import { INews, IServiceResult } from "interfaces";
import CircleDevider from "./CircleDevider";
import Bars from "./icons/Bars";

interface IProps {
  news: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}

const About = ({ news }: IProps) => {
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
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Heading
        // fontSize="5xl"
        color="#011F43"
        textAlign="center"
        fontWeight="medium"
        as="h4"
        mt={{
          base: "8",
          md: "16",
        }}
        mb={{
          base: "8",
          md: "20",
        }}
      >
        درباره تارنما گستر بیشتر بدانید
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap">
        {data &&
          data.map((newsItem: INews, index: number) => (
            <Box
              key={index}
              minWidth={{ base: "full", md: "40vw", lg: "30vw" }}
              w={{ base: "full", md: "40vw", lg: "30vw" }}
              mb={{ base: "12", md: "12", lg: "12" }}
            >
              <Card newsItem={newsItem} />
            </Box>
          ))}
      </Flex>

      <Flex
        justifyContent="center"
        mt={{
          base: "0",
          md: "16",
        }}
        mb={{
          base: "8",
          md: "20",
        }}
      >
        <Button
          border="1px solid transparent"
          borderRightRadius="20"
          borderRadius="lg"
          colorScheme="white"
          boxShadow="lg"
          fontWeight="normal"
          color="black"
          _hover={{
            bgColor: "black",
            border: "1px solid red",
            color: "#fff",
          }}
        >
          بیشتر بدانید
        </Button>
        <Flex pos="absolute" my="3" mr="2" zIndex="55">
          <Bars />
        </Flex>
        <Button
          border="1px solid transparent"
          borderLeftRadius="20"
          colorScheme="white"
          fontWeight="normal"
          color="black"
          boxShadow="lg"
          _hover={{
            bgColor: "black",
            border: "1px solid red",
            color: "#fff",
          }}
        >
          تماس با ما
        </Button>
      </Flex>

      <Heading
        color="#011F43"
        fontWeight="medium"
        textAlign="center"
        mt={{
          base: "8",
          md: "16",
        }}
        mb={{
          base: "8",
          md: "20",
        }}
        as="h3"
      >
        محصولات تارنماگستر
      </Heading>
      <CircleDevider />
    </Flex>
  );
};

export default About;
