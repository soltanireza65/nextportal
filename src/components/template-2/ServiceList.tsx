import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

interface IProps {}

const ServiceList = (props: IProps) => {
  return (
    <Box
      bgColor="white"
      mx={{
        base: "5",
        md: "5",
        lg: "28",
      }}
      py={{
        base: "5",
        md: "5",
        lg: "28",
      }}
    >
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {[1, 2, 3, 4, 5, 6].map((item: any, i: number) => (
          <Flex
            flexDirection="column"
            alignItems="center"
            boxShadow="lg"
            borderRadius="20"
            cursor="pointer"
            _hover={{
              transform: "scale(1.1, 1.1)",
              boxShadow: "0px 0px 20px 0px rgba(240,45,45,0.5)",
            }}
            transition="all 0.2s"
          >
            <Image
              mt={{
                base: "14",
                md: "14",
                lg: "14",
              }}
              // boxSize="20"
              mb="10"
              maxW="24"
              // minW="20"
              minH="16"
              // borderRadius="50%"
              src="/images/template-2/projects.svg"
            />
            <Heading
              color="#011F43"
              fontSize="small"
              fontWeight="normal"
              marginBottom="4"
            >
              طراحی سایت
            </Heading>
            <Text
              fontSize="smaller"
              mb={{
                base: "14",
                md: "14",
                lg: "14",
              }}
            >
              شیبشسثیرشسیزتنشایحنتاضهخثقصع7لمسنیزتاشمنلعمعامغل
            </Text>
          </Flex>
        ))}
      </SimpleGrid>

      <Flex
        justifyContent="flex-end"
        mt={{
          base: "8",
          md: "8",
          lg: "28",
        }}
      >
        <Flex
          cursor="pointer"
          alignItems="center"
          borderRadius="40"
          boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.1)"
          px="8"
          py="4"
        >
          <Link href="">
            <Heading fontWeight="light" fontSize="20" marginEnd="3">
              پروژه ها
            </Heading>
          </Link>
          <IoArrowBackOutline color="red" width="20" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ServiceList;
