import { Http } from "../Http/index"
const prefixUrl = `${process.env.NEXT_PUBLIC_APP_URL}/category/api/Category`

export const CategoryApi = {
  getAllCategories: async (
    data?: ICategory.ICategoryData
  ): Promise<IGlobalService.IServiceResult<ICategory.ICategoryData[]>> => {
    let response: IGlobalService.IServiceResult<ICategory.ICategoryData[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetCategories`,
      params: data,
    })

    return response
  },
  getCategoryById: async ({
    id,
  }: ICategory.ICategoryData): Promise<
    IGlobalService.IServiceResult<ICategory.ICategoryData>
  > => {
    let response: IGlobalService.IServiceResult<ICategory.ICategoryData>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetCategoryById/${id}`,
    })

    return response
  },
  getCategoryByEnglishTitle: async ({
    englishTitle,
  }: ICategory.ICategoryData): Promise<
    IGlobalService.IServiceResult<ICategory.ICategoryData>
  > => {
    let response: IGlobalService.IServiceResult<ICategory.ICategoryData>
    try {
      response = await Http.Request({
        methodType: "get",
        url: `${prefixUrl}/GetCategoryByEnglishTitle/${englishTitle}`,
      })
    } catch (e) {
      response = {
        status: 2,
      }
    }
    return response
  },
  getCategoryByCode: async ({
    categoryCode,
  }: ICategory.ICategoryData): Promise<
    IGlobalService.IServiceResult<ICategory.ICategoryData>
  > => {
    let response: IGlobalService.IServiceResult<ICategory.ICategoryData>
    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetCategoryByCategoryCode/${categoryCode}`,
    })

    return response
  },
  getParentCategories: async ({
    id,
  }: ICategory.ICategoryData): Promise<
    IGlobalService.IServiceResult<ICategory.ICategoryData[]>
  > => {
    let response: IGlobalService.IServiceResult<ICategory.ICategoryData[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetCategoryParents/${id}`,
    })

    return response
  },
  getShortCategories: async (): Promise<
    IGlobalService.IServiceResult<ICategory.ICategoryData[]>
  > => {
    let response: IGlobalService.IServiceResult<ICategory.ICategoryData[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetShortCategories`,
    })

    return response
  },
}
