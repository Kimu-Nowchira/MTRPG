import React from "react"
import { Box, Heading, HStack, Spacer } from "@chakra-ui/react"
import ToggleColorModeButton from "../atoms/ToggleColorModeButton"

const Header: React.FC = () => {
  return (
    <HStack h="70px" w="100%" pl={10} pr={10}>
      <Heading>μTRPG</Heading>
      <Spacer />
      <ToggleColorModeButton />
    </HStack>
  )
}

export default Header
