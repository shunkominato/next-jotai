import React, { FC } from 'react';
import { Button as MButton } from '@mantine/core';
// import { fontColor, fontSize } from '@/styles/default.styles';

interface Props {
  label: string;
  fontColor?: string;
  fontSize?: number;
}
export const FormTitle: FC<Props> = ({
  label,
  fontColor,
  fontSize = 'text-2xl',
}) => {
  return <h1 className={`${fontColor || ''} ${fontSize} mt-10`}>{label}</h1>;
};
