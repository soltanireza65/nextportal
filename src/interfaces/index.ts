// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';
//<template types>
export type User = {
  id: number
  name: string
}
export interface IAppContext {
  categories: []
  category: []
  news: []
  newItem: []
  error: any
  loading: boolean
}

export type IGetPublishedNews = {
  FromStartPublishDateTime?: string
  TillStartPublishDateTime?: string
  DefaultCategoriesID?: string[]
  LocationCode?: string
  Titr?: string
  Tags?: string[]
}
export type IGetCategories = {
  flated?: boolean
  moduleType?: number
  count?: number
  getMainPageCategory?: boolean
}

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}
//</template types>
export interface IServiceResult<T> {
  data: T
  message: string
  status: IServiceResultStatus
}

export enum IServiceResultStatus {
  Success = 1,
  Error = 2,
}

export interface INews {
  title: any
  id: string
  newsCode: number
  shortId: number | null
  rotitr: string
  titr: string
  content?: string
  seoTitr: string
  lead: string
  mediaFiles: IMediaFile[]
  img?: string
  writerFullName: string
  createdDateTime: string
  startPublishDateTime: string
  lastModifiedDateTime: string
  persianCreatedDateTime: string
  persianLastModifiedDateTime: string
  persianStartPublishDateTime: string
  lastModifiedUserFullName: string
  authorUserFullName: string
  isLockedForPublicView: boolean
  likeCount: number
  disLikeCount: number
  shareCount: number
  breadCrumb: []
  visitedCount: number
  status: number
  defaultCategoryID: string
  defaultCategoryTitle: string
  tags: string[]
  locations?: ILocation[]
}

export interface ILocation {
  categoryId: string
  categoryTitle: string
  locationCode: string
  locationTitle: string
  MediaFiles: IMediaFile[]
  persianPublishDateTime: string
}

export interface IMediaFilePath {
  filePath: string
  extention: string
  tag: string
}

export interface INewsAttachment {
  mediaFileId: string
  mediaFileType: number
  Attachments: INewsAttachment[]
  order: number
  filePaths: IMediaFilePath[]
  caption: string
  duration: number
  fileSize: number
}

export interface IMediaFile {
  mediaFileId: string
  mediaFileType: number
  attachment?: INewsAttachment
  order: number
  filePaths?: IMediaFilePath[]
  filePath?: string
  caption: string
  duration: number
  fileSize: number
}

export interface IAd {
  id: number
  title: string
  image: string
}

export type ILink = {
  url: string
  title: string
}

export interface ICaptcha {
  captchaImgUrl: string
  captchaTextValue: string
  captchaTokenValue: string
}

export interface IComment {
  id: string
  contentId: string
  moduleType: number
  content: string
  fullName: string
  email: string
  showEmail: boolean
  captchaText: string
  captchaToken: string
  captchaUserInputText: string
  parentId: string
  createdDateTime: string
  persianCreatedDateTime: string
  agreeCount: number
  disAgreeCount: number
  childs: IComment[]
  isAdminReply: boolean
}
export interface ICategory {
  id: string
  title: string
  titr: string
  englishTitle: string
  description: string
  mediaFiles?: IMediaFile[]
  parentId: string
  locations?: ILocation[]
  childs?: any
  additionalData: string
  isMainPageCategory: boolean
  moduleType: number
  categoryCode: number
  status: string
}

export interface IPolling {
  id: string
  title: string
  status: string
  contentId: string
  moduleType: number
  persianCreatedDateTime: string
  persianLastModifiedDateTime: string
  options: IPollingOption[]
}
export interface IPollingOption {
  id: string
  title: string
  votes: IVote[]
  voteCount: number
}
export interface IVote {
  userId: string
  userIp: string
  createdDateTime: string
}

export enum LocationModuleType {
  News = 1,
  Advertise = 2,
  Menu = 3,
  Bourse = 4,
  Shakhes = 5,
  Namad = 6,
  Shopping = 7,
  Newspaper = 8,
  Polling = 9,
  QA = 10,
  Page = 11,
  Tag = 12,
  Report = 13,
  Link = 14,
  Newsletter = 15,
  Category = 16,
  ShakhesKol = 17,
  Subscribe = 18,
}

// export interface ICategory {
//   id?: string
//   categoryCode?: number
//   title?: string
//   englishTitle?: string
//   description?: string
//   Flated?: boolean
//   // mediaFiles?: IFileManager.IFileData[]
//   parentId?: string
//   // locations?: ICategory[]
//   categoryId?: string
//   count?: number
//   page?: number
//   totalPage?: number
//   // childs?: ICategory[]
//   moduleType?: number
//   getMainPageCategory?: boolean
//   isMainPageCategory?: boolean
//   additionalData?: string
// }
