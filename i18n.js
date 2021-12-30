const locales = process.env.NEXT_PUBLIC_LOCALES.split(" ");
const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

module.exports = {
  locales: process.env.NEXT_PUBLIC_LOCALES.split(" "),
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  pages: {
    "*": ["common"],
  },
};
