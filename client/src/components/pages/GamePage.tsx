import React, { useState } from "react"
import Status, { StatusType } from "../atoms/Status"
import ProgressBar from "../atoms/ProgressBar"
import styled from "styled-components"
import UserProfile from "../organisms/UserProfile"
import GameContext from "../../context/GameContext"
import { sampleProfile } from "../../test"
import AddCharacterModal from "../organisms/AddCharacterModal"
import { ItemData, User } from "../../types"
import { Card, CardBody } from "@chakra-ui/react"

const GamePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([sampleProfile])
  const [itemData, setItemData] = useState<ItemData[]>([])

  return (
    <GameContext.Provider value={{ users, setUsers, itemData }}>
      <Body>
        <LeftPanel>
          <AddCharacterModal />
          {users.map((user) => (
            <UserProfile profile={user} />
          ))}
        </LeftPanel>
        <CenterPanel>
          <Card h="100%">
            <CardBody>
              {JSON.stringify(users)}
              <Status statusType={StatusType.Strength} value={2} />
              <Status statusType={StatusType.Strength} value={2} />
              <Status statusType={StatusType.Strength} value={2} />
              <Status statusType={StatusType.Strength} value={2} />
              <ProgressBar min={18} max={20} />
            </CardBody>
          </Card>
        </CenterPanel>
      </Body>
    </GameContext.Provider>
  )
}

const Paper = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  height: 500px;
  padding: 20px;
  gap: 10px;
`

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;
  padding-right: 10px;
  gap: 20px;
  width: 500px;
`

const CenterPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 10px;
  padding-left: 10px;
  gap: 20px;
  width: 100%;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 0;

  background-color: var(--color-stone-200);
`

export default GamePage
