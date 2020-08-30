import React, { Component } from "react";
import Header from "../header/Header";
import PostCollection from "../posts/PostCollection";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <PostCollection />
      </div>
    );
  }
}
