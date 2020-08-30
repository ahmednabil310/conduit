import React, { Component } from "react";
import axios from "axios";
import getjwt from "../helpers/jwt";
const FormContext = React.createContext();
class FormContextProvider extends Component {
  state = {
    login: false,
    user: "",
    authorArticlesAll: [],
    email: "",
  };

  componentDidMount() {
    const jwt = getjwt();
    if (jwt) {
      this.setState({ login: true });
    }
    axios
      .get("https://conduit.productionready.io/api/user", {
        headers: { Authorization: `Token ${jwt}` },
      })
      .then((res) => {
        this.setState({ user: res.data.user.username });
        this.setState({ email: res.data.user.email });
      })
      .catch((error) => console.log(error));
  }
  authorArticles = () => {
    axios
      .get(`https://conduit.productionready.io/api/articles?author=lefa`)
      .then((res) => {
        this.setState({ authorArticlesAll: res.data.articles });
      });
  };
  render() {
    return (
      <FormContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}
const FormConsumer = FormContext.Consumer;
export { FormContextProvider, FormConsumer, FormContext };
