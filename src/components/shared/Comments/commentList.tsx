import { CommentListComponentsContainer } from "./styles"
import CommentItem from "./commentItem"
import { useState } from "react"
import NewComment from "./NewComment"
import Image from "next/image"
interface IProps {
  commentList?: CommentAPIInterface.IComment[]
  contentId?: string
  moduleType?: number
}

export default ({ commentList, contentId, moduleType }: IProps) => {
  const [openNewComment, setOpenNewComment] = useState<boolean>(false)

  const handleClose = () => {
    setOpenNewComment(!openNewComment)
  }
  return (
    <CommentListComponentsContainer>
      <div className="title">
        <div className="logo-inner">
          <Image
            src="/images/header-logo.png"
            alt="ffff"
            width={50}
            height={50}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <h4 className="title-text">ديدگاه کاربران</h4>
      </div>

      <div className="comments-inner">
        <NewComment
          contentId={contentId}
          replayId=""
          close={handleClose}
          moduleType={moduleType}
        />

        {commentList?.map((item, index) => {
          return <CommentItem key={index} {...item} isNeedPadding={false} />
        })}
      </div>
    </CommentListComponentsContainer>
  )
}
