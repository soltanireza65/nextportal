import { Http } from "../Http/index";
const prefixFileManagerUrl = `${process.env.APP_FILE_MANAGER}/api/Manage`;

export const FileManagerApi = {
  getMediaFiles: async (
    data?: IFileManager.IFileParams
  ): Promise<IGlobalService.IServiceResult<IFileManager.IFile[]>> => {
    let response: IGlobalService.IServiceResult<IFileManager.IFile[]>;

    response = await Http.Request({
      methodType: "get",
      url: `${prefixFileManagerUrl}/GetMediaFiles`,
      params: data,
    });

    return response;
  },
  getMediaFileByMediaFileId: async ({
    id,
  }: IFileManager.IFileParams): Promise<
    IGlobalService.IServiceResult<IFileManager.IFile>
  > => {
    let response: IGlobalService.IServiceResult<IFileManager.IFile>;

    response = await Http.Request({
      methodType: "get",
      url: `${prefixFileManagerUrl}/GetMediaFileByMediaFileId/${id}`,
    });

    return response;
  },
  getMediaFileById: async ({
    id,
  }: IFileManager.IFileParams): Promise<
    IGlobalService.IServiceResult<IFileManager.IFile>
  > => {
    let response: IGlobalService.IServiceResult<IFileManager.IFile>;

    response = await Http.Request({
      methodType: "get",
      url: `${prefixFileManagerUrl}/GetMediaFileById/${id}`,
    });

    return response;
  },
};
