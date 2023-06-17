import StatusGroup from "../molecules/StatusGroup"
import React from "react"
import styled from "styled-components"
import ProgressBar from "../atoms/ProgressBar"
import { User } from "../../types"
import { Card, CardBody, HStack, IconButton, VStack } from "@chakra-ui/react"
import { IconSettings } from "@tabler/icons-react"
import EditCharacterModal from "./EditCharacterModal"

const ProfilePaper = styled.div`
  width: 100%;
  height: 245px;
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: #fff;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  gap: 15px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  width: 100%;
`

const ProfileImage = styled.div`
  width: 130px;
  height: 86px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

const Labal3 = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #737373;
  margin: 0;
`

const Label4 = styled.div`
  margin: 0;
  font-weight: 700;
  font-size: 32px;
  /* tailwind/neutral/700 */
  color: #404040;
`

const UserProfile: React.FC<{ profile: User }> = ({ profile }) => {
  return (
    <Card h="230px">
      <CardBody gap="10px">
        <EditCharacterModal user={profile} />
        <VStack gap="20px">
          <HStack gap="15px" w="100%">
            <ProfileImage />
            <Column>
              <Labal3>{profile.level}레벨 천사</Labal3>
              <Label4>{profile.name}</Label4>
              <ProgressBar min={3} max={10} />
              <ProgressBar min={7} max={10} color={"#0EA5E9"} />
            </Column>
          </HStack>
          <StatusGroup statusData={profile.status} />
        </VStack>
      </CardBody>
    </Card>
  )
}

export default UserProfile
