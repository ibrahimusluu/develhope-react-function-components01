import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      // [name]: name !== "remember" ? value : checked,
    });
  };

  handleClickButton = () => {
    // When clicked, "the event handler attached to the button" should call an "onLogin" function
    this.onLogin();
  };

  onLogin = () => {
    // passed as a prop to the Login component, passing it the state.
    this.setState((myState) => {
      // console.log("props: ", this.props.login);
      myState.login = this.props.login;
      // console.log(myState);
    });
    // this.state.login = "test";
    console.log(this.state);
  };

  handleResetButton = () => {
    // const reset = document.querySelector("#reset");
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  componentDidMount() {
    const button = document.getElementById("button"); // is it possible to use this statement as global, so that define once?
    const reset = document.querySelector("#reset");

    button.disabled = true; // here worked
    button.style.marginRight = 10 + "px";

    reset.disabled = true;
  }

  componentDidUpdate() {
    // console.log("username: ", this.state.username);
    // console.log("password: ", this.state.password);
    // console.log("remember: ", this.state.remember);
    const button = document.getElementById("button");
    const reset = document.querySelector("#reset");
    if (this.state.username !== "" && this.state.password !== "") {
      button.disabled = false;
    } else {
      button.disabled = true;
    }

    if (
      this.state.username !== "" ||
      this.state.password !== "" ||
      this.state.remember !== false
    ) {
      reset.disabled = false;
    } else {
      reset.disabled = true;
    }
  }

  render() {
    const passwordLength = this.state.password.length;
    let loginButtonStyle;
    if (passwordLength !== 0) {
      loginButtonStyle = {
        backgroundColor:
          passwordLength > 0 && passwordLength < 8 ? "red" : "green",
        color: passwordLength > 0 && passwordLength < 8 ? "white" : "black",
      };
    }

    console.log(passwordLength);
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChangeInput}
        />
        <br />
        <br />
        <button
          id="button"
          style={loginButtonStyle}
          onClick={this.handleClickButton}
        >
          Login
        </button>
        <button id="reset" onClick={this.handleResetButton}>
          Reset
        </button>
      </div>
    );
  }
}
