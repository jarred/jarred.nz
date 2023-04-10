export interface IProject {
  title: string;
  year: number;
  locked: boolean;
  collaborators: string[] | Collaborators[];
  colors: ColorItem[];
  themes: Theme[];
  icon: string;
  frames: Frame[];
}

export interface ICollaborators {
  [key: string]: string[]
}

export interface ITheme {
  slug: string;
  bg: string[];
  text: string[];
}

export interface IColorItem {
  [key: string]: string
}

export interface IMediaItem {
  src: string;
  bg: string;
  size: "1:1" | "1:2" | "2:1" | "4:3" | "3:4" | "6:9" | "9:6" | "16:9" | "9:16";
  type?: "image" | "video";
  thumb?: true;
  featured?: true;
}


export interface IFrame {
  crop: 'fit' | 'fill';
  focal: string; // could be 50.262/3463.3463 or  4% 85%
  min: number; // minimum number of columns wide it should render
  max: number;  // ^ *maximum
  w: number; // in pixels
  h: number; // in pixels
  inset: number | 'unit'; // number is number of columns
  theme: string;
  //
  alt?: string;
  featured?: boolean;
  image?: string;
  video?: string;
  svg?: string;
}

export interface ILayoutMatrix {
  matrix?: string;
  min_rows?: number;
  min_cols?: number;
  cells?: Array<Cell>;
}

export interface ICell {
  id: number;
  col_span: number;
  row_span: number;
  col_start?: number;
  row_start?: number;
}
