import { atom } from 'jotai';

export interface UserState {
  userId: number;
  name: string;
}

export const userAtom = atom({
  userId: 0,
  name: 'test',
});
