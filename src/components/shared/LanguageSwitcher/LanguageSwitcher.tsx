import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
interface Props {}

const LanguageSwitcher = (props: Props) => {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const { locale, locales, defaultLocale, push, reload } = useRouter();
  const localeText = locale === "fa" ? "فارسی" : locale === "en" ? "English" : "";
  return (
    <Menu>
      <MenuButton
        _hover={{
          bgColor: "transparent",
        }}
        _active={{
          bgColor: "transparent",
        }}
        bgColor="transparent"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {router.locale}
      </MenuButton>
      <MenuList
        bgColor="transparent"
        _hover={{
          bgColor: "transparent",
        }}
        _active={{
          bgColor: "transparent",
        }}
      >
        {router.locales.map((locale) => {
          return (
            <MenuItem
              bgColor="transparent"
              _hover={{
                bgColor: "transparent",
              }}
              _active={{
                bgColor: "transparent",
              }}
              onClick={async (e) => {
                locale === "fa" || locale === "ar" ? Cookies.set("direction", "rtl") : Cookies.set("direction", "ltr");
                await router.push(router.asPath, router.asPath, { locale: locale });
              }}
            >
              {locale}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {},
});
export default LanguageSwitcher;
