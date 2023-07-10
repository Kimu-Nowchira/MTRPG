import React from "react"
import ReactDOM from "react-dom/client"
import GamePage from "./components/pages/GamePage"
import "./index.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { RecoilRoot } from "recoil"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <GamePage />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
)
