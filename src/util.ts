import { Cell } from "./cell";

export const isInArray = (x: number, y: number, array: Cell[]): boolean => {
  return array.filter((it) => it.x === x && it.y === y).length > 0;
};