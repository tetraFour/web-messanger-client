import React, { useEffect } from 'react';

import { observer } from 'mobx-react';

import { socketStore } from 'Store/Socket';

import Posts from 'components/Posts/PostsWrapper';
import Message from 'components/Dialog';

import './style.scss';

const Home = observer(() => {
  const { socketConnection, socketDisconnection } = socketStore;
  useEffect(() => {
    socketConnection();
    return () => socketDisconnection();
  }, [socketConnection, socketDisconnection]);

  return (
    <div className="messenger">
      <Posts />
      <Message />
    </div>
  );
});

export default Home;
