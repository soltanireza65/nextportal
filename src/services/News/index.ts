import FormData from "form-data"
import { Http } from "services/Http/index"

const prefixUrl = `${process.env.NEXT_PUBLIC_APP_URL}/news/api/news`
export const NewsApi = {
  manageNews: async (
    data?: NewsInterface.BodyNews
  ): Promise<IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>> => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/managenews`,
      params: data,
    })

    return response
  },
  getPublishedNews: async (
    data?: NewsInterface.BodyNews
  ): Promise<IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>> => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetPublishedNews`,
      params: data,
    })

    return response
  },
  getNewsById: async ({
    id,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetNewsById:id`,
      params: id,
    })

    return response
  },
  getRelatedNewsById: async ({
    id,
    Count,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>

    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/GetRelatedNewsById/${id}/${Count}`,
      })
    } catch {
      response = {
        data: null,
        message: "مشکل در برقراری ارتباط با سرور رخ داده است.",
        status: 2,
      }
    }
    return response
  },
  getLocationNews: async ({
    CategoryId,
    LocationCode,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>

    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/GetLocationNews`,
        params: {
          CategoryId,
          LocationCode,
        },
      })
    } catch {
      response = {
        data: [],
        message: "مشکل در برقراری ارتباط با سرور رخ داده است.",
        status: 2,
      }
    }
    return response
  },
  getLocationByNewsId: async ({
    id,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetNewsLocationsByNewsId/${id}`,
    })

    return response
  },
  increaseNewsVisitCount: async ({
    id,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    let formData = new FormData()
    formData.append("id", id)

    response = await Http.Request({
      methodType: "put",
      url: `${prefixUrl}/IncreaseNewsVisitCount`,
      formData: formData,
    })

    return response
  },
  increaseNewsShareCount: async ({
    id,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    let formData = new FormData()
    formData.append("id", id)

    response = await Http.Request({
      methodType: "put",
      url: `${prefixUrl}/IncreaseNewsShareCount`,
      formData: formData,
    })

    return response
  },
  toggleLikeNews: async ({
    id,
    ToggleLike,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    response = await Http.Request({
      methodType: "put",
      url: `${prefixUrl}/ToggleLikeNews`,
      payload: {
        id,
        ToggleLike,
      },
    })

    return response
  },
  toggleDisLikeNews: async ({
    id,
    ToggleLike,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    response = await Http.Request({
      methodType: "put",
      url: `${prefixUrl}/ToggleDisLikeNews`,
      payload: {
        id,
        ToggleLike,
      },
    })

    return response
  },
  getNewsLocationsByNewsId: async ({
    id,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetNewsLocationsByNewsId/${id}`,
    })

    return response
  },
  getNewsByNewsCode: async ({
    newsCode,
  }: NewsInterface.BodyNews): Promise<
    IGlobalService.IServiceResult<NewsInterface.NewsDTO>
  > => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetNewsByNewsCode/${newsCode}`,
    })

    return response
  },
  GetMostVisitedNews: async (
    categoriesId: string[],
    { LocationCode, Count }: NewsInterface.BodyNews
  ): Promise<IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>> => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>

    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/GetMostVisitedNews`,
        params: {
          categoriesId,
          LocationCode,
          Count,
        },
      })
    } catch {
      response = {
        data: [],
        message: "مشکل در برقراری ارتباط با سرور رخ داده است.",
        status: 2,
      }
    }
    return response
  },
  getMostCommented: async (
    categoriesId: string[],
    { LocationCode, Count }: NewsInterface.BodyNews
  ): Promise<IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>> => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>

    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/GetMostCommentedNews`,
        params: {
          categoriesId,
          LocationCode,
          Count,
        },
      })
    } catch {
      response = {
        data: [],
        message: "مشکل در برقراری ارتباط با سرور رخ داده است.",
        status: 2,
      }
    }
    return response
  },
  getLatestNews: async (
    categoriesId: string[],
    { LocationCode, Count }: NewsInterface.BodyNews
  ): Promise<IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>> => {
    let response: IGlobalService.IServiceResult<NewsInterface.NewsDTO[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetLatestNews`,
      params: {
        categoriesId,
        LocationCode,
        Count,
      },
    })

    return response
  },
}
