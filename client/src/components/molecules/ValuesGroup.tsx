import React from "react"
import { Button, HStack } from "@chakra-ui/react"

const ValuesGroup: React.FC = () => {
  return (
    <HStack>
      <Button>선</Button>
      <Button>질서</Button>
      <Button>중립</Button>
      <Button>혼돈</Button>
      <Button>악</Button>
    </HStack>
  )
}

export default ValuesGroup
