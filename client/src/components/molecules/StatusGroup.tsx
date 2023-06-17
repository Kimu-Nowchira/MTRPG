import Status, { StatusType } from "../atoms/Status"
import React from "react"
import { UserStatus } from "../../types"
import { HStack, VStack } from "@chakra-ui/react"

const StatusGroup: React.FC<{ statusData: UserStatus }> = ({ statusData }) => {
  return (
    <HStack gap="0">
      <VStack>
        <Status
          statusType={StatusType.Constitution}
          value={statusData.constitution}
        />
        <Status statusType={StatusType.Strength} value={statusData.strength} />
      </VStack>
      <VStack>
        <Status
          statusType={StatusType.Dexterity}
          value={statusData.dexterity}
        />
        <Status
          statusType={StatusType.Intelligence}
          value={statusData.intelligence}
        />
      </VStack>
      <VStack>
        <Status statusType={StatusType.Wisdom} value={statusData.wisdom} />
        <Status statusType={StatusType.Charisma} value={statusData.charisma} />
      </VStack>
    </HStack>
  )
}

export default StatusGroup
