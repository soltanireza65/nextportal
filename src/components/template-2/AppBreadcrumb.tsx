import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { ILink } from "interfaces";
import React from "react";

interface IProps {
  links?: ILink[];
}

const AppBreadcrumb: React.FC<IProps> = ({ links }) => {
  return (
    <Breadcrumb
      color="whiteAlpha.600"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <BreadcrumbItem
        itemScope
        itemProp="item"
        itemType="https://schema.org/ListItem"
      >
        <BreadcrumbLink
          itemProp="name"
          href="#"
          _hover={{
            color: "red.600",
          }}
        >
          صفحه اصلی
        </BreadcrumbLink>
        <meta itemProp="position" content="1" />
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          _hover={{
            color: "red.600",
          }}
          href="#"
        >
          خدمات تارنماگستر
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
