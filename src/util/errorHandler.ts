import { API_ERROR_MESSAGES } from '@/constants/errorMessages';
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
    window.alert(API_ERROR_MESSAGES.UNAUTHORIZED);
    router.push('/sign_up');
    return;
  }

  if (err.message === 'Network Error') {
    window.alert(API_ERROR_MESSAGES.NETWORK_ERROR);
    return;
  }

  window.alert(alertMessage || API_ERROR_MESSAGES.DEFAULT_ERROR);
};
