import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <span className="header-logo-text">Image Viewer</span>
      </header>
    );
  }
}

export default Header;