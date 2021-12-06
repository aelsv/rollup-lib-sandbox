import React from 'react';
import styled from 'styled-components';

/* @Types */
import { TButtonProps } from './Button.types';

const ButtonStyled = styled.button<TButtonProps>({
  minWidth: '40px',
  minHeight: '40px',
  padding: '0 16px',
});

const Button = ({
  color,
  children,
  ...props
}: TButtonProps): JSX.Element => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

Button.displayName = 'Button';

export { Button };
