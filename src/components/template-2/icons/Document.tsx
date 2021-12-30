import { Box } from "@chakra-ui/layout";
import React from "react";

interface Props {}

const Document = (props: Props) => {
  return (
    <Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="none"
        viewBox="0 0 20 18"
      >
        <path
          fill="#B1B1B1"
          fillRule="evenodd"
          d="M13.37.496L13.365.49a.507.507 0 00-.426-.15H3.668A2.67 2.67 0 001 3.01v11.322A2.67 2.67 0 003.668 17h12.995a2.67 2.67 0 002.668-2.668V6.658a.53.53 0 00-.148-.364L13.37.496zm.138 1.585l4.084 4.074H15.15a1.646 1.646 0 01-1.642-1.642V2.081zm-9.84 13.882h12.995c.907 0 1.642-.735 1.642-1.642v-7.14H15.15a2.67 2.67 0 01-2.668-2.668V1.358H3.668a1.647 1.647 0 00-1.642 1.641v11.322c.003.906.736 1.64 1.642 1.642zm1.006-7.19h5.393a.513.513 0 000-1.026H4.674a.513.513 0 100 1.026zm0 2.858h10.984a.513.513 0 110 1.026H4.674a.513.513 0 110-1.026z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#B1B1B1"
          d="M13.364.49l.162-.156-.162.157zm.006.006l-.162.157.003.002.159-.16zm-.375-.16l-.01.226h.013l-.003-.225zm-.056.006v.225h.027l.027-.007-.054-.218zm-9.271 0V.117v.225zM1 3.01H.775 1zm0 11.322H.775 1zM3.668 17v.225V17zm12.995 0v.225V17zm2.668-2.668h.226-.226zm0-7.674h.226v-.002l-.226.002zm-.148-.364l.162-.157-.003-.003-.16.16zm-1.59-.14v.226h.543l-.385-.385-.159.16zm-4.085-4.073l.16-.16-.385-.382v.542h.225zm1.642 4.074v.225-.225zm-1.642-1.642h-.225.225zm3.155 11.45v.225-.225zm-12.995 0v.225-.225zm14.637-1.642h.225-.225zm0-7.14h.225v-.225h-.225v.225zm-3.155 0v.225-.225zm-2.668-2.668h-.225.225zm0-3.155h.225v-.225h-.225v.225zm-8.814 0v-.225.225zM2.026 2.999h-.225.225zm0 11.322h-.225v.001h.225zM13.203.647l.005.006.323-.314-.005-.005-.323.313zm-.205-.085c.077-.001.151.03.205.085l.323-.313a.732.732 0 00-.533-.222l.005.45zM12.993.56l-.006.001h-.001l.019-.45a.426.426 0 00-.12.012l.107.437zM3.668.567h9.27v-.45h-9.27v.45zM1.225 3.01A2.444 2.444 0 013.668.567v-.45A2.894 2.894 0 00.775 3.01h.45zm0 11.322V3.01h-.45v11.322h.45zm2.443 2.443a2.444 2.444 0 01-2.443-2.443h-.45a2.894 2.894 0 002.893 2.893v-.45zm12.995 0H3.668v.45h12.995v-.45zm2.444-2.443a2.444 2.444 0 01-2.444 2.443v.45a2.894 2.894 0 002.893-2.893h-.45zm0-7.674v7.674h.45V6.658h-.45zm-.086-.208a.305.305 0 01.085.21l.45-.004a.755.755 0 00-.211-.519l-.324.313zM13.211.655l5.813 5.798.318-.319L13.529.337l-.318.318zm4.54 5.34l-4.084-4.073-.318.318 4.084 4.074.318-.319zm-2.601.385h2.442v-.45H15.15v.45zm-1.867-1.866A1.871 1.871 0 0015.15 6.38l.002-.45a1.421 1.421 0 01-1.418-1.418l-.45.002zm0-2.433v2.432h.45V2.081h-.45zm3.38 13.657H3.668v.45h12.995v-.45zm1.417-1.417c0 .783-.634 1.417-1.417 1.417v.45c1.031 0 1.866-.836 1.867-1.866h-.45zm0-7.14v7.14h.45v-7.14h-.45zm-2.93.225h3.155v-.45H15.15v.45zm-2.893-2.893a2.894 2.894 0 002.893 2.893v-.45a2.444 2.444 0 01-2.443-2.443h-.45zm0-3.155v3.155h.45V1.358h-.45zm-8.589.225h8.814v-.45H3.668v.45zM2.251 3A1.422 1.422 0 013.67 1.583l-.002-.45a1.872 1.872 0 00-1.866 1.866l.45.001zm0 11.321V3h-.45v11.322h.45zm1.418 1.417a1.422 1.422 0 01-1.418-1.417l-.45.001a1.872 1.872 0 001.866 1.866l.002-.45zm6.398-7.19H4.674v.45h5.393v-.45zm.288-.288c0 .16-.13.288-.288.288v.45c.407 0 .738-.33.738-.738h-.45zm-.288-.288c.159 0 .288.129.288.288h.45a.738.738 0 00-.738-.738v.45zm-5.393 0h5.393v-.45H4.674v.45zm-.289.288c0-.159.13-.288.289-.288v-.45a.738.738 0 00-.739.738h.45zm.289.288a.288.288 0 01-.289-.288h-.45c0 .408.331.738.739.738v-.45zm10.984 2.858H4.674v.45h10.984v-.45zm.738.738a.738.738 0 00-.738-.738v.45c.16 0 .288.129.288.288h.45zm-.738.738c.407 0 .738-.33.738-.738h-.45c0 .159-.129.288-.288.288v.45zm-10.984 0h10.984v-.45H4.674v.45zm-.739-.738c0 .408.331.738.739.738v-.45a.288.288 0 01-.289-.288h-.45zm.739-.738a.738.738 0 00-.739.738h.45c0-.16.13-.288.289-.288v-.45z"
        ></path>
      </svg>
    </Box>
  );
};

export default Document;
