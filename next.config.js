const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const nextTranslate = require("next-translate");

const TEMPLATE_KEY = process.env.NEXT_PUBLIC_TEMPLATE_HEADER_KEY || "";
const DEFAULT_TEMPLATE = process.env.NEXT_PUBLIC_DEFAULT_TEMPLATE;
const TEMPLATE_COUNT = process.env.NEXT_PUBLIC_TEMPLATE_COUNT;

const routes = [];
const LOCALES = process.env.NEXT_PUBLIC_LOCALES.split(" ");
const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

// for (let i = 1; i <= process.env.NEXT_PUBLIC_TEMPLATE_COUNT; i++) {
//   // DECS
//   routes.push({
//     source: "/:path*{/}?",
//     has: [
//       {
//         type: "header",
//         key: TEMPLATE_KEY,
//         value: i + "",
//       },
//       {
//         type: "cookie",
//         key: "direction",
//         value: "(?<direction>rtl|ltr)",
//       },
//     ],
//     destination: `/template-${i}/:direction/:path*`,
//   });
//   if (DEFAULT_LOCALE === "fa" || DEFAULT_LOCALE === "ar") {
//     routes.push({
//       source: "/:path*{/}?",
//       has: [
//         {
//           type: "header",
//           key: TEMPLATE_KEY,
//           value: i + "",
//         },
//       ],
//       destination: `/template-${i}/rtl/:path*`,
//     });
//   } else {
//     routes.push({
//       source: "/:path*{/}?",
//       has: [
//         {
//           type: "header",
//           key: TEMPLATE_KEY,
//           value: i + "",
//         },
//       ],
//       destination: `/template-${i}/ltr/:path*`,
//     });
//   }
// }

// default template

// routes.push({
//   source: "/:path*",
//   has: [
//     {
//       type: "cookie",
//       key: "direction",
//       value: "(?<direction>rtl|ltr)",
//     },
//   ],
//   destination: `/template-${DEFAULT_TEMPLATE}/:direction/:path*`,
// });

// if (DEFAULT_LOCALE === "fa") {
//   routes.push({
//     source: "/:path*{/}?",
//     destination: `/template-${DEFAULT_TEMPLATE}/rtl/:path*`,
//   });
// } else {
//   routes.push({
//     source: "/:path*{/}?",
//     destination: `/template-${DEFAULT_TEMPLATE}/ltr/:path*`,
//   });
// }
routes.push({
  source: "/:path*{/}?",
  destination: `/template-${DEFAULT_TEMPLATE}/rtl/:path*`,
});
module.exports = (phase, { defaultConfig }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  return {
    ...nextTranslate(),
    async rewrites() {
      return routes;
    },

    // async redirects() {
    //   return [
    //     {
    //       source: "/about",
    //       destination: "/", // Matched parameters can be used in the destination
    //       permanent: true,
    //     },
    //   ];
    // },
    images: {
      domains: isDev
        ? [process.env.NEXT_PUBLIC_IMAGE_DOMAINS]
        : [process.env.NEXT_PUBLIC_IMAGE_DOMAINS],
    },
  };
};
