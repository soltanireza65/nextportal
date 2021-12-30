import { Box, Center, Divider, Flex, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { LinkGrid } from "components/template-2/LinkGrid";
import { SocialMediaLinks } from "components/template-2/SocialMediaLinks";
import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AppState } from "reduxStore/store";
import BackToTop from "../BackToTop";
import Bars from "../icons/Bars";
import Bird from "../icons/Bird";

export default function Footer() {
  const categoryList = useSelector(
    (store: AppState) => store.categories.entities
  ).slice(0, 7);

  return (
    <Box
      bgColor="#100B0B"
      as="footer"
      role="contentinfo"
      mx="auto"
      pt="12"
      pb="8"
      px={{ base: "4", md: "8" }}
    >
      <BackToTop />
      <Stack color="whiteAlpha.600" mt="10" spacing="10">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "10", lg: "28" }}
          textAlign="center"
        >
          {/* {categoryList &&
            categoryList.map((item: any, i: number) => <p>link</p>)} */}
          <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
        </Stack>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          color="red.500"
        >
          <Text mb="4">گواهینامه های دریافتی</Text>
          <Box mb="-12" zIndex="55">
            <Bars />
          </Box>
        </Flex>
        {/* Bar */}
        <Flex
          mx="20"
          p="4"
          boxShadow="0px 0px 15px 5px rgba(0,0,0,0.75)"
          borderRadius="30"
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          pos="relative"
        >
          <Flex
            flex="1"
            justifyContent="start"
            mb={{
              base: "4",
              md: "0",
            }}
          >
            <Box>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                border="1px solid #FF4343"
                borderRightRadius="20"
                borderLeftRadius="5"
                cursor="pointer"
              >
                <Link href="#">
                  <Text mr="6" ml="6" my="2" cursor="pointer">
                    عقد قرارداد
                  </Text>
                </Link>
                <Box boxSize="5" ml="-2" borderRadius="50%">
                  <Bird />
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Flex
            flex="1"
            justifyContent="center"
            mb={{
              base: "4",
              md: "0",
            }}
          >
            <Flex>
              <Image
                cursor="pointer"
                mx="5"
                boxSize="14"
                src="/images/template-2/anf.png"
              />
              <Image
                cursor="pointer"
                mx="5"
                boxSize="14"
                src="/images/template-2/nezam.png"
              />
              <Image
                cursor="pointer"
                mx="5"
                boxSize="14"
                src="/images/template-2/danesh.png"
              />
            </Flex>
          </Flex>

          <Flex flex="1" justifyContent="end">
            <SocialMediaLinks />
          </Flex>
        </Flex>
        {/* EndBar */}
        {/* AddressBar */}
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={{
            // base: "center",
            md: "space-between",
          }}
          alignItems="center"
        >
          <Flex alignItems="center" fontSize="16">
            <FaMapMarkerAlt fontSize="20" />
            <Text marginStart="4">
              آدرس: تهران، خیابان کارگر شمالی، بالاتر از خیابان فاطمی، پلاک
              ۱۶۶۱، طبقه ۲، واحد ۳
            </Text>
          </Flex>
          <Flex alignItems="center" fontSize="16">
            <Box marginEnd="4">
              <AiOutlinePhone />
            </Box>
            <Link href="callto:0987456321">
              <Text cursor="pointer">0987456321</Text>
            </Link>
            <Center height="20px" px="4">
              <Divider orientation="vertical" />
            </Center>
            <Link href="callto:123456789">
              <Text cursor="pointer">123456789</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" fontSize="16">
            <AiOutlineMail />

            <Link href="mailto:info@tarnamagostar.ir">
              <Text marginStart="4" cursor="pointer">
                info@tarnamagostar.ir
              </Text>
            </Link>
          </Flex>
        </Stack>
        {/* EndAddressBar */}
      </Stack>
    </Box>
  );
}
