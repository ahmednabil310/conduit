import React, { Component } from "react";
import "./Post.scss";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import getjwt from "../helpers/jwt";
import { FormConsumer } from "../contexts/FormContext";
export default class Post extends Component {
  state = {
    button: false,
    value: this.props.data.favoritesCount,
    check: false,
  };
  handleClick = (e) => {
    const jwt = getjwt();
    if (this.state.check === false) {
      this.setState({ button: !this.state.button });
      this.setState((prevState) => {
        return { value: prevState.value + 1 };
      });
      this.setState({ check: true });
    }
    //Favorite Request
    axios
      .post(
        `https://conduit.productionready.io/api/articles/${this.props.data.slug}/favorite`,
        {},
        {
          headers: { Authorization: `Token ${jwt}` },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    let { author, title, description, createdAt, slug } = this.props.data;
    let btn_class = this.state.button
      ? "clicked btn btn-sm btn-outline-primary"
      : "btn btn-sm btn-outline-primary";
    let date = new Date(createdAt).toLocaleDateString("en-US");
    return (
      <FormConsumer>
        {(value) => {
          return (
            <div className="post">
              <div className="post-meta">
                <Link to={`/users/${author.username}`} className="img">
                  <img src={author.image} alt="#" />
                </Link>
                <div className="info">
                  <Link to={`/users/${author.username}`}>
                    {author.username}
                  </Link>
                  <p className="date">{date}</p>
                </div>
                <div className="button-react float-right">
                  {value.login ? (
                    <button className={btn_class} onClick={this.handleClick}>
                      <FontAwesomeIcon icon={faHeart} />
                      {this.state.value}
                    </button>
                  ) : (
                    <button className={btn_class}>
                      <FontAwesomeIcon icon={faHeart} />
                      {this.state.value}
                    </button>
                  )}
                </div>
              </div>
              <div className="post-body">
                <Link to={`/article/${slug}`}>
                  <h1 className="pb-1">{title}</h1>
                  <p>{description}</p>
                  <span>Read more...</span>
                </Link>
              </div>
              <hr />
            </div>
          );
        }}
      </FormConsumer>
    );
  }
}
