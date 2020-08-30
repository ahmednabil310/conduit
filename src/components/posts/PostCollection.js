import React, { Component } from "react";
import Post from "./Post.js";
import "./PostCollection.scss";
import axios from "axios";
import FeedToggle from "./FeedToggle";
export default class PostCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://conduit.productionready.io/api/articles")
      .then((res) => {
        this.setState({ articles: res.data.articles });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const post = this.state.articles.map((article) => (
      <Post key={Math.random()} data={article} />
    ));
    return (
      <div className="container pt-3 pl-4">
        <div className="row">
          <div className="col-sm-9">
            <FeedToggle href="" class="active" title={"Global Feed"} />
            <hr />
            <div>{post}</div>
          </div>
        </div>
      </div>
    );
  }
}
