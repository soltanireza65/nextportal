import { Box, Container, Progress } from "@chakra-ui/react";
import Navigation from "components/template-2/layout/Navigation";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
// import Header from "./Header";
type IProps = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "This is the default title" }: IProps) {
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
    <Container position="absolute" minWidth="full" padding="0">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Header /> */}
      <Navigation />
      <Box>
        <Progress
          position="sticky"
          top="0px"
          zIndex="55"
          colorScheme="cyan"
          size="xs"
          value={scrollTop}
        />
        {children}
      </Box>

      <Footer />
      <ToastContainer />
    </Container>
  );
}
export default Layout;
