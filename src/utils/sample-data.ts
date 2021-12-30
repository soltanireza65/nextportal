import { IAd, ILink, INews, User } from "interfaces"

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
]

export const adMock: IAd = {
  id: 1,
  title: "sss",
  image: "/images/home_ad.jpg",
}

export const mockLinks: ILink[] = [
  {
    url: "2",
    title: "صفحه اصلی",
  },
  {
    url: "2",
    title: "سیاست و بین المللی",
  },
  {
    url: "2",
    title: "رازی پرس",
  },
]

export const mockKeywords: ILink[] = [
  {
    url: "2",
    title: "صفحه اصلی",
  },
  {
    url: "2",
    title: "سیاست و بین المللی",
  },
  {
    url: "2",
    title: "رازی پرس",
  },
]
