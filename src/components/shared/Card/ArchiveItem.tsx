import { IMediaFile, INews } from "interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import styles from "./ArchiveItem.module.scss"

interface IProps {
  newsItem?: INews
  width: number
  height: number
}

// const ArchiveItem = ({ newsItem, width, height }) => {
const ArchiveItem: React.FC<IProps> = ({ newsItem, width, height }) => {
  const [mainMedia, setMainMedia] = useState<IMediaFile[]>(
    newsItem?.mediaFiles?.filter((mediaFile) => mediaFile.mediaFileType === 1)
  )
  return (
    <div className="card">
      {newsItem && (
        <>
          <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
            <a>
              <Image
                // src={
                //   (newsItem.mediaFiles[0].filePaths &&
                //     newsItem.mediaFiles[0].filePaths.length > 0 &&
                //     newsItem.mediaFiles[0].filePaths[0].filePath) ||
                //   ""
                // }
                src={mainMedia[0]?.filePaths[0].filePath}
                alt={newsItem.titr}
                width={width}
                height={height}
                layout="responsive"
                objectFit="cover"
              />
            </a>
          </Link>
          <div className="card-body">
            <h5 className={`${styles.cardTitle}`}>
              <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                {newsItem.titr}
              </Link>
            </h5>
            <p className="card-text">{newsItem.titr}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default ArchiveItem
