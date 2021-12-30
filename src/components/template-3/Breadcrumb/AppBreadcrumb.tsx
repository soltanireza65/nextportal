import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react"
import { ILink } from "interfaces"
import Link from "next/link"
import React from "react"
interface IProps {
  links?: ILink[]
}

const AppBreadcrumb: React.FC<IProps> = ({ links }) => {
  return (
    <Breadcrumb
      spacing="8px"
      mt="7"
      separator={<ChevronLeftIcon color="gray.500" />}
    >
      <BreadcrumbItem>
        <Link href="/">صفحه اصلی</Link>
      </BreadcrumbItem>
      {links &&
        links.map((linkItem: ILink, index: number) => (
          <BreadcrumbItem
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link href="/">{linkItem.title}</Link>
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  )
}

export default AppBreadcrumb
