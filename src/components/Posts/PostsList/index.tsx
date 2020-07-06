import React from 'react';

import PostsListItem from '../PostsListItem';

import './style.scss';

const PostsList = () => {
  return (
    <div className="posts-list">
      <PostsListItem id={1} />
      <PostsListItem id={2} />
      <PostsListItem id={3} />
      <PostsListItem id={4} />
    </div>
  );
};

export default PostsList;
