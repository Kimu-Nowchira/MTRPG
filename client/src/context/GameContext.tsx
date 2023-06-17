import React, { createContext } from "react"
import { ItemData, User } from "../types"

interface GameContext {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  itemData: ItemData[]
}

export default createContext<GameContext>({
  users: [],
  setUsers: () => {},
  itemData: [],
})
