import { createContext } from 'react';

export type AuthContextType = {
  token: string | null;
  userId: string | null;
  login: (token: AuthContextType, userId: AuthContextType) => void;
  logout: (token: AuthContextType, userId: AuthContextType) => void;
  isAuthenticated?: boolean;
  ready?: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  userId: null,
  login: (): void => {},
  logout: (): void => {},
  isAuthenticated: false,
});
