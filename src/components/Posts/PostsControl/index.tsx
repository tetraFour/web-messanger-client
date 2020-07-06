import React from 'react';

import { TeamOutlined, FormOutlined } from '@ant-design/icons';
import './style.scss';

const PostsControl = () => {
  return (
    <div className="posts-control">
      <div className="posts-control__icon">
        <TeamOutlined style={{ fontSize: '18px' }} />
      </div>
      <h4 className="posts-control__title">Список диалогов</h4>
      <button className="posts-control__button" type="button">
        <FormOutlined style={{ fontSize: '18px' }} />
      </button>
    </div>
  );
};

export default PostsControl;
