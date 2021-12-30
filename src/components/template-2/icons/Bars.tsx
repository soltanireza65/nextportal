import { Box } from "@chakra-ui/layout";
import React from "react";

function Bars() {
  return (
    <Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="15"
        fill="none"
        viewBox="0 0 18 15"
      >
        <path
          fill="#FF4343"
          fillRule="evenodd"
          d="M6 1a1 1 0 00-2 0v8a1 1 0 102 0V1zm3 2a1 1 0 011 1v9.044a1 1 0 11-2 0V4a1 1 0 011-1zM1 6.5a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM13 0a1 1 0 011 1v8a1 1 0 11-2 0V1a1 1 0 011-1zm5 7.5a1 1 0 10-2 0v2a1 1 0 102 0v-2z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Box>
  );
}

export default Bars;
