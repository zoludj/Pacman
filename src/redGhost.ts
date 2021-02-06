import { Cell } from "./cell";
import { Ghosts } from "./ghosts";

class redGhost extends Ghosts {
    constructor(cell: Cell, color: string) {
        super(cell, color);
    }

}
export const red = new redGhost(new Cell(11, 3), "red");