import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Fade,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "components/template-2/icons/Logo";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import ConsultationRequest from "../ConsultationRequest";
import Bars from "../icons/Bars";
import { categories } from "./categories";

interface Props {}

const Navigation = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [activeLinkId, setActiveLinkId] = useState(null);
  // const categoryList = useSelector(
  //   (store: AppState) => store.categories.entities
  // ).slice(0, 7);

  const categoryList = categories.data;

  // ==========
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (totalScroll / windowHeight) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        left="1rem"
        align="center"
        zIndex="22"
        justifyContent="space-between"
        alignItems="center"
        as="nav"
        boxShadow={{ base: "0", md: "dark-lg" }}
        borderRadius={{ base: "0", md: "26" }}
        padding={4}
        backgroundColor={scrollTop > 10 ? "#171111" : ""}
        // transition="backgroundColor 2s"
      >
        {/* Desktop */}
        <Flex
          display={{
            base: "none",
            md: "flex",
          }}
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <Logo />
          </Box>
          <Flex>
            {categoryList &&
              categoryList.map((item: any, i: number) => (
                <>
                  <NextLink
                    key={i}
                    href={`/service/${item.categoryCode}/${item.title}`}
                    passHref
                  >
                    <Flex flexDir="column" position="relative">
                      <Text
                        color="#E1DEDE"
                        boxSizing="border-box"
                        position="relative"
                        onMouseEnter={() => setActiveLinkId(i)}
                        onMouseLeave={() => setActiveLinkId(null)}
                        _hover={{
                          color: "#FF4343",
                        }}
                        p="2"
                        cursor="pointer"
                        mx="1rem"
                        fontSize="lg"
                      >
                        {item.title}
                      </Text>
                      {activeLinkId === i && (
                        <Box
                          display={{ base: "none", md: "block" }}
                          mx="auto"
                          mb="-7"
                          transition="all"
                        >
                          <Fade in={activeLinkId === i}>
                            <Bars />
                          </Fade>
                        </Box>
                      )}
                    </Flex>
                  </NextLink>
                  {i + 1 < categoryList.length && (
                    <Center
                      display={{ base: "none", md: "block" }}
                      height="30px"
                      my="auto"
                    >
                      <Divider orientation="vertical" h="5" />
                    </Center>
                  )}
                </>
              ))}
          </Flex>
          <Box>
            <ConsultationRequest />
          </Box>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          ref={btnRef}
          mr={2}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent zIndex="22">
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            {categoryList &&
              categoryList.map((item: any, i: number) => (
                <NextLink
                  key={i}
                  href={`/service/${item.categoryCode}/${item.title}`}
                  passHref
                >
                  <Text
                    _hover={{
                      color: "#FF4343",
                    }}
                    py="2"
                    cursor="pointer"
                    fontSize="lg"
                  >
                    {item.title}
                  </Text>
                </NextLink>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navigation;
