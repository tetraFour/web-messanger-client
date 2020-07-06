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

// export interface IMessageProps {
//   isMe?: boolean;
//   flag: string;
//   content?: object;
// }

export type Photo = {
  id: number;
  photoLink: string;
  alternative: string;
};

export interface IMessageContentType {
  text?: string;
  fileSize?: string;
  filePath?: string;
  fileName?: string;
  stickerLink?: string;
  photoList?: Photo[];
}

export interface IMessages {
  id?: number;
  isMe: boolean;
  flag: string;
  content: IMessageContentType;
}
