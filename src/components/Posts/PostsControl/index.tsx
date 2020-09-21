import React from 'react';

import axios from 'axios';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

import { TeamOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import './style.scss';

const PostsControl = observer(() => {
  const { t, i18n } = useTranslation();

  const handleClickChangeLanguage = () => {
    if (i18n.language === 'ru') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ru');
    }
  };

  const getCookies = async () => {
    // console.log(token);
    const { data } = await axios.get(
      'http://localhost:5000/api/auth/protected',
      {
        withCredentials: true,
      },
    );

    console.log(data);
  };

  return (
    <div className="posts-control">
      <div className="posts-control__icon-wrapper">
        <TeamOutlined className="posts-control__icon" onClick={getCookies} />
      </div>
      <h4 className="posts-control__title">{t('dialogList')}</h4>
      <button
        className="posts-control__button"
        type="button"
        onClick={handleClickChangeLanguage}
      >
        <DoubleLeftOutlined className="posts-control__button-icon" />
      </button>
    </div>
  );
});

export default PostsControl;
