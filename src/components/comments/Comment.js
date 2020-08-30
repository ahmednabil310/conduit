import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Comments.scss";
import axios from "axios";
import getjwt from "../helpers/jwt";
export default class Comment extends Component {
  handleDleteComment = () => {
    const jwt = getjwt();
    axios
      .delete(
        `https://conduit.productionready.io/api/articles/${this.props.slug}/comments/${this.props.data.id}`,
        {
          headers: { Authorization: `Token ${jwt}` },
        }
      )
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  render() {
    let date = new Date(this.props.data.createdAt).toLocaleDateString("en-US");
    return (
      <div className="container h-100 col-sm-5 mb-3">
        <div className="card h-100 ">
          <div className="card-body">
            <p className="card-text">{this.props.data.body}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between px-3 py-3 comment">
            <div>
              <Link
                to={`/users/${this.props.data.author.username}`}
                className="img "
              >
                <img
                  src={this.props.data.author.image}
                  alt=""
                  height="20px"
                  width="20px"
                  className="special mr-1"
                />
              </Link>
              <Link
                to={`/users/${this.props.data.author.username}`}
                className="mr-1"
              >
                {this.props.data.author.username}
              </Link>
              <span className="date">{date}</span>
            </div>
            <div>
              <span onClick={this.handleDleteComment}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
