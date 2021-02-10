import { Cell } from "./cell";
import { walls } from "./walls"
import { isInArray } from "./util"
import { Pacman } from "./pacman"

export class Ghosts {
  cell: Cell;
  color: string;
  constructor(cell: Cell, color: string) {
    this.cell = cell;
    this.color = color;
  }


  stepUp() {
    if (isInArray(this.cell.x, this.cell.y + 1, walls)) {
      this.stepLeft()
    } else {
      this.cell.y = this.cell.y + 1;
    }
  }
  stepDown() {
    if (isInArray(this.cell.x, this.cell.y - 1, walls)) {
      this.stepRight();
    } else {
      this.cell.y = this.cell.y - 1;
    }
  }
  stepRight() {
    if (isInArray(this.cell.x + 1, this.cell.y, walls)) {
      this.stepUp();
    } else {
      this.cell.x = this.cell.x + 1;
    }
  }
  stepLeft() {
    if (isInArray(this.cell.x - 1, this.cell.y, walls)) {
      this.stepDown();
    } else {
      this.cell.x = this.cell.x - 1;
    }
  }
  move() {
    const direction = Math.floor(Math.random() * 4);
    switch (direction) {
      case 0: this.stepUp(); break;
      case 1: this.stepDown(); break;
      case 2: this.stepLeft(); break;
      case 3: this.stepRight(); break;
    }

  }
  kill(pac: Pacman) {
    if (this.cell.x === pac.cell.x && this.cell.y === pac.cell.y) {
      console.log("lose")
      process.exit?.(1);


    }

  }
}




