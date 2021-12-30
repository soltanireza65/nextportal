import { IMediaFile, INews } from "interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import styles from "./ListItem.module.scss"

interface IProps {
  newsItem?: INews
  width: number
  height: number
}

// const ArchiveItem = ({ newsItem, width, height }) => {
const ListItem: React.FC<IProps> = ({ newsItem, width, height }) => {
  const [mainMedia, setMainMedia] = useState<IMediaFile[]>(
    newsItem?.mediaFiles?.filter((mediaFile) => mediaFile.mediaFileType === 1)
  )

  return (
    <div className="card mb-3 bg-dark rounded-0">
      <div className="row">
        <div className="col-md-3">
          <div className="m-2 overflow-hidden">
            {/* <Image
              src="/images/item.jpg"
              alt={newsItem.titr}
              width={width}
              height={height}
              objectFit="cover"
              // layout="responsive"
              className={`${styles.img} card-img w-100  overflow-hidden`}
            /> */}
            <img
              src="/images/item.jpg"
              className={`${styles.img} card-img w-100  overflow-hidden`}
              height={height}
              style={{
                objectFit: "cover",
              }}
              alt={newsItem.titr}
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card-body text-white">
            <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
              <a className="text-dark">
                <h5 className={`${styles.cardTitle} card-title text-white`}>
                  {newsItem.titr}
                </h5>
              </a>
            </Link>
            {/* <div dangerouslySetInnerHTML={{ __html: newsItem.content }} /> */}
            <p className="card-text">
              <small className="text-info">
                {newsItem.persianCreatedDateTime}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem
