import Link from "next/link"
import React from "react"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"

export const HeaderTopWrapper: React.FC = () => {
  return (
    <div className="header-top-wrapper">
      <div className="elements-wrapper d-flex w-100 justify-content-center pt-2 pb-2 pb-md-0">
        <div className="right-col">
          <div className="header-logo-wrapper m-auto">
            <Link href="/">
              <a>
                <img
                  className="img-fluid"
                  src="/images/header-logo.png"
                  alt={process.env.NEXT_PUBLIC_SITE_TITLE}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="left-col d-none flex-md-row d-md-flex">
          <div className="header-top-links">
            <Link href="/html/item/1">
              <a>درباره ما</a>
            </Link>
            <Link href="/html/item/2">
              <a className="mx-md-2">تماس با ما</a>
            </Link>
            <Link href="/search/QuickSearch">
              <a>آرشیو</a>
            </Link>
          </div>

          <div className="social-icons">
            <Link href="#">
              <a target="_blank">
                <IoLogoTwitter />
              </a>
            </Link>
            <Link href="#">
              <a target="_blank" className="mx-md-3">
                {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                <IoLogoFacebook />
              </a>
            </Link>
            <Link href="#">
              <a target="_blank">
                <IoLogoInstagram />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
