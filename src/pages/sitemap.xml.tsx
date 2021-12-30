import { INews } from "interfaces"
import React from "react"

const BASE_URL = "http://localhost:3000"
// http://localhost:3000/news/5/title
const createSitemap = (news: INews[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${news
          .map(({ newsCode, seoTitr }) => {
            return `
                    <url>
                        <loc>${`${BASE_URL}/news/${newsCode}/${seoTitr}`}</loc>
                    </url>
                `
          })
          .join("")}
    </urlset>
    `

class Sitemap extends React.Component {
  static async getInitialProps({ res }: any) {
    const request = await fetch(
      "https://api.behsoud.com/news/api/News/GetPublishedNews"
    )
    const response = await request.json()
    const news = await response.data

    res.setHeader("Content-Type", "text/xml")
    res.write(createSitemap(news))
    res.end()
  }
}

export default Sitemap
