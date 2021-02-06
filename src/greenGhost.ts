import { Cell } from "./cell";
import { Ghosts } from "./ghosts";
export class greenGhost extends Ghosts {
    constructor(cell: Cell, color: string) {
        super(cell, color);
    }
}

export const green = new greenGhost(new Cell(10, 4), "green");