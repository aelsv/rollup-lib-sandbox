import React from 'react';
import styled from 'styled-components';

/* @Types */
import { TSpinnerProps } from './Spinner.types';

const SpinnerStyled = styled.div<TSpinnerProps>({
  width: '50px',
  height: '50px',
});

const Spinner = ({
  id,
  ...props
}: TSpinnerProps): JSX.Element => (
  <SpinnerStyled id={id} {...props}>😵‍💫</SpinnerStyled>
);

Spinner.displayName = 'Spinner';

export { Spinner };
