
import { Game } from "../game";
import { isInArray } from "../util";
import { Direction } from "../Direction"
import { pacman } from "../pacman";
import { Cell } from "../cell"
import { score } from "../peas";


class CanvasGameAdapter {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private height: number = window.innerHeight;
  private width: number = window.innerWidth;


  constructor(private game: Game) {
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.canvas.width = 900
    this.canvas.height = 900
    this.ctx = this.canvas.getContext("2d");
  }
  public setup(): void {

    this.gameLoop();
  }
  public gameLoop(): void {
    let direction;

    window.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 37: // Left
          console.log("left")
          pacman.pacmanMoveLeft()
          break;

        case 38: // Up
          pacman.pacmanMoveUp()
          break;

        case 39: // Right
          pacman.pacmanMoveRight()
          break;

        case 40: // Down
          pacman.pacmanMoveDown()
          break;
      }
    }, false);



    this.game.process(direction, this.drawField())
    requestAnimationFrame(this.gameLoop.bind(this));

  }

  drawField() {

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.font = "48px Roboto";


    for (let i = 0; i < this.width; i++)
      for (let j = 0; j < this.height; j++) {
        if (isInArray(j, i, this.game.walls)) {
          this.ctx.fillStyle = "orange"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)
        }


        else if (this.game.pacman.cell.x === j && this.game.pacman.cell.y === i) {
          this.ctx.fillStyle = "black"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)
        }

        else if (this.game.ghosts[0].cell.x === j && this.game.ghosts[0].cell.y === i) {
          this.ctx.fillStyle = "blue"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)
        } else if (this.game.ghosts[2].cell.x === j && this.game.ghosts[2].cell.y === i) {
          this.ctx.fillStyle = "yellow"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)
        }
        else if (this.game.ghosts[1].cell.x === j && this.game.ghosts[1].cell.y === i) {
          this.ctx.fillStyle = "green"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)
        }

        else if (this.game.ghosts[3].cell.x === j && this.game.ghosts[3].cell.y === i) {
          this.ctx.fillStyle = "red"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)
        }
        else if (isInArray(j, i, this.game.peas)) {
          this.ctx.fillStyle = "pink"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)
        } else {
          this.ctx.fillStyle = "white"
          this.ctx.fillRect(20 * i, 20 * j, 20, 20)

        }
      }
    // this.ctx.fillText(this.game.score.toString(), 10, 50);

  }
}
window.onload = () => {
  const adapter = new CanvasGameAdapter(new Game());
  adapter.setup();
};
