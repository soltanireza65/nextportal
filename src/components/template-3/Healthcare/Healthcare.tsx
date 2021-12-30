import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { INews, IServiceResult } from "interfaces"
import React from "react"
import Counter from "../Counter/Counter"

interface IProps {
  title: string
  news: IServiceResult<INews[]>
}
const Healthcare = ({ title, news }: IProps) => {
  const { data, message, status } = news

  if (data.length < 1 || status == 2) {
    return (
      <Box>
        <Heading as="h1" size="4xl" isTruncated>
          {message}
        </Heading>
      </Box>
    )
  }
  return (
    <Container width="90%" maxWidth="full" paddingTop="28">
      <SimpleGrid minChildWidth="200px" spacing={10}>
        {data &&
          data
            .slice(0, 4)
            .map((newsItem: INews, index: number) => (
              <Counter
                title={newsItem.titr.substring(0, 7)}
                start={0}
                end={4425}
                delay={0}
              />
            ))}
      </SimpleGrid>
      <Box textAlign="center" mt="40px" fontSize="1.3rem">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال.
      </Box>
    </Container>
  )
}

export default Healthcare
