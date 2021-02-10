import { Cell } from "./cell";
import { Ghosts } from "./ghosts";

// class RedGhost extends Ghosts {
//     constructor(cell: Cell, color: string) {
//         super(cell, color);
//     }

// }
export const red = new Ghosts(new Cell(11, 3), "red");