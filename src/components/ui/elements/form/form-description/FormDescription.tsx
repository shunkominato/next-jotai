import React, { FC, ReactNode } from 'react';

interface Props {
  fontColor?: string;
  fontSize?: number;
  children: ReactNode;
}
export const FormDescription: FC<Props> = ({
  fontColor,
  fontSize,
  children,
}) => {
  return <h1 className={`${fontColor || ''} ${fontSize || ''}`}>{children}</h1>;
};
