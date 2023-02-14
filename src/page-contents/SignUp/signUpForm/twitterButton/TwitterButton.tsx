import React, { FC, memo } from 'react';
import Image from 'next/image';
import { Button as MButton, CSSObject, MantineTheme } from '@mantine/core';
import { Button } from '../../../../components/ui/elements/button/Button';
import { useSignUpWithTwitter } from './useSignUpWithTwitter';

export const TwitterButton: FC = memo(() => {
  const { handleSignUpWithTwitter, isLoading, isError } =
    useSignUpWithTwitter();

  return (
    <Button
      type="button"
      label="Twitterで登録する"
      size="md"
      color="blue.9"
      fullWidth
      loading={isLoading}
      onClick={handleSignUpWithTwitter}
      leftIcon={
        <Image src="/icon/twitter.svg" alt="Logo" width={36} height={36} />
      }
    />
  );
});
