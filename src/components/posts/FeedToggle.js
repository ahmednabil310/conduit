import React, { Component } from "react";
import "./FeedToggle.scss";
import { Link } from "react-router-dom";
export default class FeedToggle extends Component {
  render() {
    return (
      <li className="pt-5 feed-toggle nav-item">
        <Link className={this.props.class} to={this.props.href}>
          {this.props.title}
        </Link>
      </li>
    );
  }
}
