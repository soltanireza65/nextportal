import React from 'react'
import styles from './PublishedDate.module.scss'

interface IProps {
  dateTime: string
}

const DateWidget: React.FC<IProps> = ({ dateTime }) => {
  var [date, time] = dateTime.split(' ')

  return (
    <div className={styles.date}>
      {time && (
        <time dateTime={time} itemProp='datePublished'>
          {time}
        </time>
      )}
      <span> - </span>
      {date && (
        <time dateTime={date} itemProp='datePublished'>
          {date}
        </time>
      )}
    </div>
  )
}

export default DateWidget
