import React, { Component } from "react";
import "./Settings.scss";
import axios from "axios";
import getjwt from "../../helpers/jwt";
import { FormConsumer } from "../../contexts/FormContext";
export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      username: "",
      bio: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLogOut = () => {
    localStorage.removeItem("cool");
    window.location = "/";
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const jwt = getjwt();
    axios
      .put(
        "https://conduit.productionready.io/api/user",
        {
          user: {
            image: this.state.url,
            username: this.state.username,
            bio: this.state.bio,
            email: this.state.email,
            password: this.state.password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            Authorization: `Token ${jwt}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }
  render() {
    return (
      <FormConsumer>
        {(value) => {
          if (value.login === true) {
            return (
              <div className="settings-page">
                <div className="container settings-page">
                  <div className="row">
                    <div className="col-md-10 col-xs-12 offset-md-1">
                      <h1 className="text-center">Your Settings</h1>
                      <form onSubmit={this.handleSubmit}>
                        <fieldset>
                          <fieldset className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="URL of profile picture"
                              onChange={this.handleChange}
                              name="url"
                            />
                          </fieldset>
                          <fieldset className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              value={value.user}
                              onChange={this.handleChange}
                              name="username"
                            />
                          </fieldset>
                          <fieldset className="form-group">
                            <textarea
                              className="form-control form-control-lg col-12"
                              placeholder="Short bio about you"
                              onChange={this.handleChange}
                              name="bio"
                              rows="8"
                            ></textarea>
                          </fieldset>
                          <fieldset className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              value={value.email}
                              onChange={this.handleChange}
                              name="email"
                            />
                          </fieldset>
                          <fieldset className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-lg"
                              placeholder="New Password"
                              onChange={this.handleChange}
                              name="password"
                            />
                          </fieldset>
                          <button
                            className="btn btn-lg btn-primary pull-xs-right float-right"
                            type="submit"
                            id="specialbutton"
                          >
                            Update Settings
                          </button>
                        </fieldset>
                      </form>
                      <hr />
                      <button
                        className="btn btn-outline-danger"
                        onClick={this.handleLogOut}
                      >
                        Or click here to logout.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </FormConsumer>
    );
  }
}
