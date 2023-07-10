import React from "react"
import { HStack, Text } from "@chakra-ui/react"

const Log: React.FC<{ content: string; index: number }> = ({
  content,
  index,
}) => {
  const numberWithZero = (num: number) => {
    if (num < 10) return `00${num}`
    if (num < 100) return `0${num}`
    return num
  }

  return (
    <HStack w="100%" pl={5} pr={5} pt={3} pb={3} gap={4}>
      <Text color={"gray.500"}>{numberWithZero(index + 1)}</Text>
      <Text>{content}</Text>
    </HStack>
  )
}

export default Log
