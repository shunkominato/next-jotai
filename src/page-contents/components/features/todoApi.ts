import { rejects } from 'assert';

// export function fetchCount(amount = 'dddd') {
//   return new Promise<{ data: string }>((resolve) => {

//     // eslint-disable-next-line no-promise-executor-return
//     console.log('afads');
//     // eslint-disable-next-line no-promise-executor-return
//     return setTimeout(() => rejects({ data: amount }), 500)
//   }
//   );
// }

export async function fetchCount(amount = 'dddd') {
  // eslint-disable-next-line @typescript-eslint/return-await
  return await fetch('https://.../posts');
}
