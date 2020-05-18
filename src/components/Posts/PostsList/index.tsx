import React from "react";

import PostsListItem from "../PostsListItem";

import "./style.sass";
const PostsList = () => {
  return (
    <div className="posts-list">
      <PostsListItem />
    </div>
  );
};

export default PostsList;
