import { z } from 'zod';

export const validationSchema = z.object({
  todo: z
    .string()
    .min(1, '入力してください')
    .max(50, '50文字以内で入力してください'),
});

export type TodoFormTypes = z.infer<typeof validationSchema>;
