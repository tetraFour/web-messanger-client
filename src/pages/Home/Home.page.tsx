import React from 'react';

import Posts from 'components/Posts/PostsWrapper';
import Message from 'components/Dialog';

import './style.scss';

const Home = () => {
  return (
    <div className="messenger">
      <Posts />
      <Message />
    </div>
  );
};

export default Home;
