import { Skill } from "./skill";
import { Slot } from "./slot";
import { Resistances } from "./resistances";

export interface Armor{
    id: number
    name: string
    type: string
    rank: string
    slots: Slot[]
    skills: Skill[]
    resistances: Resistances
}