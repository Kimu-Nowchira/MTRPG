export interface Player {
  id: string
  name: string
  level: number
  exp: number
  money: number
  job: string
  species: string
  description: string
  status: PlayerStatus
}

export interface PlayerStatus {
  constitution: number
  strength: number
  dexterity: number
  intelligence: number
  wisdom: number
  charisma: number
}

export interface IGameLog {
  id?: string
  content: string
}

export interface ItemData {
  id: string
  name: string
}
