export interface IRouteProps {
  Component: React.ReactType;
  exact?: boolean;
  path: string;
}

export type FormControl = {
  name?: string;
  login: string;
  password: string;
  repeatPassword?: string;
  email?: string;
};

export type Photo = {
  id: number;
  photoLink: string;
  alternative: string;
};

export interface IMessageContentType {
  messageText?: string;
  fileSize?: string;
  filePath?: string;
  fileName?: string;
  stickerLink?: string;
  photoList?: Photo[];
}

export interface IMessages {
  _id?: number;
  isMe: boolean;
  user: string;
  flag: string;
  content: IMessageContentType;
  date: Date;
  partner: string;
}
