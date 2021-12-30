import { ListItem, Text } from "@chakra-ui/react"
import { ICategory } from "interfaces"
import Link from "next/link"
import React from "react"
import { CgFolder } from "react-icons/cg"
interface IProps {
  category: ICategory
}

const CategoryListItem = ({ category }: IProps) => {
  return (
    <ListItem display="flex">
      <CgFolder size={"1rem"} className="ml-2" />
      <Link href={`/service/${category.categoryCode}/${category.title}`}>
        <Text cursor="pointer" fontSize="small">
          {category.title}
        </Text>
      </Link>
    </ListItem>
  )
}

export default CategoryListItem
