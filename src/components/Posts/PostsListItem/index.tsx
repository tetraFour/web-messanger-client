import React from "react";

import shibazaki from "../../../assets/images/shi.jpg";

import "./style.sass";

const counter = 50;
const number = 20;

const PostsListItem = () => {
  return (
    <div className="posts-list-item posts-list-item_active">
      <div className="posts-list-item__avatar-wrapper">
        <img src={shibazaki} alt="" className="posts-list-item__avatar" />
        <span className="posts-list-item__online posts-list-item__online_active"></span>
      </div>
      <div className="posts-list-item__content clearfix">
        <span className="posts-list-item__data">24.04.2019</span>
        <h4 className="posts-list-item__username">Гай Юлий Цезарь</h4>
        <p className="posts-list-item__message">
          Кек. Ты то меня никогда не предашь 😌
        </p>
        <div className="posts-list-item__state-wrapper">
          <span className="posts-list-item__message-counter">
            {number > counter ? "50+" : `${number}`}
          </span>
          <span className="posts-list-item__message-state"></span>
        </div>
      </div>
    </div>
  );
};

export default PostsListItem;
