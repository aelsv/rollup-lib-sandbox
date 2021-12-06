type TColors = {
  blue: TDefaultColorScheme;
  green: TDefaultColorScheme;
  red: TDefaultColorScheme;
  violet: TDefaultColorScheme;
  orange: TDefaultColorScheme;
  gray: {
    default: string;
    background: string;
  };
  gray_soft: TReducedColorScheme;
  gray_dark: TReducedColorScheme;
  gray_light: TReducedColorScheme;
  white: TReducedColorScheme;
  black: TReducedColorScheme;
};

type TDefaultColorScheme = {
  default: string;
  hover: string;
  active: string;
  background: string;
};

type TReducedColorScheme = {
  default: string;
};

export const colors: TColors = Object.freeze({
  blue: {
    default: '#0b71d9',
    hover: '#0a64bf',
    active: '#0959ab',
    background: '#eaf3fe',
  },
  green: {
    default: '#57991f',
    hover: '#488c0e',
    active: '#3e780c',
    background: '#eaf7df',
  },
  red: {
    default: '#c83833',
    hover: '#ba211c',
    active: '#a61d19',
    background: '#ffeded',
  },
  violet: {
    default: '#633ac2',
    hover: '#5632a8',
    active: '#492b8f',
    background: '#efebfa',
  },
  orange: {
    default: '#e07a14',
    hover: '#d47313',
    active: '#c76c12',
    background: '#fff4eb',
  },
  gray: {
    default: '#7f8b99',
    background: '#eff2f6',
  },
  gray_light: {
    default: '#d0d6dd',
  },
  gray_soft: {
    default: '#b8bfc6',
  },
  gray_dark: {
    default: '#393f47',
  },
  white: {
    default: '#ffffff',
  },
  black: {
    default: '#0b0d0e',
  },
});
