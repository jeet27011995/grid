import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="headbar">
        <header className="head">
          <div className="logo">Tech</div>
          <p className="stories">Stories</p>
          <div className="categorise">Explore Category</div>
        </header>
      </div>
    );
  }
}

export default Header;
