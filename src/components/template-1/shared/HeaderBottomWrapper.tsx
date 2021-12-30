import Link from "next/link"
import React from "react"
import getCurrentTime from "utils/getCurrentTime"
import Image from "next/image"
import Navigation from "./Navigation"
import { IoSearchOutline } from "react-icons/io5"

export const HeaderBottomWrapper = () => {
  return (
    <div className="wrapper d-md-flex align-items-md-center justify-content-md-between py-2 py-md-0">
      <div className="date-wrapper text-center">
        <span className="date font-weight-bold">{getCurrentTime()}</span>
      </div>
      <div className="menu-wrapper d-inline-block mx-md-auto">
        {/* <HorizontalMenuResponsive /> */}
        <Navigation />
      </div>
      <div className="search-wrapper d-inline-block float-left">
        <Link href="/search/QuickSearch">
          <a className="search-icon" title="جستجو">
            <IoSearchOutline />
          </a>
        </Link>
      </div>
      <div className="en-logo-wrapper pr-md-2">
        <a href="/">
          <Image
            className="img-fluid"
            src="/images/razipress-en-logo.png"
            alt={process.env.NEXT_PUBLIC_SITE_TITLE}
            width={115}
            height={18}
            layout="responsive"
            objectFit="cover"
          />
        </a>
      </div>
    </div>
  )
}
