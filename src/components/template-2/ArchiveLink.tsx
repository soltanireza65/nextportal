import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/layout";
import React from "react";

interface IProps {
  title: string;
}

const ArchiveLink = ({ title }: IProps) => {
  return (
    <>
      <Link href="#">{title}</Link>
      <ChevronLeftIcon
        w={10}
        h={10}
        borderRadius="50%"
        color="red.500"
        padding="3"
      />
    </>
  );
};

export default ArchiveLink;
