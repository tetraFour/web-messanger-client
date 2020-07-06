import { useState, useCallback } from 'react';

import axios, { AxiosResponse } from 'axios';

export type UseHttp = {
  loading: boolean;
  error: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (url: string, method: string, body?: object) => Promise<any>;
  clearError: () => void;
};

const httpErrorStatus = 400;

// const delay = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

export const useHttp = (): UseHttp => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method, body) => {
    setLoading(true);
    try {
      // await delay();
      const response: AxiosResponse = await axios({
        method,
        url,
        data: body,
      });

      if (response.status >= httpErrorStatus) {
        return new Error(response.data.message || 'что-то пошло не так!');
      }
      setLoading(false);
      return response.data;
    } catch (responseError) {
      setLoading(false);
      setError(responseError.message);
      throw responseError;
    }
  }, []);
  const clearError = () => {
    setError(null);
  };

  return { loading, request, error, clearError };
};
