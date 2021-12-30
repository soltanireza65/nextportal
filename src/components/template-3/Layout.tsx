import { Box } from "@chakra-ui/react"
import Head from "next/head"
import React, { ReactNode } from "react"
import { ToastContainer } from "react-toastify"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

type IProps = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "This is the default title" }: IProps) => (
  <Box backgroundColor="gray.100">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></script>
    </Head>
    <main className="mainComponent position-relative ">
      <Header />
      {children}
    </main>
    <Footer />
    <ToastContainer />
  </Box>
)

export default Layout
