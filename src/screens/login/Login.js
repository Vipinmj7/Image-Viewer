import React, { Component } from "react";
import Header from "../../common/header/Header";
import { Redirect } from "react-router";

import './Login.css';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
const styles = {
  card: {
    padding: "15px",
    position: "relative",
    top: "20px",
    left: "50%",
    width: "325px",
    transform: "translateX(-50%)",
  },
  title: {
    fontSize: 20,
  },
};
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      reqpassword: "dispNone",
      requsername: "dispNone",
      isLoggedIn: "false",
      incorrectUsernamePassword: "dispNone"
    };
  }
  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  loginHoverHandler = (e) => {
    e.target.style.cursor = "pointer";
  };
  loginClickHandler = () => {

    this.setState({ incorrectUsernamePassword: "dispNone" });

    this.state.username.trim() === ""? this.setState({ requsername: "dispBlock" }): this.setState({ requsername: "dispNone" });
    this.state.password.trim() === ""? this.setState({ reqpassword: "dispBlock" }): this.setState({ reqpassword: "dispNone" });

    if (
      this.state.username.trim() === "admin" &&
      this.state.password.trim() === "password"
    ) {
      console.log("Authenticated");
      sessionStorage.setItem(
        "access-token",
        "IGQVJXOFdRVTJnQU03bHlCaTFZASUItVzl6WHRPMnJhWlF2RlR1dzRNaHZALV3RpdHp4U3RaZAGhYSDdaNDlILW1xUmljRVdwdmR1bVM2TmgzckxFcnVvdWl3QVBoOXRuWlMyRlhvSGdQZAndDSVFSOVpiUzdheWs4YUdRaW9J"
      );
      this.setState({ incorrectUsernamePassword: "dispNone" });
      this.props.onIsLoggedInChanged(true);
    } else {
      this.setState({ incorrectUsernamePassword: "dispBlock" });
    }
  };

  render() {
    if (this.props.isLoggedIn === true) {
      console.log("Redirected");
      return (
        <Redirect to={{ pathname: "/home", state: { loginSuccess: true } }} />
      );
    }
    return (
      <div>
        <Header  
          isLoggedIn={this.props.isLoggedIn}
          onIsLoggedInChanged={this.onLoginChange}
          {...this.props}
          />
        <Card style={styles.card}>
          <CardContent>
            <Typography style={styles.title}>LOGIN</Typography>
            <br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel htmlFor="username"> Username </InputLabel>
              <Input
                id="username"
                type="text"
                username={this.state.username}
                onChange={this.inputUsernameChangeHandler}
              />
              <FormHelperText className={this.state.requsername}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel>Password</InputLabel>
              <Input
                id="password"
                type="password"
                password={this.state.password}
                onChange={this.inputPasswordChangeHandler}
              />
              <FormHelperText className={this.state.reqpassword}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <div className={this.state.incorrectUsernamePassword}>
              <span className="red"> Incorrect username and/or password </span>
            </div>
            <br />
            <Button
              variant="contained"
              color="primary"
              onMouseOver={this.loginHoverHandler}
              onClick={this.loginClickHandler}
            >
              LOGIN
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
