import { notification } from 'antd';

export const useNotification = () => (
  message: string,
  description: string,
  type: string,
  duration = 3,
) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (notification as any)[type]({
    message,
    description,
    duration,
  });
