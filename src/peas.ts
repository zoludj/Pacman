import { Cell } from "./cell";
import { walls } from "./walls";
import { isInArray } from "./util";
import { Pacman } from "./pacman";

export const peas = (walls: Cell[]): Cell[] => {
  const peas: Cell[] = [];
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (!isInArray(i, j, walls)) {
        peas.push(new Cell(i, j));
      }
    }
  }
  return peas;
};
export let score = 0;
const numberOfPeas = (pacman: Pacman, peas: Cell[], score: number): void => {
  let founded: Cell | undefined = peas.find(
    (c) => c.x === pacman.cell.x && c.y === pacman.cell.y
  );
  if (founded !== undefined) {
    let index = peas.indexOf(founded);
    peas.splice(index, 1);
    score++;
  }
};
