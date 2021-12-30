import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: bold;
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_Bold.eot");
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_Bold.eot?#iefix")
            format("embedded-opentype"),
          /* IE6-8 */ url("/fonts/IRANSans4fonts/woff2/IRANSansWeb_Bold.woff2")
            format("woff2"),
          /* FF39+,Chrome36+, Opera24+*/
            url("/fonts/IRANSans4fonts/woff/IRANSansWeb_Bold.woff") format("woff"),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url("/fonts/IRANSans4fonts/ttf/IRANSansWeb_Bold.ttf") format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: 500;
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_Medium.eot");
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_Medium.eot?#iefix")
            format("embedded-opentype"),
          /* IE6-8 */ url("/fonts/IRANSans4fonts/woff2/IRANSansWeb_Medium.woff2")
            format("woff2"),
          /* FF39+,Chrome36+, Opera24+*/
            url("/fonts/IRANSans4fonts/woff/IRANSansWeb_Medium.woff") format("woff"),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url("/fonts/IRANSans4fonts/ttf/IRANSansWeb_Medium.ttf") format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: 300;
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_Light.eot");
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_Light.eot?#iefix")
            format("embedded-opentype"),
          /* IE6-8 */ url("/fonts/IRANSans4fonts/woff2/IRANSansWeb_Light.woff2")
            format("woff2"),
          /* FF39+,Chrome36+, Opera24+*/
            url("/fonts/IRANSans4fonts/woff/IRANSansWeb_Light.woff") format("woff"),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url("/fonts/IRANSans4fonts/ttf/IRANSansWeb_Light.ttf") format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: 200;
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_UltraLight.eot");
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb_UltraLight.eot?#iefix")
            format("embedded-opentype"),
          /* IE6-8 */ url("/fonts/IRANSans4fonts/woff2/IRANSansWeb_UltraLight.woff2")
            format("woff2"),
          /* FF39+,Chrome36+, Opera24+*/
            url("/fonts/IRANSans4fonts/woff/IRANSansWeb_UltraLight.woff")
            format("woff"),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url("/fonts/IRANSans4fonts/ttf/IRANSansWeb_UltraLight.ttf")
            format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb.eot");
        src: url("/fonts/IRANSans4fonts/eot/IRANSansWeb.eot?#iefix")
            format("embedded-opentype"),
          /* IE6-8 */ url("/fonts/IRANSans4fonts/woff2/IRANSansWeb.woff2")
            format("woff2"),
          /* FF39+,Chrome36+, Opera24+*/
            url("/fonts/IRANSans4fonts/woff/IRANSansWeb.woff") format("woff"),
          /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url("/fonts/IRANSans4fonts/ttf/IRANSansWeb.ttf") format("truetype");
      }
    `}
  />
);

export default Fonts;
