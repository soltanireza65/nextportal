import { Http } from "../Http/index"
const prefixUrl = `${process.env.NEXT_PUBLIC_APP_URL}/polling/api/YesNoPolling/`

export const PollingApi = {
  addVote: async ({
    agree,
    categoryId,
    categoryTitle,
    isNeedAuth,
  }: IPolling.IBody): Promise<IGlobalService.IServiceResult<any>> => {
    let response: IGlobalService.IServiceResult<IBourseData.IBubbleParams[]>

    response = await Http.Request({
      methodType: "post",
      needAuth: isNeedAuth,
      url: `${prefixUrl}VoteYesNoPolling`,
      payload: {
        agree,
        categoryId,
        categoryTitle,
      },
    })

    return response
  },
  getCategoryPolling: async ({
    categoryId,
  }: IPolling.IBody): Promise<
    IGlobalService.IServiceResult<IPolling.IVote>
  > => {
    let response: IGlobalService.IServiceResult<IPolling.IVote>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}GetLatestYesNoPollingByCategoryId/${categoryId}`,
    })

    return response
  },
  getFavoriteCategoriesPolling: async (): Promise<
    IGlobalService.IServiceResult<IPolling.IVote[]>
  > => {
    let response: IGlobalService.IServiceResult<IPolling.IVote[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}GetFavouriteYesNoPollings`,
    })

    return response
  },
}
