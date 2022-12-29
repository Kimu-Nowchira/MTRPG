export const items = require("../../game/items.json") as Item[]

export enum ItemType {
  Other,
  Weapon,
  Armor,
  Food // 식량 (등 먹을 수 있는 거면 전부)
}

export interface Item {
  id: string
  name: string
  description: string
  itemType: ItemType
  cost: number
}