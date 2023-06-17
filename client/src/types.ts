export interface User {
  id: string
  name: string
  level: number
  exp: number
  money: number
  job: string
  species: string
  description: string
  status: UserStatus
}

export interface UserStatus {
  constitution: number
  strength: number
  dexterity: number
  intelligence: number
  wisdom: number
  charisma: number
}

export interface ItemData {
  id: string
  name: string
}
