import React from 'react';

import { NavLink } from 'react-router-dom';

import './style.scss';

const counter = 50;
const number = 20;

interface IPostsListProps {
  id: string;
  userName: string;
  avatar: string;
}

const PostsListItem: React.FC<IPostsListProps> = ({ id, userName, avatar }) => {
  return (
    <NavLink
      activeClassName="posts-list-item_active"
      to={`/home/${id}`}
      className="posts-list-item"
    >
      <div className="posts-list-item__avatar-wrapper">
        {avatar ? (
          <img
            src={avatar}
            alt={userName}
            className="posts-list-item__avatar"
          />
        ) : (
          <div className="posts-list-item__avatar" />
        )}
        <span className="posts-list-item__online posts-list-item__online_active" />
      </div>
      <div className="posts-list-item__content clearfix">
        <span className="posts-list-item__data">24.04.2019</span>
        <h4 className="posts-list-item__username">{userName}</h4>
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
    </NavLink>
  );
};

export default PostsListItem;
