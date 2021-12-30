import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { getCategories } from "reduxStore/categorySlice";
import { wrapper } from "reduxStore/store";
import "scss/main.scss";

// swiper\swiper.scss

const theme = extendTheme({
  fonts: {
    heading: "IRANSans",
    body: "IRANSans",
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      await store.dispatch(
        getCategories({
          Flated: false,
          ModuleType: null,
          count: 2000,
        })
      );

      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          pathname: ctx.pathname,
          templateId:
            ctx.req?.headers[process.env.NEXT_PUBLIC_TEMPLATE_HEADER_KEY || ""],
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
