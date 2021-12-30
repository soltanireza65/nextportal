import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import Bird from "./icons/Bird";
import TarnamaGostar from "./icons/TarnamaGostar";

interface Props {}

const BackToTop = (props: Props) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mt="-100px"
    >
      <IoChevronUpSharp color="red" size="20" />
      <Box bgColor="#100B0B" borderRadius="50%" p="3" boxSize="14">
        <Bird />
      </Box>
      <TarnamaGostar />
    </Flex>
  );
};

export default BackToTop;
