import { Flex } from "@chakra-ui/layout";
import Bars from "components/template-2/icons/Bars";
import React from "react";

interface Props {}

const CircleDevider = (props: Props) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      pos="absolute"
      bottom="0"
      mb="-5"
      mx="auto"
      boxSize="10"
      bgColor="white"
      color="red.500"
      borderRadius="50%"
      zIndex="21"
    >
      <Bars />
    </Flex>
  );
};

export default CircleDevider;
