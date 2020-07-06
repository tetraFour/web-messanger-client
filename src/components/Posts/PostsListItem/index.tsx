import React from 'react';

import { Link } from 'react-router-dom';

import './style.scss';

const counter = 50;
const number = 20;

const PostsListItem: React.FC<{ id: number }> = ({ id }) => {
  return (
    <Link to={`/home/${id}`} className="posts-list-item posts-list-item_active">
      <div className="posts-list-item__avatar-wrapper">
        <img
          src="https://sun1.cosmostv-by-minsk.userapi.com/RXzP1sxoTrxaXqeSKZ5c0iMVqxDPKaVh5a6IzA/jMfzPRrTl1A.jpg?ava=1"
          alt=""
          className="posts-list-item__avatar"
        />
        <span className="posts-list-item__online posts-list-item__online_active" />
      </div>
      <div className="posts-list-item__content clearfix">
        <span className="posts-list-item__data">24.04.2019</span>
        <h4 className="posts-list-item__username">Гай Юлий Цезарь</h4>
        <p className="posts-list-item__message">
          Кек. Ты то меня никогда не предашь
          <span role="img" aria-label="Panda">
            😌
          </span>
        </p>
        <div className="posts-list-item__state-wrapper">
          <span className="posts-list-item__message-counter">
            {number > counter ? '50+' : `${number}`}
          </span>
          <span className="posts-list-item__message-state" />
        </div>
      </div>
    </Link>
  );
};

export default PostsListItem;
