import { Skill } from "./skill"
import { Slot } from "./slot"

export interface Charm{
    id: number
    name: string
    skills: Skill[]
    slots: Slot[]
}