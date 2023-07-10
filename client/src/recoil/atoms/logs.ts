import { atom } from "recoil"
import { IGameLog } from "../../types"

const logsState = atom<IGameLog[]>({
  key: "logsState",
  default: [],
})

export default logsState
