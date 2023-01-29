export interface Project {
  title: string;
  year: number;
  locked: boolean;
  collaborators: string[] | Collaborators[];
  colors: ColorItem[];
  themes: Theme[];
  icon: string;
  frames: Frame[];
}

export interface Collaborators {
  [key: string]: string[]
}

export interface Theme {
  slug: string;
  bg: string[];
  text: string[];
}

export interface ColorItem {
  [key: string]: string
}

export interface MediaItem {
  src: string;
  bg: string;
  size: "1:1" | "1:2" | "2:1" | "4:3" | "3:4" | "6:9" | "9:6" | "16:9" | "9:16";
  type?: "image" | "video";
  thumb?: true;
  featured?: true;
}


export interface Frame {
  crop: 'fit' | 'fill';
  focal: string; // could be 50.262/3463.3463 or  4% 85%
  inset: number;
  max: number;
  size: string; // can be 16x9 1:1 3/4
  theme: string;
  //
  alt?: string;
  featured?: boolean;
  image?: string;
  video?: string;
  svg?: string;
}