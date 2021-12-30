import Link from 'next/link'
import React from 'react'
import { INews, IServiceResult } from 'interfaces'
import styles from './NewsListWithBullet.module.scss'

interface IProps {
  news: IServiceResult<INews[]>
}

const NewsListWithBullet = ({ news }: IProps) => {
  const { data, message, status } = news

  if (data.length < 1 || status == 2) {
    return (
      <div className={styles.wrapper}>
        <h4>{message}</h4>
      </div>
    )
  }

  return (
    <div className={styles.NewsWrapper}>
      <ul className={`${styles.newsList} list-unstyled m-0`}>
        {data &&
          data.map((newsItem: INews, index: number) => (
            <li className={`${styles.newsItem} 'media p-3`} key={index}>
              <h3 className={`${styles.hasBullet}`}>
                <Link href={`/news/${newsItem.newsCode}/${newsItem.seoTitr}`}>
                  <a className={`${styles.titrAnchor}`}>{newsItem.titr}</a>
                </Link>
              </h3>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default NewsListWithBullet
