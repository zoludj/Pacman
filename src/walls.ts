import { Cell } from "./cell";

export const walls: Cell[] = [
  new Cell(0, 0),
  new Cell(0, 14),
  new Cell(14, 0),
  new Cell(14, 14),

  new Cell(0, 1),
  new Cell(0, 2),
  new Cell(0, 3),
  new Cell(0, 4),
  new Cell(0, 5),
  new Cell(0, 6),
  new Cell(0, 7),
  new Cell(0, 8),
  new Cell(0, 9),
  new Cell(0, 10),
  new Cell(0, 11),
  new Cell(0, 12),
  new Cell(0, 13),
  new Cell(0, 14),

  new Cell(14, 0),
  new Cell(13, 0),
  new Cell(12, 0),
  new Cell(11, 0),
  new Cell(10, 0),
  new Cell(9, 0),
  new Cell(8, 0),
  new Cell(7, 0),
  new Cell(6, 0),
  new Cell(5, 0),
  new Cell(4, 0),
  new Cell(3, 0),
  new Cell(2, 0),
  new Cell(1, 0),

  new Cell(14, 14),
  new Cell(13, 14),
  new Cell(12, 14),
  new Cell(11, 14),
  new Cell(10, 14),
  new Cell(9, 14),
  new Cell(8, 14),
  new Cell(7, 14),
  new Cell(6, 14),
  new Cell(5, 14),
  new Cell(4, 14),
  new Cell(3, 14),
  new Cell(2, 14),
  new Cell(1, 14),

  new Cell(14, 1),
  new Cell(14, 2),
  new Cell(14, 3),
  new Cell(14, 4),
  new Cell(14, 5),
  new Cell(14, 6),
  new Cell(14, 7),
  new Cell(14, 8),
  new Cell(14, 9),
  new Cell(14, 10),
  new Cell(14, 11),
  new Cell(14, 12),
  new Cell(14, 13),

  //left square

  new Cell(2, 2),
  new Cell(3, 2),
  new Cell(5, 2),
  new Cell(7, 2),
  new Cell(2, 3),
  new Cell(3, 3),
  new Cell(5, 3),
  new Cell(7, 3),

  new Cell(7, 4),
  new Cell(2, 5),
  new Cell(2, 5),
  new Cell(3, 5),
  new Cell(5, 5),
  new Cell(6, 5),
  new Cell(7, 5),

  new Cell(7, 4),
  new Cell(7, 3),
  new Cell(7, 2),

  //left square down

  new Cell(9, 2),
  new Cell(10, 2),
  new Cell(11, 2),
  new Cell(12, 2),

  new Cell(9, 2),
  new Cell(9, 3),
  new Cell(9, 4),

  new Cell(9, 5),

  new Cell(12, 5),
  new Cell(12, 4),
  new Cell(12, 3),
  new Cell(12, 2),

  //midlle square

  new Cell(7, 2),
  new Cell(7, 3),
  new Cell(7, 4),

  new Cell(7, 7),
  new Cell(7, 8),
  new Cell(7, 9),

  new Cell(2, 7),
  new Cell(3, 7),
  new Cell(4, 7),
  new Cell(5, 7),

  new Cell(2, 9),
  new Cell(3, 9),
  new Cell(4, 9),
  new Cell(5, 9),

  new Cell(2, 8),
  new Cell(3, 8),
  new Cell(4, 8),
  new Cell(5, 8),

  //middle square down

  new Cell(9, 7),
  new Cell(9, 8),
  new Cell(9, 9),

  new Cell(9, 7),
  new Cell(10, 7),
  new Cell(11, 7),
  new Cell(12, 7),

  new Cell(9, 9),
  new Cell(10, 9),
  new Cell(11, 9),
  new Cell(12, 9),

  new Cell(9, 8),
  new Cell(10, 8),
  new Cell(11, 8),
  new Cell(12, 8),

  //right down square

  new Cell(12, 11),
  new Cell(12, 12),

  new Cell(11, 11),
  new Cell(11, 12),

  new Cell(9, 11),
  new Cell(9, 12),

  //rigth midle-top

  new Cell(7, 11),
  new Cell(7, 12),
  new Cell(6, 11),
  new Cell(6, 12),
  new Cell(5, 11),
  new Cell(5, 12),
  new Cell(3, 11),
  new Cell(3, 12),

  new Cell(2, 11),
  new Cell(2, 12),
];
