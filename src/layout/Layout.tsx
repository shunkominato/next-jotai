import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { createStyles, Header, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import * as defaultStyles from '@/styles/default.styles';

type Props = {
  title: string;
  children: ReactNode;
};

const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    // borderBottom: 0,
  },
}));

export const Layout: FC<Props> = ({ children, title = 'test' }) => {
  const { classes } = useStyles();
  return (
    <>
      <Header height={56} className={classes.header}>
        <Container>
          <span>
            {/* <Image src="/logo/" alt="Logo" width={120} height={56} /> */}
          </span>
        </Container>
      </Header>
      <main className={` ${defaultStyles.fontSize} ${defaultStyles.fontColor}`}>
        {children}
      </main>
    </>
  );
};
