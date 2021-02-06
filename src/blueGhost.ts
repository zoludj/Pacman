import { Cell } from "./cell";
import { Ghosts } from "./ghosts";

export class BlueGhost extends Ghosts {
    constructor(cell: Cell, color: string) {
        super(cell, color);
    }
}

export const blue = new BlueGhost(new Cell(11, 4), "blue");


