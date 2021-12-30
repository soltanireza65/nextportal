import { Accordion, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { INews, IServiceResult } from "interfaces";
import React, { useEffect, useState } from "react";
import AppAccordionItem from "./AppAccordionItem";
import Digitalmarketing from "./icons/Digitalmarketing";
import WebDesign from "./icons/WebDesign";

interface IProps {
  FAQFirst: IServiceResult<INews[]>;
  FAQSecond: IServiceResult<INews[]>;
  width?: number;
  height?: number;
}

const FAQ = ({ FAQFirst, FAQSecond }: IProps) => {
  const {
    data: FAQFirstData,
    message: FAQFirstMessage,
    status: FAQFirstStatus,
  } = FAQFirst;
  const {
    data: FAQSecondData,
    message: FAQSecondMessage,
    status: FAQSecondStatus,
  } = FAQSecond;

  if (FAQFirstData.length < 1 || FAQFirstStatus == 2) {
    return (
      <Box>
        <Heading as="h1" size="4xl" isTruncated>
          {FAQFirstMessage}
        </Heading>
      </Box>
    );
  }
  const [FAQID, setFAQID] = useState(1);
  const [FAQList, setFAQList] = useState([]);

  useEffect(() => {
    setFAQList([]);
  }, [FAQID]);
  return (
    <Box pos="relative">
      <Heading textAlign="center" fontSize="2xl" fontWeight="normal" my="24">
        سوالات پرتکرار
      </Heading>
      <Flex
        mx={{
          base: "",
          md: "40",
        }}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        alignItems="center"
      >
        <Flex
          // flexDirection="column"
          flexDirection={{
            base: "row",
            md: "column",
          }}
          alignItems="center"
          marginEnd={{
            base: "0",
            md: "20",
          }}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            boxSize="36"
            borderRadius="20"
            _hover={{
              boxShadow: "lg",
            }}
            cursor="pointer"
            onClick={() => setFAQID(1)}
          >
            <Digitalmarketing />
            <Text>دیجیتال مارکتینگ</Text>
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            boxSize="36"
            borderRadius="20"
            _hover={{
              boxShadow: "lg",
            }}
            cursor="pointer"
            onClick={() => setFAQID(2)}
          >
            <WebDesign />
            <Text>طراحی سایت</Text>
          </Flex>
        </Flex>
        <Accordion flex="1" mb="28">
          {FAQID === 1 &&
            FAQFirstData &&
            FAQFirstData.map((newsItem: INews, index: number) => (
              <AppAccordionItem
                key={index}
                title={newsItem.titr}
                content={newsItem.lead}
              />
            ))}
          {FAQID === 2 &&
            FAQSecondData &&
            FAQSecondData.map((newsItem: INews, index: number) => (
              <AppAccordionItem
                key={index}
                title={newsItem.titr}
                content={newsItem.lead}
              />
            ))}
        </Accordion>
      </Flex>
    </Box>
  );
};

export default FAQ;
