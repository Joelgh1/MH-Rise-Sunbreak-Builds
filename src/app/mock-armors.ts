import { Armor } from "./armor";

export const ARMORS: Armor[] = [
    {id: 1, name: "Almudron Helm", type: "HEAD", rank: "LR", 
    slots: [], 
    skills: [{name: "Rapid Morph", value: 1, maxValue: 3}], 
    resistances: {fire: -4, water: 3, ice: -2, thunder: 3, draco: -2}},
    {id: 2, name: "Almudron Mail", type: "CHEST", rank: "LR", 
    slots: [], 
    skills: [{name: "Razor Sharp", value: 1, maxValue: 3}], 
    resistances: {fire: -4, water: 3, ice: -2, thunder: 3, draco: -2}},
    {id: 4, name: "Alloy Helm S", type: "HEAD", rank: "HR", 
    slots: [{size: 1, used: false}],
    skills: [{name: "Water Attack", value: 1, maxValue: 3}, 
    {name: "Protective Polish", value: 1, maxValue: 3}], 
    resistances: {fire: -1, water: 0, ice: -1, thunder: -1, draco: 0}},
    {id: 5, name: "Chainmail Pants X", type: "LEGS", rank: "MR", 
    slots: [{size: 1, used: false}, {size: 1, used: false}, {size: 1, used: false}], 
    skills: [{name: "Stamina Surge", value: 1, maxValue: 3}, {name: "Guard", value: 2, maxValue: 3}], 
    resistances: {fire: 0, water: 0, ice: 0, thunder: 1, draco: 0}}
]