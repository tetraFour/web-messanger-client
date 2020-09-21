import React from 'react';

import { SmileOutlined } from '@ant-design/icons';

import { Popover } from 'antd';

import Sticker1 from 'assets/images/stickers/CatPusheen2.webp';
import Sticker2 from 'assets/images/stickers/CatPusheen3.webp';
import Sticker3 from 'assets/images/stickers/CatPusheen4.webp';
import Sticker4 from 'assets/images/stickers/CatPusheen5.webp';
import Sticker5 from 'assets/images/stickers/CatPusheen6.webp';
import Sticker6 from 'assets/images/stickers/CatPusheen7.webp';
import Sticker7 from 'assets/images/stickers/CatPusheen8.webp';
import Sticker8 from 'assets/images/stickers/CatPusheen9.webp';
import Sticker9 from 'assets/images/stickers/CatPusheen10.webp';

const stickers = [
  Sticker1,
  Sticker2,
  Sticker3,
  Sticker4,
  Sticker5,
  Sticker6,
  Sticker7,
  Sticker8,
  Sticker9,
];

const DialogInputStickersList = () => {
  return (
    <ul className="sticker-list">
      {stickers.map((sticker) => (
        <li key={sticker} className="sticker-list__item">
          <DialogInputStickersListItem sticker={sticker} />
        </li>
      ))}
    </ul>
  );
};

const DialogInputStickersListItem: React.FC<{ sticker: string }> = ({
  sticker,
}) => {
  return (
    <button type="button">
      <img src={sticker} alt="sticker" />
    </button>
  );
};

const DialogInputStickers = () => {
  return (
    <Popover
      placement="bottomLeft"
      content={DialogInputStickersList}
      trigger="click"
    >
      <button
        type="button"
        className="dialog-input-wrapper__controller dialog-input-wrapper__controller_sticker"
      >
        <SmileOutlined style={{ fontSize: '20px' }} />
      </button>
    </Popover>
  );
};

export default DialogInputStickers;
