import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react"
import { INews, IServiceResult } from "interfaces"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "./NewsList.module.scss"

interface IProps {
  news: IServiceResult<INews[]>
  width: number
  height: number
}

const NewsList = ({ news, width, height }: IProps) => {
  const { data, message, status } = news

  if (data.length < 1 || status == 2) {
    return (
      <div className={styles.wrapper}>
        <h4>{message}</h4>
      </div>
    )
  }

  return (
    <Box>
      <List spacing={3}>
        {data &&
          data.map((newsItem: INews, index: number) => {
            const mainMedia = newsItem?.mediaFiles.filter(
              (mediaFile) => mediaFile.mediaFileType === 1
            )
            return (
              <ListItem display="flex" key={index}>
                <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                  <a>
                    <Image
                      src="/images/item.jpg"
                      alt={newsItem.seoTitr}
                      width={width}
                      height={height}
                      objectFit="cover"
                      className="rounded"
                      layout="fixed"
                    />
                  </a>
                </Link>
                <Flex
                  flexDirection="column"
                  justifyContent="space-around"
                  paddingY="7px"
                  marginRight="7px"
                >
                  {newsItem.titr && (
                    <Text
                      marginBottom="auto"
                      as="h3"
                      textOverflow="ellipsis"
                      whiteSpace="normal"
                    >
                      <Link
                        href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}
                      >
                        <a>{newsItem.titr}</a>
                      </Link>
                    </Text>
                  )}
                  {/* <Spacer height="full" /> */}
                  {newsItem.lead && <Text as="h4">{newsItem.lead}</Text>}
                </Flex>
              </ListItem>
            )
          })}
      </List>
      {/* <ul className={`${styles.newsList} list-unstyled m-0`}>
        {data &&
          data.map((newsItem: INews, index: number) => {
            const mainMedia = newsItem?.mediaFiles.filter(
              (mediaFile) => mediaFile.mediaFileType === 1
            )
            return (
              <li className={`${styles.newsItem} media p-3`} key={index}>
                <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                  <a>
                    <Image
                      src="/images/item.jpg"
                      // src={
                      //   (newsItem.mediaFiles[0].filePaths &&
                      //     newsItem.mediaFiles[0].filePaths.length > 0 &&
                      //     newsItem.mediaFiles[0].filePaths[0].filePath) ||
                      //   ""
                      // }
                      // src={mainMedia[0].filePaths[0].filePath}
                      // src={newsItem.mediaFiles[0].filePaths[0].filePath + ""}
                      alt={newsItem.seoTitr}
                      width={width}
                      height={height}
                      objectFit="cover"
                      className="rounded"
                    />
                  </a>
                </Link>

                <div className={`${styles.mediaBody} overflow-hidden mr-2`}>
                  <div className={styles.contentWrapper}>
                    {newsItem.lead && (
                      <h4 className="font-weight-bold">{newsItem.lead}</h4>
                    )}

                    <h3 className="font-weight-bold">
                      <Link
                        href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}
                      >
                        <a className={styles.titrAnchor}>{newsItem.titr}</a>
                      </Link>
                    </h3>
                    <h5 className="text-muted m-0">{newsItem.lead}</h5>
                  </div>
                </div>
              </li>
            )
          })}
      </ul> */}
    </Box>
  )
}

export default NewsList
