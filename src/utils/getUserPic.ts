export const getUserPic = (
  isMe: boolean,
  myPic: string,
  partnerPic: string,
) => {
  if (isMe) {
    return myPic;
  }
  return partnerPic;
};
