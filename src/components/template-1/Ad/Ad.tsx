import Image from "next/image"
import Link from "next/link"
import { IAd } from "interfaces"

interface IProps {
  ad: IAd
  width: number
  height: number
}
const Ad: React.FC<IProps> = ({ width, height }) => {
  return (
    <div className="">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Link href="#">
          <a>
            <Image
              // src={ad.image}
              src="/images/home_ad.jpg"
              alt="ffff"
              width={width}
              height={height}
              layout="responsive"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Ad
