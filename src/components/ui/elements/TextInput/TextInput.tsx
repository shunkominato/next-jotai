import React, { FC, memo } from 'react';
import { TextInput as MTTextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

type Props = {
  mt?: string;
  id: string;
  radius?: string;
  label: string;
  required?: boolean;
  styles?: Record<string, Record<string, string | number>>;
  placeholder: string;
  form: UseFormReturnType<any, any>;
};

export const TextInput: FC<Props> = ({
  mt = 'md',
  id,
  radius = 'xs',
  label,
  required,
  styles,
  placeholder,
  form,
}) => {
  return (
    <MTTextInput
      mt={mt}
      id={id}
      radius={radius}
      label={label}
      required={required}
      styles={styles}
      placeholder={placeholder}
      {...form.getInputProps(id)}
    />
  );
};
