import { atom } from "recoil"
import { Player } from "../../types"

const playersState = atom<Player[]>({
  key: "playersState",
  default: [],
})

export default playersState
