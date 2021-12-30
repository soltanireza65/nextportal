import { useEffect, useState } from "react"
import { NewCommentBox, ErrorMessage } from "./styles"
import { validateEmail } from "utils/validation"
import { checkAuth } from "utils/checkAuth"
import { generateCaptcha } from "./lib"
import { toast } from "react-toastify"
import api from "axios/client"

interface IProps {
  contentId?: any
  replayId?: any
  close?: any
  moduleType?: number
}

export default ({ contentId, replayId, close, moduleType }: IProps) => {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState({
    id: "",
    message: "",
  })
  const [content, setContent] = useState<string>("")
  const [captchaText, setCaptchaText] = useState<string>("")

  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [captchaData, setCaptchaData] = useState<CaptchaInterfaces.ICaptcha>()

  const handleEmailChange = (e: any) => {
    if (validateEmail(e.target.value)) {
      setError({
        id: "",
        message: "",
      })
      setEmail(e.target.value)
    } else {
      setError({
        id: "email",
        message: "ایمیل معتبر نیست",
      })
    }
  }

  const regerateCaptcha = async () => {
    const res = await generateCaptcha()
    setCaptchaData({
      ...res,
    })
  }

  useEffect(() => {
    ;(async () => {
      const isLoggedIn = await checkAuth()
      setIsLogged(isLoggedIn)
      if (!isLoggedIn) regerateCaptcha()
    })()
  }, [])

  const handleSubmit = () => {
    if (!isLogged && (!captchaText || captchaText.length == 0)) {
      setError({
        id: "save",
        message: "وارد کردن کد امنیتی الزامی است.",
      })
      return
    } else {
      setError({
        id: "",
        message: "",
      })
    }

    if (error.id == "") {
      ;(async () => {
        let fullnameTemp = ""

        if (isLogged) {
          const request = await api.get(`/baseapi/api/User/GetUserProfile/`)
          const { data } = await request
          fullnameTemp = data.fullName
        } else {
          fullnameTemp = fullName
        }

        let r: any = 0
        if (!replayId) {
          // ===================================================
          r = await api({
            method: "post",
            url: "/comment/api/Comment/AddComment",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({
              fullName: fullnameTemp,
              content: content,
              contentId: contentId,
              email: email,
              moduleType: !!moduleType && moduleType > 0 ? moduleType : 1,
              showEmail: false,
              isLogged: isLogged,
              captchaText: captchaData ? captchaData.captchaTextValue : "",
              captchaToken: captchaData ? captchaData.captchaTokenValue : "",
              captchaUserInputText: captchaText ? captchaText : "",
            }),
          })

          // ===================================================

          // r = await addComment({
          //   fullName: fullnameTemp,
          //   content: content,
          //   contentId: contentId,
          //   email: email,
          //   moduleType: !!moduleType && moduleType > 0 ? moduleType : 1,
          //   showEmail: false,
          //   isLogged: isLogged,
          //   captchaText: captchaData ? captchaData.captchaTextValue : "",
          //   captchaToken: captchaData ? captchaData.captchaTokenValue : "",
          //   captchaUserInputText: captchaText ? captchaText : "",
          // });
        }
        if (replayId) {
          // r = await replayComment({
          //   fullName: fullnameTemp,
          //   content: content,
          //   contentId: contentId,
          //   email: email,
          //   moduleType: !!moduleType && moduleType > 0 ? moduleType : 1,
          //   parentId: replayId,
          //   isLogged: isLogged,
          //   showEmail: false,
          //   captchaText: captchaData ? captchaData.captchaTextValue : "",
          //   captchaToken: captchaData ? captchaData.captchaTokenValue : "",
          //   captchaUserInputText: captchaText ? captchaText : "",
          // });
          r = await api({
            method: "post",
            url: "/comment/api/Comment/AddCommentReply",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({
              parentId: replayId,
              fullName: fullnameTemp,
              content: content,
              contentId: contentId,
              email: email,
              moduleType: !!moduleType && moduleType > 0 ? moduleType : 1,
              showEmail: false,
              isLogged: isLogged,
              captchaText: captchaData ? captchaData.captchaTextValue : "",
              captchaToken: captchaData ? captchaData.captchaTokenValue : "",
              captchaUserInputText: captchaText ? captchaText : "",
            }),
          })
        }

        if (r.status === 200) {
          toast.success("نظر شما با موفقیت ثبت شد.")

          close()
        } else {
          toast.error("نظر شما ثبت نشد مشکل شبکه را بررسی نمایید.")
          setError({
            id: "save",
            message: "ارسال کامنت با مشکل مواجه شد.",
          })
        }
      })()
    }
  }
  return (
    <NewCommentBox>
      <div className="inner">
        <div className="text-input">
          {!isLogged && (
            <div className="sm-form-control">
              <span className="icon">
                <i className="mdi mdi-account-outline"></i>
              </span>
              <input
                className="myinput"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="نام و نام خانوادگی"
              />
            </div>
          )}
        </div>
        <div className="text-input">
          {!isLogged && (
            <div className="sm-form-control">
              <span className="icon">
                <i className="mdi mdi-email-outline"></i>
              </span>

              <input
                id="email"
                className="myinput"
                onChange={handleEmailChange}
                type="email"
                placeholder="آدرس ایمیل"
              ></input>
            </div>
          )}
        </div>
        {error.id == "email" && (
          <ErrorMessage>
            <a>{error.message}</a>
          </ErrorMessage>
        )}
        <div className="text-input">
          <div className="sm-form-control">
            <textarea
              className="textarea"
              cols={30}
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="متن پیام..."
            />
          </div>
        </div>
        <div className="write-footer">
          {!isLogged && (
            <div className="captcha">
              <div className="captcha-image">
                <img
                  src={captchaData && captchaData.captchaImgUrl}
                  alt="captcha"
                />
              </div>
              <div className="captcha-reload">
                <button
                  type="button"
                  className="btn-reload"
                  onClick={() => regerateCaptcha()}
                >
                  <i className="mdi mdi-reload"></i>
                </button>
              </div>
              <div className="captcha-input">
                <input
                  type="number"
                  className="captcha-input"
                  placeholder="کد امنیتی"
                  onChange={(e) => setCaptchaText(e.target.value)}
                />
                <span className="icon">
                  <i className="mdi mdi-fingerprint"></i>
                </span>
              </div>
            </div>
          )}
          <div className="send-btn" onClick={handleSubmit}>
            {error.id == "save" && (
              <ErrorMessage>
                <a>{error.message}</a>
              </ErrorMessage>
            )}
            <button id="save" type="button" className="btn btn-default">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </NewCommentBox>
  )
}
