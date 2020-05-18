import React from "react";

import Posts from "../../components/Posts/PostsWrapper";

import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  EllipsisOutlined,
  SendOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import "./style.sass";

const Home = () => {
  return (
    <div className="messenger">
      <Posts />
      {/* <FormOutlined /> */}
      {/* <TeamOutlined /> */}
      <SmileOutlined />
      <CameraOutlined />
      <AudioOutlined />
      <EllipsisOutlined />
      <SearchOutlined />
      <SendOutlined />
    </div>
  );
};

export default Home;
