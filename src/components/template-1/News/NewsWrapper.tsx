import React from 'react'
import styles from './NewsWrapper.module.scss'

interface IProps {
  title?: string
}

const NewsWrapper: React.FC<IProps> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      {title && title.length > 0 && (
        <div className={`${styles.boxHeader} font-weight-bold`}>
          <span>{title}</span>
        </div>
      )}

      <div className={`${styles.boxContent}`}>{children}</div>
    </div>
  )
}

export default NewsWrapper
