import Layout from "components/template-1/shared/Layout"
import { GetServerSideProps } from "next"

const AboutPage = ({ newsList }: any) => {
  return (
    <Layout>
      {newsList &&
        newsList.map((item: any) => (
          <div className="row g-0 bg-light position-relative">
            <div className="col-md-6 mb-md-0 p-md-4">
              {item.mediaFiles &&
                item.mediaFiles.map((mediaItem: any) => (
                  <img
                    src={
                      mediaItem.filePaths[0] && mediaItem.filePaths[0].filePath
                    }
                    className="w-100"
                    alt={item.titr}
                  />
                ))}
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h5 className="mt-0">{item.titr}</h5>
              <p>{item.lead}</p>
              <a href="#" className="stretched-link">
                لینک صفحه جزئیات
              </a>
            </div>
          </div>
        ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  const res = await fetch(
    "https://api.behsoud.com/news/api/News/GetLocationNews?CategoryId=60292fbc9063c70001186630&LocationCode=Latest&Count=1"
  )
  const newsList = await res.json()

  return { props: { newsList: newsList.data } }
}

export default AboutPage
