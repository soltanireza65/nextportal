import { Box } from "@chakra-ui/react";
// import Cookies from "js-cookie";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";

type IProps = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: IProps) => {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const { locale, locales, defaultLocale, push } = useRouter();
  const dir = locale == "fa" ? "rtl" : "ltr";
  return (
    <Box
      style={{
        direction: dir,
      }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="main">
        <Header />
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </Box>
  );
};

export default Layout;
