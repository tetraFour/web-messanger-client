export interface SignProps {
  setAuthState: (state: string) => void;
}

export type FormControl = {
  name?: string;
  login: string;
  password: string;
  repeatPassword?: string;
  email?: string;
};
