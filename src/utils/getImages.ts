import { IMediaFile, IMediaFilePath } from "interfaces"

export const getImages = (mediaFiles: []) => {
  let images: string[] = []

  mediaFiles.forEach((mediaFile: IMediaFile) => {
    mediaFile.filePaths.forEach((filePath) => {
      images.push(filePath.filePath)
    })
  })
  return images
}

export const getMainImage = (mediaFiles: IMediaFile[]) => {
  let images: string[] = []
  mediaFiles.forEach((mediaFile: IMediaFile) => {
    if (mediaFile.mediaFileType == 1) {
      mediaFile.filePaths?.forEach((filePath: IMediaFilePath) => {
        images.push(filePath.filePath)
      })
    }
  })
  return images
}
