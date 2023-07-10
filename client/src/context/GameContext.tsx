import React, { createContext } from "react"
import { ItemData, Player } from "../types"

interface GameContext {
  users: Player[]
  setUsers: React.Dispatch<React.SetStateAction<Player[]>>
  itemData: ItemData[]
}

export default createContext<GameContext>({
  users: [],
  setUsers: () => {},
  itemData: [],
})
