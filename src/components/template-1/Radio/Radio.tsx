import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface IProps {
  image: string
  audio: string
}
const Radio: React.FC<IProps> = ({ image, audio }) => {
  return (
    <div className=''>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <Link href='#'>
          <a>
            <Image
              src={image}
              alt='ffff'
              width={260}
              height={260}
              layout='responsive'
              objectFit='cover'
            />
          </a>
        </Link>
        <audio src={audio} className='w-100' controls />
      </div>
    </div>
  )
}

export default Radio
