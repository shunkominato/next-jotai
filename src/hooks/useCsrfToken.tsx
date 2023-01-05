import apiClient from '@/lib/apiClient';
import axios from 'axios';
import { useEffect } from 'react';

interface ICsrf {
  csrfToken: string;
}

export const useCsrfToken = () => {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await apiClient.get<ICsrf>({
        uri: '/auth/csrf',
      });
      axios.defaults.headers.common['csrf-token'] = data.csrfToken;
    };
    getCsrfToken();
  }, []);
};

// export const useCsrfToken = () => {
//   useEffect(() => {
//     const getCsrfToken = async () => {
//       const { data } = await axios.get<ICsrf>(
//         // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//         `${process.env.API_URL}/auth/csrf`
//       );
//       axios.defaults.headers.common['csrf-token'] = data.csrfToken;
//     };
//     getCsrfToken();
//   }, []);
// };
