import { Box } from "@chakra-ui/layout";
import React from "react";

interface Props {}

const Hemayat = (props: Props) => {
  return (
    <Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="131"
        height="99"
        fill="none"
        viewBox="0 0 131 99"
      >
        <g filter="url(#filter0_d)">
          <rect
            width="113"
            height="81"
            fill="#fff"
            fillOpacity="0.071"
            rx="6"
            transform="matrix(-1 0 0 1 121 5)"
            style={{ mixBlendMode: "multiply" }}
          ></rect>
        </g>
        <defs>
          <filter
            id="filter0_d"
            width="131"
            height="99"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="1" dy="4"></feOffset>
            <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.00274138 0 0 0 0 0.12269 0 0 0 0 0.261577 0 0 0 0.057146 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

export default Hemayat;
