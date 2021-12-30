namespace NewsInterface {
  enum MediaType {
    MainPhoto = 1,
    PhotoGalley = 2,
    MainVideo = 3,
    VideoGallery = 4,
    MainAudio = 5,
    AudioGallery = 6,
    Document = 7,
    WriterPhoto = 8,
  }
  interface IBreadCrumb {
    id: string;
    title: string;
    englishTitle: string;
    categoryCode?: number;
    parentId: string;
  }
  interface IFilePaths {
    filePath: string;
    extention: string;
    tag: string;
  }
  interface MedaiFiles {
    mediaId?: string;
    mediaCropParam?: string;
    mediaFileType?: number;
    filePaths?: IFilePaths[];
    attachments?: MedaiFiles[];
    order?: number;
  }
  interface Location {
    categoryId: string;
    locationCode: string;
    locationTitle: string;
    categoryTitle: string;
    mediaFiles: MedaiFiles;
    publishDateTimeTicks: number;
  }
  interface BodyNews {
    id?: string;
    CategoryId?: string;
    LocationCode?: string;
    NewsId?: string;
    Status?: number;
    mediaFiles?: MedaiFiles[];
    Titr?: string;
    DefaultCategoriesID?: string;
    Tags?: string[];
    ToggleLike?: boolean;
    AuthorUserID?: string;
    FromStartPublishDateTime?: string;
    TillStartPublishDateTime?: string;
    OrderByFieldName?: string;
    priority?: number;
    newsCode?: number;
    OrderByDescending?: boolean;
    IncludeLockedForPublicView?: boolean;
    Count?: number;
    Page?: number;
    TotalPage?: number;
  }
  interface NewsDTO {
    id?: string;
    shortId?: string;
    rotitr?: string;
    newsCode?: string;
    newsId?: string;
    seoTitr?: string;
    startPublishDateTimeString?: string;
    titr?: string;
    lead?: string;
    content?: string;
    mediaFiles?: IFileManager.IFileData[];
    createdDateTime?: string;
    lastModifiedDateTime?: string;
    startPublishDateTime?: string;
    lastModifiedUserID?: string;
    authorUserID?: string;
    status?: number;
    writerFullName?: string;
    source?: string;
    defaultCategoryID?: string;
    defaultCategoryTitle?: string;
    shortContent?: string;
    tags?: string[];
    linkUrl?: string;
    persianCreatedDateTime?: string;
    persianLastModifiedDateTime?: string;
    persianStartPublishDateTime?: string;
    lastModifiedUserFullName?: string;
    authorUserFullName?: string;
    likeCount?: number;
    disLikeCount?: number;
    shareCount?: number;
    breadCrumb?: IBreadCrumb[];
    visitedCount?: number;
    isLockedForPublicView?: boolean;
    locations?: Location[];
  }
}
