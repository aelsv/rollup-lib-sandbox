import { CSSProperties, HTMLAttributes } from "react";

export type TIconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
export type TIconAppearances =
  | 'blue'
  | 'green'
  | 'red'
  | 'white'
  | 'orange'
  | 'violet'
  | 'gray'
  | 'gray_dark'
  | 'gray_soft'
  | 'black';

export type TIconProps = HTMLAttributes<SVGSVGElement> & {
  glyph: string | { id: string };
  size?: TIconSizes;
  appearance?: TIconAppearances;
  style?: CSSProperties;
  className?: string;
  spriteUrl?: string;
};
