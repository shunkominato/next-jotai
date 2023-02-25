import React, { FC, memo } from 'react';
import Image from 'next/image';
import { Button as MButton, CSSObject, MantineTheme } from '@mantine/core';
import { Button } from '../../../../components/ui/elements/button/Button';
import { useSignUpWithTwitter } from './useSignUpWithTwitter';

export const TwitterButton: FC = memo(() => {
  const { handleSignUpWithTwitter, isLoading, isError } =
    useSignUpWithTwitter();

  return (
    <MButton
      // bg="bg-[#03A9F4]"
      bg="blue.4"
      type="button"
      size="md"
      fullWidth
      loading={isLoading}
      onClick={() => {}}
      leftIcon={
        <Image src="/icon/twitter.svg" alt="Logo" width={36} height={36} />
      }
    >
      Twitterで登録する
    </MButton>
  );
});
