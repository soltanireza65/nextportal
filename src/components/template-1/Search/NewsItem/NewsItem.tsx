import Image from "next/image"
import Link from "next/link"
import React, { Fragment, useState } from "react"
import { IMediaFile, INews } from "interfaces"
import styles from "./NewsItem.module.scss"

interface IProps {
  newsItem: INews
  width: number
  height: number
}

const NewsItem = ({ newsItem, width, height }: IProps) => {
  if (!newsItem) {
    return (
      <div>
        <h4>Not Found</h4>
      </div>
    )
  }

  const [mainMedia, setMainMedia] = useState<IMediaFile[]>(
    newsItem?.mediaFiles?.filter((mediaFile) => mediaFile.mediaFileType === 1)
  )

  return (
    <div className={styles.wrapper}>
      {newsItem && (
        <Fragment>
          {newsItem.mediaFiles && (
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
                  alt={newsItem.mediaFiles[0].caption}
                  width={width}
                  height={height}
                  layout="responsive"
                  objectFit="cover"
                  className="ml-3"
                />
              </a>
            </Link>
          )}

          <div className={`${styles.contentWrapper} p-3`}>
            <h4>{newsItem.titr.substr(0, 35)}</h4>
            <h2 className="font-weight-bold m-0">
              <Link href="#">
                <a className={styles.titrAnchor}>{newsItem.titr}</a>
              </Link>
            </h2>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default NewsItem
