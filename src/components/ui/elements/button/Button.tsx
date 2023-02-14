import React, { FC, memo, ReactNode } from 'react';
import { Button as MButton, CSSObject } from '@mantine/core';

interface Props {
  label: string;
  variant?: 'light' | 'outline' | 'default' | 'subtle';
  color?: string;
  radius?: 'xs' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  size?: 'xs' | 'md' | 'lg' | 'xl';
  type?: 'reset' | 'button' | 'submit';
  styles?: Record<'root', string | CSSObject>;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: (...any: any) => void | Promise<void>;
}
export const Button: FC<Props> = memo(
  ({
    label,
    variant,
    color,
    radius,
    fullWidth = false,
    onClick,
    size = 'md',
    type = 'submit',
    styles,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
  }) => {
    return (
      <MButton
        type={type}
        variant={variant}
        color={color}
        radius={radius}
        fullWidth={fullWidth}
        size={size}
        onClick={onClick}
        styles={styles as Record<'root', CSSObject>}
        disabled={disabled}
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {label}
      </MButton>
    );
  }
);
