import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { SearchOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';

import { postsStore } from 'Store/Post';
import { useDebounce } from 'hooks';

import './style.scss';

const delayBeforeRequest = 500;

const PostsSearch = observer(() => {
  const { t } = useTranslation();
  const [user, setUser] = useState('');
  const { setPostsAction } = postsStore;

  const debounceSearchUsers = useDebounce(user, delayBeforeRequest);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}/api/post/search?username=${debounceSearchUsers}`,
        {
          withCredentials: true,
        },
      );

      setPostsAction(data);
    };
    fetchData();
  }, [debounceSearchUsers, setPostsAction]);

  return (
    <div className="posts-search">
      <div className="posts-search__control">
        <div className="posts-search__icon">
          <SearchOutlined />
        </div>
        <div className="posts-search__input-wrapper">
          <input
            type="text"
            className="posts-search__input"
            placeholder={t('findContact')}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
});

export default PostsSearch;
