import api from "axios/client"
import FormData from "form-data"
import { Http } from "../Http/index"
const prefixUrl = `${process.env.NEXT_PUBLIC_APP_URL}/comment/api/Comment`
export const CommentApi = {
  addComment: async (
    data?: CommentAPIInterface.IBody
  ): Promise<IGlobalService.IServiceResult<CommentAPIInterface.IComment>> => {
    let response: IGlobalService.IServiceResult<CommentAPIInterface.IComment>

    response = await api.post("/api/Comment/AddComment", { ...data })

    return response
  },
  likeComment: async ({
    id,
  }: CommentAPIInterface.IBody): Promise<
    IGlobalService.IServiceResult<any>
  > => {
    let response: IGlobalService.IServiceResult<any>
    let formData = new FormData()
    formData.append("id", id)

    response = await Http.Request({
      methodType: "put",
      url: `https://api.behsoud.com/api/Comment/LikeComment`,
      payload: formData,
    })

    return response
  },
  disLikeComment: async ({
    id,
  }: CommentAPIInterface.IBody): Promise<
    IGlobalService.IServiceResult<any>
  > => {
    let response: IGlobalService.IServiceResult<any>
    let formData = new FormData()
    formData.append("id", id)

    response = await Http.Request({
      methodType: "put",
      url: `https://api.behsoud.com/api/Comment/DisLikeComment`,
      payload: formData,
    })

    return response
  },
  replayComment: async (
    data?: CommentAPIInterface.IBody
  ): Promise<IGlobalService.IServiceResult<CommentAPIInterface.IComment>> => {
    let response: IGlobalService.IServiceResult<CommentAPIInterface.IComment>

    response = await Http.Request({
      methodType: "post",
      needAuth: data.isLogged,
      url: `https://api.behsoud.com/api/Comment/AddCommentReply`,
      payload: data,
    })

    return response
  },
  getComments: async (
    data?: CommentAPIInterface.IFilterBody
  ): Promise<IGlobalService.IServiceResult<CommentAPIInterface.IComment[]>> => {
    let response: IGlobalService.IServiceResult<CommentAPIInterface.IComment[]>

    response = await Http.Request({
      methodType: "get",
      url: `https://api.behsoud.com/api/Comment/GetComments`,
      params: data,
    })

    return response
  },

  getModuleComment: async (
    data?: CommentAPIInterface.IFilterBody
  ): Promise<IGlobalService.IServiceResult<CommentAPIInterface.IComment[]>> => {
    let response: IGlobalService.IServiceResult<CommentAPIInterface.IComment[]>

    response = await Http.Request({
      methodType: "get",
      url: `https://api.behsoud.com/api/Comment/GetModuleComment`,
      params: data,
    })

    return response
  },
}
