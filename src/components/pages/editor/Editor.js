import React, { Component } from "react";
import axios from "axios";
import getjwt from "../../helpers/jwt";
import "./Editor.scss";
import { FormConsumer } from "../../contexts/FormContext";
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articletitle: "",
      articleabout: "",
      formbody: "",
      tags: [],
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
    const jwt = getjwt();

    axios
      .post(
        "https://conduit.productionready.io/api/articles",
        {
          article: {
            title: this.state.articletitle,
            description: this.state.articleabout,
            body: this.state.formbody,
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
      .then((res) => {
        window.location = `/article/${res.data.article.slug}`;
      })
      .catch((err) => console.log(err.response));
  }
  render() {
    return (
      <FormConsumer>
        {(value) => {
          if (value.login === true) {
            return (
              <div className="container mt-3">
                <div className="row">
                  <div className="col-md-10 col-xs-12 offset-md-1">
                    <form className="pt-3 editor" onSubmit={this.handleSubmit}>
                      <fieldset>
                        <fieldset className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Article Title"
                            onChange={this.handleChange}
                            name="articletitle"
                          />
                        </fieldset>
                        <fieldset className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="What's this article about?"
                            name="articleabout"
                            onChange={this.handleChange}
                          />
                        </fieldset>
                        <fieldset className="form-group">
                          <textarea
                            className="form-control form-control-lg col-12"
                            placeholder="Write your article (in markdown)"
                            onChange={this.handleChange}
                            name="formbody"
                            rows="8"
                          ></textarea>
                        </fieldset>
                        <fieldset className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Enter tags"
                            onChange={this.handleChange}
                            name="tags"
                          />
                          <div className="tag-list"></div>
                        </fieldset>
                        <button
                          className="btn btn-lg pull-xs-right btn-primary float-right"
                          type="submit"
                        >
                          Publish Article
                        </button>
                      </fieldset>
                    </form>
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
