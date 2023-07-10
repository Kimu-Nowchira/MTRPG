import React, { useState } from "react"
import Status, { StatusType } from "../atoms/Status"
import ProgressBar from "../atoms/ProgressBar"
import UserProfile from "../organisms/UserProfile"
import AddCharacterModal from "../organisms/AddCharacterModal"
import { ItemData } from "../../types"
import { Box, Card, CardBody, HStack, Stack, VStack } from "@chakra-ui/react"
import Header from "../organisms/Header"
import ChatLog from "../organisms/ChatLog"
import { RecoilRoot, useRecoilState } from "recoil"
import playersState from "../../recoil/atoms/players"

const GamePage: React.FC = () => {
  const [players, setPlayers] = useRecoilState(playersState)
  const [itemData, setItemData] = useState<ItemData[]>([])

  return (
    <>
      <VStack w="100vw" h="100vh">
        <Header />
        <HStack h="100%" w="100vw" p={5}>
          <Stack flexDir={"column-reverse"} h="100%">
            <AddCharacterModal />
            {players.map((user) => (
              <UserProfile profile={user} />
            ))}
          </Stack>
          <Box w="100%">
            <Card h="100%">
              <CardBody>
                {JSON.stringify(players)}
                <Status statusType={StatusType.Strength} value={2} />
                <Status statusType={StatusType.Strength} value={2} />
                <Status statusType={StatusType.Strength} value={2} />
                <Status statusType={StatusType.Strength} value={2} />
                <ProgressBar min={18} max={20} />
              </CardBody>
            </Card>
          </Box>
          <ChatLog />
        </HStack>
      </VStack>
    </>
  )
}

export default GamePage
