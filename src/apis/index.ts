// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { apiBaseUrl } from '../../../config/apiBaseUrl';

// export const useApi = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
//   axios({
//     method: config.method || 'get',
//     baseURL: apiBaseUrl,
//     url: config.url,
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8'
//       // TODO: 認証が必要になったらコメント外す
//       // Authorization: `Bearer ${localStorage.idToken}`
//     },
//     params: config.params
//   }).catch((err: any) => {
//     throw err;
//     //ネットワークエラー時にresponseが存在しないので変更
//   });
