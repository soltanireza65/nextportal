import { NewsApi } from "axios/client"
import ArchiveItem from "components/shared/Card/ArchiveItem"
import Layout from "components/template-1/shared/Layout"
import { INews, IServiceResult } from "interfaces"
import { GetServerSideProps } from "next"
import Link from "next/link"
// import { useRouter } from 'next/dist/client/router'
import React from "react"
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5"
import styles from "./archive.module.scss"
const PER_PAGE = 1

interface IProps {
  archiveResult: IServiceResult<INews[]>
  page: number
  total: number
  locationName: string
  CategoryID: string
}

const Archive: React.FC<IProps> = ({
  archiveResult,
  page,
  total,
  locationName,
  CategoryID,
}) => {
  const lastPage = Math.ceil(total / PER_PAGE)
  let { data, status, message } = archiveResult
  if (data && status == 2) {
    return (
      <div className={styles.wrapper}>
        <h4>{message}</h4>
      </div>
    )
  }

  return (
    <Layout>
      <div className={`${styles.archiveToolbar} my-4 p-3 container`}>
        <h1 className={styles.archiveTitle}>آرشیو جایگاه ....</h1>
      </div>
      <div className={`${styles.archiveInner} mx-auto my-4 p-3 container`}>
        <div className="row w-100">
          {data &&
            data.length > 0 &&
            data.map((newsItem: INews, newsIndex: number) => {
              return (
                <div
                  key={newsIndex}
                  className={`${styles.newsItem} col col-12 col-md-6 col-lg-3 mb-3`}
                >
                  <ArchiveItem newsItem={newsItem} width={250} height={175} />
                </div>
              )
            })}
        </div>
        <nav
          aria-label="Page navigation"
          className={`${styles.pagination} mx-auto`}
        >
          <ul className="pagination">
            {page < lastPage ? (
              <li className="page-item">
                <Link
                  href={`/archive/${locationName}/${CategoryID}?page=${
                    page + 1
                  }`}
                >
                  <a className="page-link">
                    <IoArrowForwardOutline />
                  </a>
                </Link>
              </li>
            ) : (
              <li className="page-item disabled">
                <p className="page-link">
                  <IoArrowForwardOutline />
                </p>
              </li>
            )}
            <li className="page-item">
              <p className="page-link">{page}</p>
            </li>
            {page > 1 ? (
              <li className="page-item">
                <Link
                  href={`/archive/${locationName}/${CategoryID}?page=${
                    page - 1
                  }`}
                >
                  <a className="page-link">
                    <IoArrowBackOutline />
                  </a>
                </Link>
              </li>
            ) : (
              <li className="page-item disabled">
                <p className="page-link">
                  <IoArrowBackOutline />
                </p>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query: { page = 1 },
}) => {
  const CategoryID = params?.slug[1] ? params?.slug[1] : ""
  const locationName = params?.slug[0] ? params?.slug[0] : ""
  const archiveResult = await NewsApi.GetArchiveNews(
    CategoryID,
    locationName,
    PER_PAGE,
    +page
  )

  const data = await NewsApi.GetPublishedNews({
    DefaultCategoriesID: ["6086a995c0dd7800012286de"],
    LocationCode: "TOP",
  })

  return {
    props: {
      archiveResult: archiveResult,
      locationName: locationName,
      CategoryID: CategoryID,
      page: +page,
      total: data.data.length,
    },
  }
}

export default Archive
