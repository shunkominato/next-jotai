import { MantineProvider } from '@mantine/core';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const UiProvider: FC<Props> = ({ children }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Helvetica',
        // breakpoints: {
        //   xs: 500,
        //   sm: 800,
        // },
        components: {
          Button: {
            styles: {
              root: {
                boxShadow: `0 4px 5px rgba(0, 0, 0, 0.25)`,
                '&:hover': {
                  boxShadow: `0 5px 10px rgba(0, 0, 0, 0.6)`,
                },
              },
            },
          },
        },
        // colors: {
        //   blue: [
        //     '#F0BBDD',
        //     '#ED9BCF',
        //     '#EC7CC3',
        //     '#ED5DB8',
        //     '#3c74c9',
        //     '#2860b5',
        //     '#1d4ed8',
        //     '#1e40af',
        //     '#C50E82',
        //     '#03A9F4',
        //   ],
        // },
        // primaryColor: 'blue',
      }}
    >
      {children}
    </MantineProvider>
  );
};
