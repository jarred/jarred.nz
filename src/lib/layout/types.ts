export interface LayoutMatrix {
  matrix?: string;
  min_rows?: number;
  min_cols?: number;
  cells?: Array<Cell>;
}

export interface Cell {
  id: number;
  col_span: number;
  row_span: number;
  col_start?: number;
  row_start?: number;
}
