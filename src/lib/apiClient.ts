import axios, { AxiosResponse } from 'axios';
import snakecaseKeys from 'snakecase-keys';

class ApiClient {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
  }

  // eslint-disable-next-line class-methods-use-this
  private _setToken() {
    console.log('set token');
  }

  get<T>({
    uri,
    params,
  }: {
    uri: string;
    params?: object;
  }): Promise<AxiosResponse<T>> {
    this._setToken();

    return axios.get(uri, { params });
  }

  post<T>({
    uri,
    body,
  }: {
    uri: string;
    body?: object;
  }): Promise<AxiosResponse<T>> {
    this._setToken();

    return axios.post(uri, body ? snakecaseKeys(body, { deep: true }) : body);
  }
}

export default new ApiClient();
