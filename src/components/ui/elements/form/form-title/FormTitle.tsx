import React, { FC } from 'react';
import { Title } from '@mantine/core';

type AlignType =
  | 'left'
  | 'right'
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'center'
  | 'end'
  | 'start'
  | 'justify'
  | 'match-parent';

type OrderType = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  label: string;
  fontColor?: string;
  fontSize?: number;
  align?: AlignType;
  inline?: boolean;
  order?: OrderType;
};

export const FormTitle: FC<Props> = ({
  label,
  fontColor,
  fontSize = '24px',
  align = 'center',
  inline = false,
  order = 1,
}) => {
  return (
    <Title
      order={order}
      align={align}
      inline={inline}
      size={fontSize}
      color={fontColor}
    >
      {label}
    </Title>
  );
};
