import React, { useState, useEffect } from 'react';

import { IMessageContentType } from 'types';

const MessagePhoto: React.FC<{
  photoList: IMessageContentType['photoList'];
}> = ({ photoList }) => {
  const [limitPhotos, setLimitPhotos] = useState<
    IMessageContentType['photoList']
  >(photoList!.slice(0, 3));

  const [isShowAll, setIsShowAll] = useState(false);
  useEffect(() => {
    if (photoList!.length <= 3) {
      setIsShowAll(true);
    }
  }, [photoList]);

  const handleClickShowAll = () => {
    setLimitPhotos(photoList);
    setIsShowAll(true);
  };
  return (
    <ul className="message-dialog__photo-wrapper">
      {limitPhotos!.map((limitPhoto) => (
        <li key={limitPhoto.id} className="message-dialog__photo">
          <img src={limitPhoto.photoLink} alt={limitPhoto.alternative} />
        </li>
      ))}
      {!isShowAll && (
        <li className="message-dialog__photo message-dialog__photo_add">
          <button type="button" onClick={handleClickShowAll}>
            +{photoList!.length - limitPhotos!.length}
          </button>
        </li>
      )}
    </ul>
  );
};

export default MessagePhoto;
