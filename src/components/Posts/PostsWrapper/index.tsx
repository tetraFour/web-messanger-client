import React from "react";

import PostsControl from "../PostsControl";
import PostsList from "../PostsList";
import PostsSearch from "../PostsSearch";

import "./style.sass";

const Posts = () => {
  return (
    <section className="posts">
      <PostsControl />
      <PostsSearch />
      <PostsList />
    </section>
  );
};

export default Posts;
