import Image from "next/image"
import Link from "next/link"
import React from "react"
import { INews, IServiceResult } from "interfaces"
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
    <div className={`${styles.Wrapper}`}>
      <ul className={`${styles.newsList} list-unstyled m-0`}>
        {data &&
          data.map((newsItem: INews, index: number) => {
            return (
              <li className={`${styles.newsItem} media p-3`} key={index}>
                {newsItem.mediaFiles && (
                  <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                    <a>
                      <Image src={(newsItem.mediaFiles[0].filePaths && newsItem.mediaFiles[0].filePaths.length > 0 && newsItem.mediaFiles[0].filePaths[0].filePath) || ""} alt={newsItem.seoTitr} width={width} height={height} objectFit="cover" />
                    </a>
                  </Link>
                )}

                <div className={`${styles.mediaBody} overflow-hidden mr-2`}>
                  <div className={styles.contentWrapper}>
                    {newsItem.lead && <h4 className="font-weight-bold">{newsItem.lead}</h4>}

                    {/* TODO NewsList data Structure for reuseability */}

                    <h3 className="font-weight-bold">
                      <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                        <a className={styles.titrAnchor}>{newsItem.titr}</a>
                      </Link>
                    </h3>
                    <h5 className="text-muted m-0">{newsItem.lead}</h5>
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default NewsList
