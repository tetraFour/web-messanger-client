import { useState, useCallback } from "react";

import axios from "axios";

export type UseHttp = {
  loading: boolean;
  error: string | null;
  request: (url: string, method: string, body?: object) => Promise<object>;
  clearError: () => void;
};

export const useHttp = (): UseHttp => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method, body) => {
    setLoading(true);
    try {
      const response: any = await axios({ method, url, data: body });

      if (response.status >= 400) {
        throw new Error(response.message || "что-то пошло не так!");
      }
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
    }
  }, []);
  const clearError = () => {
    setError(null);
  };

  return { loading, request, error, clearError };
};
