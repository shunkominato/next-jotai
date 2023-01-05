import { z } from 'zod';

export const validationSchema = z.object({
  email: z
    .string()
    .email('メールアドレスの形式ではありません')
    .min(1, '入力してください')
    .max(50, '50文字以内で入力してください'),
  password: z.string().min(1, '入力してください'),
});

export type SignUpFormTypes = z.infer<typeof validationSchema>;
