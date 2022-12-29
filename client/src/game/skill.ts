export const skills = require("../../game/skills.json") as Skill[]

export enum SkillType {
  Active,
  Passive,
}

export interface Skill {
  id: string
  name: string
  description: string
  skillType: SkillType
}