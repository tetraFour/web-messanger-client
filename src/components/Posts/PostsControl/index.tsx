import React from "react";

import { TeamOutlined, FormOutlined } from "@ant-design/icons";
import "./style.sass";

const PostsControl = () => {
  return (
    <div className="posts-control">
      <div className="posts-control__icon">
        <TeamOutlined />
      </div>
      <h4 className="posts-control__title">Список диалогов</h4>
      <button className="posts-control__button">
        <FormOutlined />
      </button>
    </div>
  );
};

export default PostsControl;
