import React from 'react';

import { SearchOutlined } from '@ant-design/icons';

import './style.scss';

const PostsSearch = () => {
  return (
    <div className="posts-search">
      <div className="posts-search__icon">
        <SearchOutlined />
      </div>
      <div className="posts-search__input-wrapper">
        <input
          type="text"
          className="posts-search__input"
          placeholder="Поиск среди контактов"
        />
      </div>
    </div>
  );
};

export default PostsSearch;
