import { peas } from "./peas";
import { Cell } from "./cell";
import { Direction } from "./direction";
import { isInArray } from "./util";
import { walls } from "./walls";
export class Pacman {
  cell: Cell;

  constructor(cell: Cell) {
    this.cell = cell;
  }

  pacmanMoveLeft() {
    this.cell.y = isInArray(this.cell.x, this.cell.y - 1, walls)
      ? this.cell.y
      : this.cell.y - 1;
  }
  pacmanMoveDown() {
    this.cell.x = isInArray(this.cell.x + 1, this.cell.y, walls)
      ? this.cell.x
      : this.cell.x + 1;
  }
  pacmanMoveRight() {
    this.cell.y = isInArray(this.cell.x, this.cell.y + 1, walls)
    ? this.cell.y
    : this.cell.y + 1;

  }

  pacmanMoveUp(){
     this.cell.x = isInArray(this.cell.x - 1, this.cell.y, walls) ? this.cell.x : this.cell.x - 1;
  }

  move(direction: Direction, score: number, peas: Cell[]) {

    switch (direction) {
      case "Up":
        this.cell.x = isInArray(this.cell.x - 1, this.cell.y, walls) ? this.cell.x : this.cell.x - 1;
        break;
      case "Right":
        this.cell.y = isInArray(this.cell.x, this.cell.y + 1, walls)
          ? this.cell.y
          : this.cell.y + 1;
        break;
      case "Left":
        this.cell.y = isInArray(this.cell.x, this.cell.y - 1, walls)
          ? this.cell.y
          : this.cell.y - 1;
        break;
      case "Down":
        this.cell.x = isInArray(this.cell.x + 1, this.cell.y, walls)
          ? this.cell.x
          : this.cell.x + 1;

        break;
      default:
        break;


    }

    this.eat(peas, score)
  }
  eat(peas: Cell[], score: number): void {
    let founded: Cell | undefined = peas.find(
      (c) => c.x === pacman.cell.x && c.y === pacman.cell.y
    );
    if (founded !== undefined) {
      let index = peas.indexOf(founded);
      peas.splice(index, 1);
      score++
    }

  }

}
export const pacman: Pacman = new Pacman(new Cell(1, 1));


