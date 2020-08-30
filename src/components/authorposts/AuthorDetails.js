import React, { Component } from "react";
import axios from "axios";
import "./AuthorDetails.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedToggle from "../posts/FeedToggle";
import Post from "../posts/Post";
import { FormConsumer } from "../contexts/FormContext";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import getjwt from "../helpers/jwt";
export default class AuthorDetails extends Component {
  state = {
    data: [],
    favorites: [],
    follow: false,
    email: "",
  };

  handleFavorite = () => {
    axios
      .get(
        `https://conduit.productionready.io/api/articles?favorited=${this.props.match.params.username}`
      )
      .then((res) => {
        this.setState({ favorites: res.data.articles });
      })
      .catch((err) => console.log(err));
  };
  handleFollow = () => {
    const jwt = getjwt();
    if (this.state.follow === false) {
      axios
        .post(
          `https://conduit.productionready.io/api/profiles/${this.props.match.params.username}/follow`,
          { user: { email: `${this.state.email}` } },
          {
            headers: { Authorization: `Token ${jwt}` },
          }
        )
        .then((res) => {
          this.setState({ follow: !this.state.follow });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .delete(
          `https://conduit.productionready.io/api/profiles/${this.props.match.params.username}/follow`,
          {
            headers: { Authorization: `Token ${jwt}` },
          }
        )
        .then((res) => {
          this.setState({ follow: false });
        })
        .catch((err) => console.log(err));
    }
  };
  componentDidMount() {
    const jwt = getjwt();
    axios
      .get(
        `https://conduit.productionready.io/api/articles?author=${this.props.match.params.username}`
      )
      .then((res) => {
        this.setState({ data: res.data.articles });
      });
    axios
      .get("https://conduit.productionready.io/api/user", {
        headers: { Authorization: `Token ${jwt}` },
      })
      .then((res) => {
        this.setState({ email: res.data.user.email });
      })
      .catch((error) => console.log(error));
  }
  render() {
    let path = this.props.location.pathname;
    const item = this.state.data.map((post) => (
      <Post data={post} key={Math.random()} />
    ));
    const favorites = this.state.favorites.map((fav) => (
      <Post data={fav} key={Math.random()} />
    ));
    return (
      <FormConsumer>
        {(value) => {
          if (this.state.data.length > 0) {
            return (
              <div>
                <div className="container-fluid author">
                  <div className="container author-details text-center py-5 mb-5">
                    <img
                      src={this.state.data[0].author.image}
                      height="50px"
                      alt=""
                    />
                    <h2 className="pt-2">
                      {this.state.data[0].author.username}
                    </h2>
                    {value.user === this.state.data[0].author.username ? (
                      <Link to="/settings">
                        <button className="float-right btn btn-sm btn-outline-secondary">
                          <FontAwesomeIcon icon={faCog} />
                          Edit Profile Settings
                        </button>
                      </Link>
                    ) : (
                      <div>
                        {this.state.follow ? (
                          <button
                            className="float-right btn btn-sm btn-outline-secondary"
                            onClick={this.handleFollow}
                          >
                            <FontAwesomeIcon icon={faPlus} />

                            {`Unfollow ${this.props.match.params.username}`}
                          </button>
                        ) : (
                          <button
                            className="float-right btn btn-sm btn-outline-secondary"
                            onClick={this.handleFollow}
                          >
                            <FontAwesomeIcon icon={faPlus} />

                            {`Follow ${this.props.match.params.username}`}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="container">
                  {path ===
                  `/users/${this.props.match.params.username}/favorites` ? (
                    <ul>
                      <FeedToggle
                        class="not-active"
                        href={`/users/${this.props.match.params.username}`}
                        title="My Articles"
                      />
                      <li className="pl-3" onClick={this.handleFavorite}>
                        <FeedToggle
                          class="active"
                          href={`/users/${this.props.match.params.username}/favorites`}
                          title="Favorited Articles"
                        />
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <FeedToggle
                        class="active"
                        href={`/users/${this.props.match.params.username}`}
                        title="My Articles"
                      />
                      <li className="pl-3" onClick={this.handleFavorite}>
                        <FeedToggle
                          class="not-active"
                          href={`/users/${this.props.match.params.username}/favorites`}
                          title="Favorited Articles"
                        />
                      </li>
                    </ul>
                  )}

                  <hr />
                  {path ===
                  `/users/${this.props.match.params.username}/favorites` ? (
                    <div>{favorites}</div>
                  ) : (
                    <div>{item}</div>
                  )}
                </div>
              </div>
            );
          } else {
            return <div className="text-center">Loading...</div>;
          }
        }}
      </FormConsumer>
    );
  }
}
