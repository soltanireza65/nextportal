import { Box, Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import Bird from "./icons/Bird";

interface Props {}

const ConsultationRequest = (props: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      border="1px solid #FF4343"
      borderRightRadius="5"
      borderLeftRadius="20"
      // py="2"
      cursor="pointer"
    >
      <Box boxSize="5" mr="-2" bgColor="black" borderRadius="50%">
        <Bird />
      </Box>
      <Link href="#">
        <Text mr="4" ml="4" my="2" cursor="pointer" color="white">
          درخواست مشاوره
        </Text>
      </Link>
    </Flex>
  );
};

export default ConsultationRequest;
