// import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, Fade, Flex, Text } from "@chakra-ui/react";
import Logo from "components/template-2/icons/Logo";
import Link from "next/link";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import ConsultationRequest from "../ConsultationRequest";
import Bars from "../icons/Bars";
import { categories } from "./categories";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLinkId, setActiveLinkId] = useState(null);
  // const categoryList = useSelector(
  //   (store: AppState) => store.categories.entities
  // ).slice(0, 7);

  const categoryList = categories.data;

  return (
    <Flex
      zIndex="22"
      position="absolute"
      justifyContent="space-between"
      alignItems="center"
      top={{ base: "0", md: "10" }}
      right={{ base: "0", md: "10" }}
      left={{ base: "0", md: "10" }}
      as="nav"
      boxShadow="dark-lg"
      borderRadius={{ base: "0", md: "26" }}
      padding={4}
      backgroundColor={isOpen ? "#4f4f4fc7" : "transparent"}
      color="white"
    >
      <Box
        order={{ base: 3, md: 1 }}
        position={{ base: "absolute", md: "relative" }}
        left={{ base: "5" }}
        top={{ base: "3", md: "0" }}
        mx={{ base: "0", md: "7" }}
      >
        <Logo />
      </Box>
      <Box order={{ base: 1, md: 1 }}>
        <Navbar variant="dark" expand="md" className="p-0">
          <Box>
            <Navbar.Toggle
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="navbar-nav"
            />
          </Box>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="">
              {categoryList &&
                categoryList.map((item: any, i: number) => (
                  <>
                    <Link
                      key={i}
                      href={`/service/${item.categoryCode}/${item.title}`}
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
                    </Link>
                    {i + 1 < categoryList.length && (
                      <Center
                        display={{ base: "none", md: "block" }}
                        height="30px"
                        my="auto"
                      >
                        <Divider orientation="vertical" />
                      </Center>
                    )}
                  </>
                ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Box>
      <Box
        order={{ base: 2, md: 1 }}
        mr="auto"
        display={{ base: "none", md: "flex" }}
      >
        <ConsultationRequest />
      </Box>
    </Flex>
  );
}
