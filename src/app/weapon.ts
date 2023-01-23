import { Slot } from "./slot"

export interface Weapon{
    id: number
    name: string
    type: string
    rank: string
    slots: Slot[]
}