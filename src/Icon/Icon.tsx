import React from 'react';
import styled from 'styled-components';

/* @Types */
import { TIconSizes, TIconAppearances, TIconProps } from './Icon.types';

/* @UI–Configs */
import { colors } from '../styles/colors';
import { createTransition } from '../styles/createTransitions';

const DEFAULT_ICON_SIZE: TIconSizes = 'md';
const DEFAULT_ICON_APPEARANCE: TIconAppearances = 'black';

export const ICON_SIZES: {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
} = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xlg: '40px',
};

export const ICON_APPEARANCES: TIconAppearances[] = [
  'blue',
  'green',
  'red',
  'white',
  'orange',
  'violet',
  'gray',
  'gray_dark',
  'gray_soft',
  'black',
];

const IconStyled = styled.svg<{ size: TIconSizes; appearance: TIconAppearances }>(
  ({ size = DEFAULT_ICON_SIZE, appearance = DEFAULT_ICON_APPEARANCE }) => ({
    transition: createTransition({
      props: ['fill', 'transform'],
    }),

    width: ICON_SIZES[size],
    height: ICON_SIZES[size],
    ...(appearance === 'gray_dark' && { fill: colors.gray_dark.default }),
    ...(appearance === 'gray_soft' && { fill: colors.gray_soft.default }),
    ...(appearance !== 'gray_dark' && appearance !== 'gray_soft' && { fill: colors[appearance].default }),
  })
);

const Icon = ({
  className,
  spriteUrl,
  glyph,
  size = DEFAULT_ICON_SIZE,
  appearance = DEFAULT_ICON_APPEARANCE,
  style,
  ...props
}: TIconProps): JSX.Element => (
  <IconStyled size={size} appearance={appearance} style={style} className={className} {...props}>
    <use xlinkHref={`#${typeof glyph === 'string' ? glyph : glyph.id}`} />
  </IconStyled>
);

Icon.displayName = 'Icon';

export { Icon };
