import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { IGetCategories, IGetPublishedNews } from "interfaces"
import { toast } from "react-toastify"

axios.defaults.baseURL = "https://api.behsoud.com/"

axios.interceptors.response.use(undefined, async (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("خطا در شبکه داخلی")
  }
  const { status, data, config } = error.response
  if (status === 404) {
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
  }
  if (status === 500) {
    toast.error("خطا در ارتباط با سرور")
  }

  throw error
})

const responseBody = (response: AxiosResponse) => response.data

export const requests = {
  get: (url: string, reqConfig?: AxiosRequestConfig) =>
    axios.get(url, reqConfig && reqConfig).then(responseBody),
  post: (url: string, body: {}, reqConfig?: AxiosRequestConfig) =>
    axios.post(url, body, reqConfig && reqConfig).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
}

export const NewsApi = {
  GetLocationNews: (catid: string, locCode: string, count?: number) => {
    return requests.get(`/news/api/News/GetLocationNews`, {
      params: {
        CategoryId: catid,
        LocationCode: locCode,
        Count: count,
      },
    })
  },
  GetNewsByNewsCode: (newsCode: string) => {
    return requests.get(`/news/api/News/GetNewsByNewsCode/${newsCode}`)
  },

  GetRelatedNewsById: (id: string, count: number) => {
    return requests.get(`/news/api/News/GetRelatedNewsById/${id}/${count}`)
  },

  GetPublishedNews: ({
    FromStartPublishDateTime,
    TillStartPublishDateTime,
    DefaultCategoriesID,
    Titr,
    Tags,
  }: IGetPublishedNews) => {
    return requests.get(`/news/api/News/GetPublishedNews`, {
      params: {
        FromStartPublishDateTime,
        TillStartPublishDateTime,
        DefaultCategoriesID,
        Titr,
        Tags,
      },
    })
  },

  GetLatestNews: (
    CategoriesId?: string[],
    LocationCode?: string,
    Count?: number
  ) => {
    return requests.get(`/news/api/News/GetLatestNews`, {
      params: {
        CategoriesId,
        LocationCode,
        Count,
      },
    })
  },

  GetMostVisitedNewsNews: (
    CategoriesId?: string[],
    LocationCode?: string,
    Count?: number
  ) => {
    return requests.get(`/news/api/News/GetMostVisitedNews`, {
      params: {
        CategoriesId,
        LocationCode,
        Count,
      },
    })
  },

  GetArchiveNews: (
    DefaultCategoriesID: string,
    LocationCode: string,
    Count: number,
    Page: number
  ) => {
    return requests.get(`/news/api/News/GetPublishedNews`, {
      params: {
        DefaultCategoriesID: DefaultCategoriesID,
        LocationCode: LocationCode,
        Page: Page,
        Count: Count,
      },
    })
  },
}

export const CategoryApi = {
  GetCategories: ({
    flated,
    moduleType,
    count,
    getMainPageCategory,
  }: IGetCategories) => {
    // https://api.behsoud.com/category/api/Category/GetCategories?Flated=false
    return requests.get(`/category/api/Category/GetCategories`, {
      params: {
        Flated: flated,
        ModuleType: moduleType,
        Count: count,
        GetMainPageCategory: getMainPageCategory,
      },
    })
  },
  GetShortCategories: (flated: boolean, moduleType: number, count?: number) => {
    return requests.get(`/category/api/Category/GetShortCategories`, {
      params: {
        Flated: flated,
        ModuleType: moduleType,
        Count: count,
      },
    })
  },
  GetCategoryByCategoryCode: (catCode: string) => {
    return requests.get(
      `/category/api/Category/GetCategoryByCategoryCode/${catCode}`
    )
  },

  GetMainPageCategories: (GetMainPageCategory: boolean) => {
    return requests.get(`/category/api/Category/GetCategories`, {
      params: {
        GetMainPageCategory: GetMainPageCategory,
      },
    })
  },
}

export const CommentsApi = {
  GetModuleComment: (contentId: string, moduleType: number) => {
    return requests.get(`/comment/api/Comment/GetModuleComment`, {
      params: {
        contentId,
        moduleType,
      },
    })
  },
}
const api: AxiosInstance = axios.create({
  baseURL: "https://api.behsoud.com",
})

export default api
