import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: [],
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://conduit.productionready.io/api/users", {
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then((res) => {
        localStorage.setItem("cool", res.data.user.token);
        window.location = "/";
      })
      .catch((err) => {
        this.setState({ errors: err.response.data });
        this.setState({ isSubmitted: true });
      });
  }

  render() {
    return (
      <div className="container page mt-3">
        <div className="row">
          <div className="col-md-6 col-xs-12 offset-md-3">
            <h1 className="text-center">Sign Up</h1>
            <p className="text-center pt-1">
              <Link to="/login">Have an account?</Link>
            </p>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    name="username"
                    type="text"
                    required
                    placeholder="Username"
                    id="username"
                    className=" form-control form-control-lg"
                  />
                  {this.state.isSubmitted &&
                  this.state.errors.errors.username ? (
                    <p className="text-center form-error">
                      Username {this.state.errors.errors.username}
                    </p>
                  ) : (
                    ""
                  )}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    autoComplete="on"
                    id="email"
                    className="form-control form-control-lg"
                  />
                  {this.state.isSubmitted && this.state.errors.errors.email ? (
                    <p className="text-center form-error">
                      Email {this.state.errors.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    id="password"
                    className="form-control form-control-lg"
                  />
                  {this.state.isSubmitted &&
                  this.state.errors.errors.password ? (
                    <p className="text-center form-error">
                      Password {this.state.errors.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </fieldset>
                <button type="submit">Sign Up</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
