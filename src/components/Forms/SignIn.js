import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Forms.scss";
import axios from "axios";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      .post("https://conduit.productionready.io/api/users/login", {
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      })
      .then((res) => {
        localStorage.setItem("cool", res.data.user.token);
        window.location = "/";
        localStorage.setItem("pass", this.state.password);
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
            <h1 className="text-center">Sign In</h1>
            <p className="text-center pt-1">
              <Link to="/register">Need an account?</Link>
            </p>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    type="email"
                    required
                    placeholder="Email"
                    autoComplete="on"
                    id="email"
                    name="email"
                    className=" form-control form-control-lg"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    id="password"
                    onChange={this.handleChange}
                    className="form-control form-control-lg"
                  />
                </fieldset>
                {this.state.isSubmitted && this.state.errors.errors ? (
                  <p className="text-center form-error">
                    {`Email or password
                     ${Object.values(this.state.errors.errors)[0][0]}`}
                  </p>
                ) : (
                  ""
                )}
                <button type="submit">Sign In</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
