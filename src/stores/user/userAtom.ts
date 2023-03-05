// import { atom } from 'jotai';

import { atom } from 'jotai';

export interface UserState {
  userId: number;
  name: string;
}

export const userAtom = atom<UserState>({
  userId: 0,
  name: 'test',
});
