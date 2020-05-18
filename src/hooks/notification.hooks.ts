import { notification } from "antd";

export const useNotification = () => (
  message: string,
  description: string,
  type: string
) =>
  (notification as any)[type]({
    message,
    description,
  });
