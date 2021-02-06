import { blue } from "../blueGhost";
import { Game } from "../game";
import { green } from "../greenGhost";
import { red } from "../redGhost";
import { isInArray } from "../util";
import { yellow } from "../yellowGhost";

class CanvasGameAdapter {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private height: number = window.innerHeight;
  private width: number = window.innerWidth;


  constructor(private game: Game) {
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.canvas.width = 600
    this.canvas.height = 600
    this.ctx = this.canvas.getContext("2d");

  }

  public setup(): void {
    this.gameLoop();
  }

  public gameLoop(): void {
    requestAnimationFrame(this.gameLoop.bind(this));

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.font = "48px Roboto";

    for (var j = 0; j < this.game.heigth; j++)
      for (var i = 0; i < this.game.width; i++) {
        if (this.game.walls[j][i]) {
          this.ctx.fillStyle = "orange"
          this.ctx.fillRect(20, 20, 20, 20)
        } else if (this.game.pacman.cell.x === i && this.game.pacman.cell.y === j) {
          this.ctx.fillStyle = "magenta"
          this.ctx.fillRect(20, 20, 20, 20)
        } else if (blue.cell.x === i && blue.cell.y === j) {
          this.ctx.fillStyle = "blue"
          this.ctx.fillRect(20, 20, 20, 20)
        } else if (yellow.cell.x === i && yellow.cell.y === j) {
          this.ctx.fillStyle = "yellow"
          this.ctx.fillRect(20, 20, 20, 20)
        }
        else if (green.cell.x === i && green.cell.y === j) {
          this.ctx.fillStyle = "green"
          this.ctx.fillRect(20, 20, 20, 20)
        }

        else if (red.cell.x === i && red.cell.y === j) {
          this.ctx.fillStyle = "red"
          this.ctx.fillRect(20, 20, 20, 20)
        }
        else if (isInArray(i, j, this.game.peas)) {
          this.ctx.fillStyle = "pink"
          this.ctx.fillRect(20, 20, 20, 20)
        } else {
          this.ctx.fillStyle = "white"
          this.ctx.fillRect(20, 20, 20, 20)

        }
      }

  }
}
window.onload = () => {
  const adapter = new CanvasGameAdapter(new Game());
  adapter.setup();
};
