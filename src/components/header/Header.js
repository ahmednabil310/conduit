import React, { Component } from "react";
import "./header.scss";
import { FormConsumer } from "../contexts/FormContext";
export default class Header extends Component {
  render() {
    return (
      <FormConsumer>
        {(value) => {
          if (value.login === false) {
            return (
              <div className="container-fluid header d-flex justify-content-center align-items-center py-3 mb-3">
                <header>
                  <h1 className="text-center pt-3">conduit</h1>
                  <p>A place to share your knowledge.</p>
                </header>
              </div>
            );
          }
        }}
      </FormConsumer>
    );
  }
}
