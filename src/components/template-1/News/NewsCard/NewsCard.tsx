import Image from "next/image"
import Link from "next/link"
import React, { Fragment, useState } from "react"
import { IMediaFile, INews, IServiceResult } from "interfaces"
import styles from "./NewsCard.module.scss"

interface IProps {
  news: IServiceResult<INews[]>
  width: number
  height: number
}

const NewsCard = ({ news, width, height }: IProps) => {
  const { data, message, status } = news

  if (data.length < 1 && status == 2) {
    return (
      <div className={styles.wrapper}>
        <h4>{message}</h4>
      </div>
    )
  }
  const [mainMedia, setMainMedia] = useState<IMediaFile[]>(
    data[0]?.mediaFiles?.filter((mediaFile) => mediaFile.mediaFileType === 1)
  )

  return (
    <div className={styles.wrapper}>
      {data &&
        data.map((newsItem: INews, newsIndex: number) => {
          return (
            <Fragment key={newsIndex}>
              <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                <a>
                  <Image
                    // src={mainMedia[0]?.filePaths[0].filePath}
                    src={
                      (newsItem.mediaFiles[0].filePaths &&
                        newsItem.mediaFiles[0].filePaths.length > 0 &&
                        newsItem.mediaFiles[0].filePaths[0].filePath) ||
                      ""
                    }
                    alt={newsItem.seoTitr}
                    width={width}
                    height={height}
                    layout="responsive"
                    objectFit="cover"
                  />
                </a>
              </Link>
              <div className={`${styles.contentWrapper} p-3`}>
                <h4>{newsItem.titr.substr(0, 35)}</h4>
                <h2 className="font-weight-bold m-0">
                  <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                    <a className={styles.titrAnchor}>{newsItem.titr}</a>
                  </Link>
                </h2>
              </div>
            </Fragment>
          )
        })}
    </div>
  )
}

export default NewsCard
