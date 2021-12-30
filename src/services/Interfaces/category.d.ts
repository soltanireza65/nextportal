namespace ICategory {
  interface ICategoryData {
    id?: string;
    categoryCode?: number;
    title?: string;
    englishTitle?: string;
    description?: string;
    Flated?: boolean;
    mediaFiles?: IFileManager.IFileData[];
    parentId?: string;
    locations?: IGlobalData.ILocation[];
    categoryId?: string;
    count?: number;
    page?: number;
    totalPage?: number;
    childs?: ICategoryData[];
    moduleType?: number;
    getMainPageCategory?: boolean;
    isMainPageCategory?: boolean;
    additionalData?: string;
  }
}
