import Image from "next/image"
import Link from "next/link"
import { INews, IServiceResult } from "interfaces"
import styles from "./MultiMedia.module.scss"

interface Props {
  news: IServiceResult<INews[]>
  width: number
  height: number
}

const MultiMedia = ({ news, width, height }: Props) => {
  const { data, message, status } = news

  if (data.length < 1 && status == 2) {
    return (
      <div className={styles.wrapper}>
        <h4>{message}</h4>
      </div>
    )
  }
  return (
    <div className={`${styles.wrapper} row`}>
      {data &&
        data.map((newsItem: INews, newsIndex: number) => {
          return (
            <div className="col-12 col-lg-6 p-0" key={newsIndex}>
              <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                <a className="w-100">
                  <Image
                    src={
                      (newsItem.mediaFiles[0].filePaths &&
                        newsItem.mediaFiles[0].filePaths.length > 0 &&
                        newsItem.mediaFiles[0].filePaths[0].filePath) ||
                      ""
                    }
                    alt={newsItem.seoTitr}
                    width={width}
                    height={height}
                    objectFit="cover"
                    className=""
                  />
                </a>
              </Link>
              <div className={`${styles.contentWrapper}`}>
                <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                  <a className="">
                    <h3 className={`${styles.titr} m-3`}>{newsItem.titr}</h3>
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default MultiMedia
