import React, { useState } from "react"
import {
  Box,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react"
import Log from "../molecules/Log"
import { BiMessageDetail } from "react-icons/bi"

const ChatLog: React.FC = () => {
  const [gameLogs, setGameLogs] = useState(["파링은 혼란에 빠졌다!"])

  return (
    <Box w={"xl"} h="100%">
      <Card w="100%" h="100%" py={5} px={2} gap={3}>
        <Stack flexDir={"column-reverse"} h="100%">
          {gameLogs.map((log, index) => (
            <Log content={log} index={index} />
          ))}
        </Stack>
        <Box pl={3} pr={3}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.500">
              <BiMessageDetail />
            </InputLeftElement>
            <Input type="tel" placeholder="채팅 로그를 입력해 주세요" />
          </InputGroup>
        </Box>
      </Card>
    </Box>
  )
}

export default ChatLog
