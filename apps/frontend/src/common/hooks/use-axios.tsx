import axios, { AxiosInstance } from 'axios';
import { useSelector } from 'react-redux';
import { SelectClientUuid } from '../../store/user';
import { IAppState } from '../../contracts/store';
import { SelectAuthJwt } from '../../store/auth';

/**
 * Create an Axios instance that is set up with Keycloak (adapted from keycloak-react-examples)
 * See also: https://github.com/panz3r/jwt-checker-server for a quick implementation
 *
 * @example ```Example usage in components:
 * const axiosInstance = useAxios('http://localhost:5000')
 * const callApi = useCallback(() => {
 * axiosInstance.get('/jwt/decode')
 *  }, [axiosInstance]) ```
 *
 * @param baseURL Base API URL
 * @param clientJwt optional JWT to use for auth
 */
export const useAxios = (
  baseURL: string,
  clientJwt?: string
): AxiosInstance => {
  // const jwt = useSelector<IAppState, string>(SelectAuthJwt);
  // const uuid = useSelector<IAppState, string>(SelectClientUuid);

  const instance = axios.create({
    baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization:
        clientJwt && clientJwt != '' ? `Bearer ${clientJwt}` : undefined,
    },
  });

  return instance;
};
