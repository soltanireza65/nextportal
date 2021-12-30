import Link from 'next/link'
import React from 'react'
import styles from './Keywords.module.scss'

interface IProps {
  tags: string[]
}
const Keywords: React.FC<IProps> = ({ tags }) => {
  return (
    <div className="w-100 my-4">
      <span className="d-inline-block">برچسب ها : </span>
      {tags &&
        tags.map((item: string, i: number) => (
          <Link href="#" key={i}>
            {/* TODO set href for search */}
            <a className={`${styles.keyword} m-1`} target="_blank">
              {item}
            </a>
          </Link>
        ))}
    </div>
  )
}

export default Keywords
