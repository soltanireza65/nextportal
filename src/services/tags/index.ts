import { Http } from "../Http/index"
import { ITags } from "../Interfaces/tags"
const prefixUrl = `${process.env.NEXT_PUBLIC_APP_URL}/tag/api/Tag`
export const TagsApi = {
  getTags: async (
    data?: ITags.ITagsParams
  ): Promise<IGlobalService.IServiceResult<ITags.ITagsDTO[]>> => {
    let response: IGlobalService.IServiceResult<ITags.ITagsDTO[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/GetTags`,
      params: data,
    })

    return response
  },
  manageTags: async (
    data?: ITags.ITagsParams
  ): Promise<IGlobalService.IServiceResult<ITags.ITagsDTO[]>> => {
    let response: IGlobalService.IServiceResult<ITags.ITagsDTO[]>

    response = await Http.Request({
      methodType: "get",
      url: `${prefixUrl}/ManageTags`,
      params: data,
    })

    return response
  },
  getTagByTitle: async ({
    title,
  }: ITags.ITagsParams): Promise<
    IGlobalService.IServiceResult<ITags.ITagsDTO[]>
  > => {
    let response: IGlobalService.IServiceResult<ITags.ITagsDTO[]>
    response = await Http.Request({
      methodType: "GET",
      url: `${prefixUrl}/GetTagByTitle/${title}`,
    })

    return response
  },
}
