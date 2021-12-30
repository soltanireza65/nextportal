import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import AppBreadcrumb from "components/template-2/AppBreadcrumb";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import CircleDevider from "./CircleDevider";

interface IProps {
  title: string;
}

const InnerHero = ({ title }: IProps) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      backgroundImage="/images/template-2/0-1.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
    >
      <Flex
        justifyContent="space-between"
        width={{ base: "full", md: "full", lg: "full" }}
        pt={{
          base: "",
          md: "",
          lg: "40",
        }}
        pb={{
          base: "",
          md: "",
          lg: "28",
        }}
        px={{
          base: "",
          md: "",
          lg: "28",
        }}
      >
        <Box color="white">
          <Heading fontSize="small" color="whiteAlpha.600">
            به تارنما گستر خوش آمدید
          </Heading>
          <Heading
            fontSize="larger"
            fontWeight="normal"
            mt={{
              base: "8",
              md: "8",
              lg: "8",
            }}
          >
            {title}
          </Heading>
        </Box>
        <Box color="white">
          <AppBreadcrumb />
          <Flex
            justifyContent="flex-end"
            mt={{
              base: "8",
              md: "8",
              lg: "8",
            }}
            alignItems="center"
          >
            <Link href="">
              <Text marginEnd="3">درباره ما</Text>
            </Link>
            <IoArrowBackOutline color="red" width="20" />
          </Flex>
        </Box>
      </Flex>

      <CircleDevider />
    </Flex>
  );
};

export default InnerHero;
