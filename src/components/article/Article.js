import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Article.scss";
import { FormConsumer } from "../contexts/FormContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import getjwt from "../helpers/jwt";
import Comment from "../comments/Comment";
export default class Article extends Component {
  state = {
    article: [],
    loaded: false,
    body: "",
    authorComment: [],
  };
  componentDidMount() {
    const jwt = getjwt();
    axios
      .get(
        `https://conduit.productionready.io/api/articles/${this.props.match.params.articlename}`
      )
      .then((res) => {
        this.setState({ article: res.data.article });
        this.setState({ loaded: true });
      });

    axios
      .get(
        `https://conduit.productionready.io/api/articles/${this.props.match.params.articlename}/comments`,
        {
          headers: { Authorization: `Token ${jwt}` },
        }
      )
      .then((res) => {
        this.setState({ authorComment: res.data.comments });
        console.log(res.data.comments);
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleComment = (e) => {
    const jwt = getjwt();
    e.preventDefault();
    axios
      .post(
        `https://conduit.productionready.io/api/articles/${this.state.article.slug}/comments`,
        {
          comment: { body: this.state.body },
        },
        {
          headers: { Authorization: `Token ${jwt}` },
        }
      )
      .then((res) => {
        this.setState({
          authorComment: [res.data.comment, ...this.state.authorComment],
        });
        this.setState({ body: "" });
      })
      .catch((err) => console.log(err));
  };
  handleDelete = () => {
    const jwt = getjwt();
    axios
      .delete(
        `https://conduit.productionready.io/api/articles/${this.props.match.params.articlename}`,
        {
          headers: { Authorization: `Token ${jwt}` },
        }
      )
      .then((res) => (window.location = "/"))
      .catch((err) => console.log(err));
  };

  render() {
    const comments = this.state.authorComment.map((comment) => (
      <Comment
        key={Math.random()}
        data={comment}
        slug={this.state.article.slug}
      />
    ));
    let date = new Date(this.state.article.createdAt).toLocaleDateString(
      "en-US"
    );
    return (
      <FormConsumer>
        {(value) => {
          if (this.state.loaded === true && value.login === false) {
            return (
              <div>
                <div className="container-fluid article post py-5">
                  <div className="post-meta container">
                    <div className="title pb-3">
                      <h1>{this.state.article.title}</h1>
                    </div>
                    <Link
                      to={`/users/${this.state.article.author.username}`}
                      className="img"
                    >
                      <img src={this.state.article.author.image} alt="#" />
                    </Link>
                    <div className="info">
                      <Link to={`/users/${this.state.article.author.username}`}>
                        {this.state.article.author.username}
                      </Link>
                      <p className="date">{date}</p>
                    </div>
                  </div>
                </div>
                <div className="container body pt-3">
                  <div className="row">
                    <div className="col-xs-12 body-info">
                      {this.state.article.body}
                    </div>
                  </div>
                </div>
                <div className="container">
                  <hr />
                </div>
                <p className="text-center pt-3 links">
                  <Link to="/login" className="pr-1">
                    Sign in
                  </Link>
                  or <Link to="/register">sign up</Link> to add comments on this
                  article
                </p>
              </div>
            );
          } else if (this.state.loaded === true && value.login === true) {
            return (
              <div>
                <div className="container-fluid article post py-5">
                  <div className="post-meta container">
                    <div className="title pb-3">
                      <h1>{this.state.article.title}</h1>
                    </div>
                    <Link
                      to={`/users/${this.state.article.author.username}`}
                      className="img"
                    >
                      <img src={this.state.article.author.image} alt="#" />
                    </Link>
                    <div className="info">
                      <Link to={`/users/${this.state.article.author.username}`}>
                        {this.state.article.author.username}
                      </Link>
                      <p className="date">{date}</p>
                    </div>
                    {value.user === this.state.article.author.username ? (
                      <div className="buttons">
                        <Link to={`/editor`}>
                          <button className=" btn btn-sm btn-outline-secondary edit">
                            <FontAwesomeIcon icon={faPen} />
                            Edit Article
                          </button>
                        </Link>
                        <button
                          className="btn btn-sm btn-outline-secondary ml-2 delete"
                          onClick={this.handleDelete}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          Delete Article
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="container body pt-3">
                  <div className="row">
                    <div className="col-xs-12 body-info">
                      {this.state.article.body}
                    </div>
                  </div>
                </div>
                <div className="container">
                  <hr />
                </div>

                <div className="row justify-content-center">
                  <div className="col-md-6 col-xs-12 ">
                    <form
                      className=" comment-form justify-content-center"
                      onSubmit={this.handleComment}
                    >
                      <fieldset className="form-group">
                        <textarea
                          className="form-control form-control-lg "
                          placeholder="Write a comment..."
                          onChange={this.handleChange}
                          name="body"
                          rows="3"
                        ></textarea>
                      </fieldset>
                      <div className="card-footerr">
                        <button
                          className="btn btn-sm btn-primary float-right spec mb-2"
                          type="submit"
                        >
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {comments}
              </div>
            );
          }
        }}
      </FormConsumer>
    );
  }
}
