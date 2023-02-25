import { z } from 'zod';

export const authValidationSchema = z.object({
  email: z
    .string()
    .email('メールアドレスの形式ではありません')
    .min(1, '入力してください')
    .max(50, '50文字以内で入力してください'),
  password: z.string().min(1, '入力してください'),
});

export type AuthFormTypes = z.infer<typeof authValidationSchema>;
