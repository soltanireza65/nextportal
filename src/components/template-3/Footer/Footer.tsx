import {
  AspectRatio,
  Box,
  ButtonGroup,
  Container,
  Grid,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Logo from "../Logo/Logo"

export default function Footer() {
  const [white, black] = useToken("colors", ["white", "gray.800"])

  return (
    <Box position="relative" as="footer" role="contentinfo" color="white">
      <Container w="full" maxW="90%" marginBottom="-16">
        <AspectRatio ratio={16 / 4}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
        </AspectRatio>
      </Container>

      <Stack
        spacing="10"
        divider={<StackDivider />}
        bgColor="#008065"
        mx="0"
        py="12"
        pt="100"
        px={{ base: "4", md: "8" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "10", lg: "28" }}
        >
          <Box flex="1">
            <Logo />
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "10", md: "20" }}
          >
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              <Box minW="130px">
                <Heading
                  as="h4"
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize="sm"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  Heading
                </Heading>
                <Stack>
                  <Link href="/">How it works</Link>
                  <Link href="/">Pricing</Link>
                  <Link href="/">Use Cases</Link>
                </Stack>
              </Box>
              <Box minW="130px"></Box>
            </Grid>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} © Dubai Healthcare City 2021Terms
            & ConditionsPrivacy Policy
          </Text>
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Box>
  )
}
