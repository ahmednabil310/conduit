import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {  Route, HashRouter } from "react-router-dom";
import SignIn from "./components/Forms/SignIn";
import SignUp from "./components/Forms/SignUp";
import Home from "./components/pages/Home";
import AuthorDetails from "./components/authorposts/AuthorDetails";
import Article from "./components/article/Article";
import Editor from "./components/pages/editor/Editor";
import Settings from "./components/pages/settings/Settings";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/users/:username" component={AuthorDetails} />
        <Route path="/article/:articlename" component={Article} />
        <Route path="/editor" component={Editor} />
        <Route path="/settings" component={Settings} />
      </div>
    </HashRouter>
  );
}

export default App;
