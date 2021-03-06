import { Cell } from "./cell";
import { Ghosts } from "./ghosts";
import { Pacman, pacman } from "./pacman";
import { blue } from "./blueGhost";
import { green } from "./greenGhost";
import { yellow } from "./yellowGhost";
import { red } from "./redGhost";
import { walls } from "./walls";
import { peas, score } from "./peas";
import { isInArray } from "./util";
import * as keypress from "keypress";
import * as chalk from "chalk";
import { Direction } from "./direction";
import { MapLoader } from "./mapLoader"


const FRAMES_PER_SECOND = 2;

export class Game {
  pacman: Pacman;
  walls: Cell[];
  peas: Cell[];
  ghosts: Ghosts[];
  score: number;
  heigth: number
  width: number


  constructor() {

    this.pacman = pacman;
    this.walls = walls;
    this.peas = [];
    this.score = 0;
    this.ghosts = [blue, green, yellow, red];
    this.heigth = 600
    this.width = 600


    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        if (!isInArray(i, j, walls)) {
          this.peas.push(new Cell(i, j));
        }
      }
    }
  }

  start(): any {
    this.play();
  }
  play() {

    keypress(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on("keypress", (str, key) => {
      if (key.ctrl && key.name === "c") {
        console.log(chalk.yellow("Bye!"));
        process.exit();
      }
    });

    let direction: Direction = 'Right';

    process.stdin.on("keypress", function (ch, key) {

      switch (key.name) {
        case "up":
          direction = "Up";

          break;
        case "right":
          direction = "Right";

          break;
        case "left":
          direction = "Left";

          break;
        case "down":
          direction = "Down";
          break;
        default:
          break;


      }
    });

    setInterval(() => this.draw(direction), 1000 / FRAMES_PER_SECOND);
  }

  draw(direction: Direction) {
    pacman.move(direction, this.score, this.peas);
    this.printField();
    console.log(chalk.red(`score: ${this.score}`));
    this.score = 0 + (100 - this.peas.length) * 10
    this.ghosts.forEach((it) => it.move())
    blue.kill(pacman)
    green.kill(pacman)
    red.kill(pacman)
    yellow.kill(pacman)


  }

  printField(): void {
    console.clear()
    for (let i = 0; i < 15; i++) {
      let row = "";
      for (let j = 0; j < 15; j++) {
        if (isInArray(i, j, this.walls)) {
          row += chalk.cyan.bold("◘");
        } else if (this.pacman.cell.x === i && this.pacman.cell.y === j) {
          row += "⚉";
        } else if (blue.cell.x === i && blue.cell.y === j) {
          row += chalk.cyan("⚉");
        }

        else if (yellow.cell.x === i && yellow.cell.y === j) {
          row += chalk.yellow("⚉");
        }
        else if (green.cell.x === i && green.cell.y === j) {
          row += chalk.green("⚉");
        }

        else if (red.cell.x === i && red.cell.y === j) {
          row += chalk.red("⚉");
        }
        else if (isInArray(i, j, this.peas)) {
          row += chalk.white.bold("◦");
        } else {
          row += " ";


        }
      }
      console.log(row);
    }
  }
}

