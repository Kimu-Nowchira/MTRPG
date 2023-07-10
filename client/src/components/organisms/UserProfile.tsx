import StatusGroup from "../molecules/StatusGroup"
import React from "react"
import styled from "styled-components"
import ProgressBar from "../atoms/ProgressBar"
import { Player } from "../../types"
import { Card, CardBody, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import EditCharacterModal from "./EditCharacterModal"

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

const UserProfile: React.FC<{ profile: Player }> = ({ profile }) => {
  return (
    <Card h="230px">
      <CardBody gap="10px">
        <EditCharacterModal user={profile} />
        <VStack gap="20px">
          <HStack gap="15px" w="100%">
            <ProfileImage />
            <VStack align={"baseline"} w="100%" gap={3}>
              <VStack align={"baseline"} gap={0}>
                <Text>{profile.level}레벨 천사</Text>
                <Heading fontSize="3xl">{profile.name}</Heading>
              </VStack>
              <VStack w="100%" gap={1}>
                <ProgressBar min={3} max={10} />
                <ProgressBar min={7} max={10} color={"#0EA5E9"} />
              </VStack>
            </VStack>
          </HStack>
          <StatusGroup statusData={profile.status} />
        </VStack>
      </CardBody>
    </Card>
  )
}

export default UserProfile
