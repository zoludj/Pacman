import { Cell } from "./cell";
import { Ghosts } from "./ghosts";
class yellowGhost extends Ghosts {
  constructor(cell: Cell, color: string) {
    super(cell, color);
  }


}
export const yellow = new yellowGhost(new Cell(10, 3), "yellow");