import { AxiosError } from 'axios';
import router from 'next/router';

export const errorHandler = ({
  err,
  alertMessage,
}: {
  err: AxiosError;
  alertMessage?: string;
}) => {
  if (err.response?.status === 401) {
    window.alert(
      'ログイン状態が無効になりました。続けて操作する場合はログインをしなおしてください。'
    );
    router.push('/sign_up');
    return;
  }

  if (err.message === 'Network Error') {
    window.alert('通信エラー発生しました。電波の良い場所で再度お試しください');
    return;
  }

  window.alert(
    alertMessage
      ? alertMessage
      : '予期せぬエラーが発生しました。しばらくしてから再度お試しください'
  );
};
