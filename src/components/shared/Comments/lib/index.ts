import api from "axios/client"
import { IComment } from "interfaces"
import { CommentApi } from "services/comment/index"

export const generateCaptcha = async (): Promise<CaptchaInterfaces.ICaptcha> => {
  const { data } = await api.get(`/captcha/api/Captcha/GetCaptcha`)

  const { captchaImgUrl, captchaTextValue, captchaTokenValue } = await data
  return {
    captchaImgUrl,
    captchaTextValue,
    captchaTokenValue,
  }
}

export const addComment = async ({
  captchaText,
  captchaToken,
  captchaUserInputText,
  content,
  contentId,
  email,
  fullName,
  // id,
  moduleType,
  parentId,
  isLogged,
  showEmail,
}: CommentAPIInterface.IBody): Promise<number> => {
  try {
    const request = await CommentApi.addComment({
      fullName,
      content,
      contentId,
      email,
      parentId,
      moduleType,
      isLogged,
      showEmail,
      captchaText,
      captchaToken,
      captchaUserInputText,
    })
    const { status } = await request
    return status as number
  } catch {
    return 2
  }
}
export const getComments = async (
  filterData?: CommentAPIInterface.IFilterBody
): Promise<CommentAPIInterface.IComment[]> => {
  const request = await CommentApi.getModuleComment(filterData)

  try {
    const { data } = await request
    return data as IComment[]
  } catch {
    return []
  }
}

export const replayComment = async ({
  captchaText,
  captchaToken,
  captchaUserInputText,
  content,
  contentId,
  email,
  isLogged,
  fullName,
  // id,
  moduleType,
  parentId,
  showEmail,
}: CommentAPIInterface.IBody): Promise<number> => {
  try {
    const request = await CommentApi.replayComment({
      fullName,
      content,
      contentId,
      email,
      parentId,
      isLogged,
      moduleType,
      showEmail,
      captchaText,
      captchaToken,
      captchaUserInputText,
    })
    const { status } = await request
    return status as number
  } catch {
    return 2
  }
}

export const likeComment = async ({
  id,
}: CommentAPIInterface.IBody): Promise<number> => {
  try {
    const request = await CommentApi.likeComment({ id })
    const { status } = await request
    return status as number
  } catch {
    return 2
  }
}

export const disLikeComment = async ({
  id,
}: CommentAPIInterface.IBody): Promise<number> => {
  try {
    const request = await CommentApi.disLikeComment({ id })
    const { status } = await request
    return status as number
  } catch {
    return 2
  }
}
