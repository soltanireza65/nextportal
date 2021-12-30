import { Box, Container, Flex, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { IoMenuOutline, IoSearchOutline } from "react-icons/io5"
import { useSelector } from "react-redux"
import { AppState } from "reduxStore/store"
import Logo from "../Logo/Logo"
import styles from "./Header.module.scss"

export default function Header() {
  let categoryList = useSelector(
    (store: AppState) => store.categories.entities
  ).slice(0, 7)

  const [mobileNavHeight, setMobileNavHeight] = useState("0px")
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const handleOpen = () => {
    setIsNavbarOpen(true)
    setMobileNavHeight("100%")
  }

  const handleClose = () => {
    setIsNavbarOpen(false)
    setMobileNavHeight("0px")
  }

  return (
    <Box position="absolute" width="100%" zIndex="2">
      <Flex
        overflow="hidden"
        justifyContent="space-between"
        paddingX="10"
        paddingY="15px"
        minHeight="40px"
        className={styles.navbar}
        alignItems="center"
        _hover={{
          backgroundColor: "white",
        }}
        backgroundColor={{
          base: "white",
          sm: "white",
          md: "blackAlpha.300",
        }}
      >
        <Box
          display={{ sm: "block", md: "none" }}
          onClick={() => {
            isNavbarOpen ? handleClose() : handleOpen()
          }}
        >
          <Box>
            {isNavbarOpen ? (
              <FaTimes size="2rem" />
            ) : (
              <IoMenuOutline size="2rem" />
            )}
          </Box>
        </Box>

        <Box>
          <Logo color="white" />
        </Box>

        <Box className="d-none d-md-block">
          <Flex>
            {categoryList &&
              categoryList.map((category: any, i: number) => {
                return (
                  <Box key={i}>
                    <Box className={styles.dropdown}>
                      <Box
                        // marginBottom="5"
                        _hover={{
                          borderBottom: "2px solid black",
                        }}
                      >
                        <NextLink
                          href={`/service/${category.categoryCode}/${category.title}`}
                        >
                          <Link
                            color="white"
                            className={styles.linkText}
                            fontSize="1rem"
                            paddingY="1"
                            paddingX="2"
                          >
                            {category.title}
                          </Link>
                        </NextLink>
                      </Box>
                      <Box
                        display="none"
                        _hover={{
                          display: "block",
                        }}
                        position="absolute"
                        backgroundColor="white"
                        width="100%"
                        left="0"
                        boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
                        zIndex="1"
                        className={styles.dropdownContent}
                        _after={{}}
                        style={
                          {
                            //   backgroundColor: "red",
                          }
                        }
                      >
                        <Box
                          paddingTop="4"
                          marginX="auto"
                          className="row container m-auto pt-4"
                        >
                          <Container width="full" minWidth="90%">
                            <Box
                              float="right"
                              width="50%"
                              padding="5"
                              backgroundColor="white"
                              minHeight="250px"
                              _after={{
                                content: '" "',
                                height: "200px",
                                width: "3px",
                              }}
                            >
                              <Text
                                _after={{
                                  content: '" "',
                                  height: "200px",
                                  width: "3px",
                                }}
                              >
                                {category.description}
                              </Text>
                            </Box>

                            <Box
                              float="right"
                              width="50%"
                              padding="5"
                              backgroundColor="white"
                              minHeight="250px"
                            >
                              {category.childs &&
                                category.childs
                                  .slice(1, 5)
                                  .map((child, index) => {
                                    return (
                                      <NextLink href="/" key={index}>
                                        <Text
                                          textAlign="right"
                                          cursor="pointer"
                                          paddingY="2"
                                        >
                                          {child.title}
                                        </Text>
                                      </NextLink>
                                    )
                                  })}
                            </Box>
                          </Container>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )
              })}
          </Flex>
        </Box>

        <Box className={styles.searchIcon} color={{ sm: "black", md: "black" }}>
          <NextLink href="/search/QuickSearch">
            <IoSearchOutline />
          </NextLink>
        </Box>
      </Flex>

      <Box
        backgroundColor="white"
        zIndex="2"
        display={{ sm: "block", md: "none" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height={mobileNavHeight}
          overflow="hidden"
          backgroundColor="white"
          boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
        >
          {categoryList &&
            categoryList.map((item: any, i: number) => (
              <Box key={i} marginX="4" marginY="2" zIndex="2">
                <NextLink
                  href={`/service/${item.categoryCode}/${item.title}`}
                  key={i}
                >
                  <Text
                    textAlign="right"
                    cursor="pointer"
                    paddingY="2"
                    color="#3a3a3a"
                    _hover={{
                      color: "#000000",
                    }}
                  >
                    {item.title}
                  </Text>
                </NextLink>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  )
}
