import React, { useEffect } from 'react';

import { observer } from 'mobx-react';

import { postsStore } from 'Store/Post';
import { messagesStore } from 'Store/Messages';

import PostsListItem from '../PostsListItem';
import './style.scss';

interface IPost {
  _id: string;
  name: string;
  avatar: string;
}

const PostsList = observer(() => {
  const { posts, loadPosts } = postsStore;
  const { newMessage } = messagesStore;

  useEffect(() => {
    loadPosts(`${process.env.REACT_APP_BASE_URL}/api/post/get-post-list`);
  }, [loadPosts]);

  return (
    <div className="posts-list">
      <ul style={{ padding: 0 }}>
        {posts.map((post: IPost) => (
          <li key={post._id}>
            <PostsListItem
              id={post._id}
              userName={post.name}
              avatar={post.avatar}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default PostsList;
