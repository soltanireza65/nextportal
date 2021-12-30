import { Box, Text } from "@chakra-ui/react"
import React from "react"
import CountUp from "react-countup"

interface Props {
  title: string
  start: number
  end: number
  delay: number
}

const AppCountUp = ({ title, start, end, delay }: Props) => {
  return (
    <Box textAlign="center">
      <Text fontSize="1.3rem">{title}</Text>
      <CountUp start={start} end={end} delay={delay}>
        {({ countUpRef }) => (
          <Box>
            <Text ref={countUpRef} color="green.500" fontSize="3rem"></Text>
          </Box>
        )}
      </CountUp>
    </Box>
  )
}

export default AppCountUp
