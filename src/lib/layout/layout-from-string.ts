import type { LayoutMatrix, Cell } from "./types";

const DEBUG = false;

const countDupesInArray = (arr: string[], match: string): number => {
  let count = 0;
  arr.forEach((item) => {
    if (item === match) count++;
  });
  return count;
};

const colStart = (id: string, rows: any[]): number => {
  let match = 999999;
  rows.forEach((row: string[], y: number) => {
    row.forEach((cell: string, x: number) => {
      if (cell === id && x < match) {
        match = x;
      }
    });
  });
  return match + 1;
};

const rowStart = (id: string, rows: any[]): number => {
  let match = 999999;
  rows.forEach((row: string[], y: number) => {
    if (row.includes(id) && y < match) {
      match = y;
    }
  });
  return match + 1;
};

const colSpan = (id: string, rows: any[]): number => {
  let total = 0;
  rows.forEach((row: string[], y: number) => {
    let count = countDupesInArray(row, id);
    if (count > total) {
      total = count;
    }
  });
  return total;
};

const rowSpan = (id: string, rows: any[]): number => {
  let total = 0;
  rows.forEach((row: string[], y: number) => {
    if (row.includes(id)) {
      total++;
    }
  });
  return total;
};

const extractLayout = (matrix: string): Cell[] => {
  // find all the ids
  let ids = matrix
    .replace(/\t+/g, "")
    .replace(/\ /g, "")
    .replace(/(\r\n|\n|\r)/gm, "")
    .split("");
  ids = [...new Set(ids)];

  ids = ids.sort((a, b) => {
    return Number(a) - Number(b);
  });

  if (DEBUG) console.log("ids", ids);

  let rows: any[] = [];

  // split into lines
  let lines = matrix.split("\n");
  lines.forEach((line) => {
    // skip empty rows
    if (line === "") return;
    // remove tabs and spaces
    line = line.replace(/\t+/g, "").replace(/\ /g, "");
    let row: string[] = line.split("");
    rows.push(row);
  });

  let cells: Cell[] = [];

  ids.forEach((id) => {
    let col_start = colStart(id, rows);
    let row_start = rowStart(id, rows);
    let row_span = rowSpan(id, rows);
    let col_span = colSpan(id, rows);
    if (id !== "0") {
      let cell: Cell = {
        id: Number(id),
        row_start,
        row_span,
        col_start,
        col_span,
      };
      cells.push(cell);
    }
  });
  return cells;
};

export const layoutFromString = (matrix: string): LayoutMatrix => {
  if (DEBUG) console.log(`generateLayout(${matrix})`);
  let min_rows = 1;
  let min_cols = 1;

  let rows: any[] = [];
  let cells = [];

  // split into lines
  let lines = matrix.split("\n");
  lines.forEach((line) => {
    if (DEBUG) console.log("line", line);
    // skip empty rows
    if (line !== "") {
      // remove tabs and spaces
      line = line.replace(/\t+/g, "").replace(/\ /g, "").replace(/ /g, "");
      // if (DEBUG) console.log('line', line);
      let characters = line.split("");
      let row: any[] = [];
      characters.forEach((value: string) => {
        if (!isNaN(Number(value))) {
          row.push(value);
        }
      });
      rows.push(row);
    }
  });

  // check that all rows are same length
  if (DEBUG) console.log("rows", rows);
  let rowLength: number;
  rows.forEach((row, i) => {
    if (i === 0) {
      rowLength = row.length;
    } else if (row.length !== rowLength) {
      console.log(matrix);
      throw "Invalid matrix supplied";
    }
  });

  min_cols = rows[0].length;
  min_rows = rows.length;

  cells = extractLayout(matrix);

  return {
    matrix,
    cells,
    min_cols,
    min_rows,
  };
};
