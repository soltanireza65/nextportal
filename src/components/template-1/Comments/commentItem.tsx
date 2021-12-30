import { CommentItem } from "./styles"
import NewComment from "./NewComment"
import { useEffect, useState } from "react"
import { disLikeComment, likeComment } from "./lib"
import useDebounce from "hooks/useDebounce"
import { ErrorMessage } from "./styles"
import { getWithExpiry, setWithExpiry } from "utils/localStorageHelper"
import { toast } from "react-toastify"
import { IComment } from "interfaces"

interface IProps extends IComment {
  isNeedPadding: boolean
}
const CommentRow = ({
  fullName,
  agreeCount,
  content,
  childs,
  disAgreeCount,
  parentId,
  // isAdminReply,
  contentId,
  id,
  persianCreatedDateTime,
  isNeedPadding,
}: IProps) => {
  const [openNewComment, setOpenNewComment] = useState<boolean>(false)

  const [feedBackCheckState, setFeedBackCheckState] = useState<boolean>(false)
  const [increaseLike, setIncreaseLike] = useState<boolean>(false)
  const [errorEmotion, setErrorEmotion] = useState<boolean>(false)
  const [increaseDisLike, setIncreaseDisLike] = useState<boolean>(false)
  const handleClose = () => {
    setOpenNewComment(!openNewComment)
  }
  useEffect(() => {
    const data = getWithExpiry(id)
    if (data) setFeedBackCheckState(true)
    else setFeedBackCheckState(false)
  }, [])
  const handleLikeClick = useDebounce(
    async (id: any, type: "like" | "disLike") => {
      if (
        increaseDisLike == true ||
        increaseLike == true ||
        feedBackCheckState == true
      ) {
        setErrorEmotion(true)
        return null
      }
      if (type === "like") {
        const r = await likeComment({ id })

        if (r == 1) {
          toast.success("نظر شما با موفقیت ثبت شد.")
          setWithExpiry(id, id, 86400000)
          setFeedBackCheckState(true)
          setIncreaseLike(true)
        } else {
          toast.error("نظر شما ثبت نشد مشکل شبکه را بررسی نمایید.")
        }
      } else {
        const r = await disLikeComment({ id })
        if (r == 1) {
          toast.success("نظر شما با موفقیت ثبت شد.")
          setWithExpiry(id, id, 86400000)
          setFeedBackCheckState(true)
          setIncreaseDisLike(true)
        } else {
          toast.error("نظر شما ثبت نشد مشکل شبکه را بررسی نمایید.")
        }
      }
    },
    200
  )
  return (
    <CommentItem className={isNeedPadding ? "reply-comment" : ""}>
      {errorEmotion && (
        <ErrorMessage>
          <a>شما یک بار نظر خود را نسبت به این کامنت را ثبت کرده اید.</a>
        </ErrorMessage>
      )}
      <div className="comment-inner">
        <div className="user-comment-user">
          <img src="/images/avatar.png" alt={fullName} />
        </div>
        <div className="user-comment-body">
          <div className="comment-name">
            <h5>{fullName ? fullName : "ناشناس"}</h5>
            <div className="vote-preview">
              <span className="green">
                {/* {agreeCount + (increaseLike && 1)} */}
                {increaseLike ? agreeCount + 1 : agreeCount}
                <i className="mdi mdi-plus"></i>
              </span>
              <span className="red">
                {/* {disAgreeCount + (increaseDisLike && 1)} */}
                {increaseDisLike ? disAgreeCount + 1 : disAgreeCount}

                <i className="mdi mdi-minus"></i>
              </span>
            </div>
          </div>
          <div className="comment-date">{persianCreatedDateTime}</div>
          <div className="comment-text">{content}</div>
          <div className="comment-button">
            <button
              type="button"
              disabled={feedBackCheckState}
              onClick={() => handleLikeClick(id, "like")}
              className="btn btn-vote vote-up"
            >
              <i className="mdi mdi-plus"></i>
              <span>مثبت</span>
            </button>
            {"  "}
            <button
              type="button"
              disabled={feedBackCheckState}
              onClick={() => handleLikeClick(id, "disLike")}
              className="btn btn-vote vote-down"
            >
              <i className="mdi mdi-minus"></i>
              <span>منفی</span>
              {"  "}
            </button>
            <button
              type="button"
              onClick={() => setOpenNewComment(!openNewComment)}
              className="btn btn-vote reply"
            >
              <i className="mdi mdi-reply-outline"></i>
              <span>پاسخ</span>
            </button>
          </div>
        </div>
      </div>

      {openNewComment && (
        <NewComment contentId={contentId} replayId={id} close={handleClose} />
      )}
      {childs?.map((item, index) => {
        return (
          <CommentRow
            key={index}
            {...item}
            isNeedPadding={parentId?.length > 5}
          />
        )
      })}
    </CommentItem>
  )
}
export default CommentRow
