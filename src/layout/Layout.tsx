import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { createStyles, Header, Container, Footer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import * as defaultStyles from '@/styles/default.styles';

type Props = {
  title: string;
  children: ReactNode;
};

const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
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
            <Image src="/vercel.svg" alt="Logo" width={120} height={56} />
          </span>
        </Container>
      </Header>
      <main className={` ${defaultStyles.fontSize} ${defaultStyles.fontColor}`}>
        {children}
      </main>
      <Footer height={56}>
        <Container>aa</Container>
      </Footer>
    </>
  );
};
