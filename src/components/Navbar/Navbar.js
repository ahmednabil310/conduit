import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import getjwt from "../helpers/jwt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FormConsumer } from "../contexts/FormContext";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    const jwt = getjwt();
    if (jwt) {
      this.setState({ login: true });
    }
  }
  render() {
    return (
      <FormConsumer>
        {(value) => {
          if (this.state.login === false) {
            return (
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light  justify-content-between">
                  <div className="pb-2">
                    <Link to="/" className="nav-brand">
                      conduit
                    </Link>
                  </div>
                  <ul>
                    <li className="d-inline pr-3">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="d-inline pr-3">
                      <Link to="/login">Sign In</Link>
                    </li>

                    <li className="d-inline">
                      <Link to="/register">Sign Up</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            );
          } else if (this.state.login === true) {
            return (
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light  justify-content-between align-items-center">
                  <div className="pb-2">
                    <Link to="/" className="nav-brand">
                      conduit
                    </Link>
                  </div>
                  <ul>
                    <Link to="/">
                      <li className="d-inline pr-3 logged">Home</li>
                    </Link>
                    <Link to="/editor">
                      <li className="d-inline pr-3 logged">
                        <FontAwesomeIcon icon={faPen} />
                        New Post
                      </li>
                    </Link>
                    <Link to="/settings">
                      <li className="d-inline pr-3 logged">
                        <FontAwesomeIcon icon={faCog} />
                        Settings
                      </li>
                    </Link>
                    <a href={`/users/${value.user}`}>
                      <li className="d-inline logged">{value.user}</li>
                    </a>
                  </ul>
                </nav>
              </div>
            );
          }
        }}
      </FormConsumer>
    );
  }
}
