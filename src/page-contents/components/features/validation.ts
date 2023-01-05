import { z } from 'zod';
import { LoginFormTypes } from '../Login';

export const validationSchema = z.object({
  email: z
    .string()
    .min(1)
    .email('入力されたメールアドレスに間違いがあります。'),
  password: z.string().min(1),
});

export type Form = z.infer<typeof validationSchema>;
