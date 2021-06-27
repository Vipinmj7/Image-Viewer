import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import { Redirect } from "react-router";
import profile_pic from "../../common/assets/images/profile_pic.png";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      profilePic: profile_pic,
    };
  }


  onLoginChange = (newStatus) => {
    this.setState({ isLoggedIn: newStatus }, () => {});
  };

  
  render() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/" />;
    }
    if (this.props.isLoggedIn === true) {
      return (
        <>
          <div>
            <Header
              isLoggedIn={this.props.isLoggedIn}
              allPosts={this.state.allPosts}
              showSearchBox={true}
              onIsLoggedInChanged={this.onLoginChange}
              onfilterPostsChange={this.onFilterPosts}
              {...this.props}
            />
          </div>
          <>
          </>
        </>
      );
    }
  }
}
