import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  content: string;
}

const AppAccordionItem = ({ title, content }: Props) => {
  return (
    <AccordionItem borderRadius="2xl" m="5" border="1px solid #EDF2F7" boxShadow="md">
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="right">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{content}</AccordionPanel>
    </AccordionItem>
  );
};

export default AppAccordionItem;
