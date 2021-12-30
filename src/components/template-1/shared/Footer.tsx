import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='container-fluid py-4 footer-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex justify-content-between flex-column align-items-center'>
              <div className='logo-wrapper my-2'>
                <a href='/'>
                  <img
                    className='img-fluid'
                    src='/images/header-logo.png'
                    alt={process.env.NEXT_PUBLIC_SITE_TITLE}
                  />
                </a>
              </div>
              <p className='font-weight-bold m-0 my-2 text-center'>
                تمامی حقوق قانونی مطالب، متعلق به پایگاه خبری تحلیلی رازی پرس
                می‌باشد.
                <br />
                استفاده از مطالب آن با ذکر منبع بلامانع است.
              </p>
              <div className='designer-wrapper my-2'>
                <a
                  target='_blank'
                  href='https://tarnamagostar.ir'
                  title='تارنماگستر'>
                  <img
                    src='/images/tarnama.png'
                    className='img-fluid'
                    alt='تارنماگستر'
                    title='تارنماگستر'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
