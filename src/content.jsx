import React from "react";
import "./index.css";

class Content extends React.Component {
  render() {
    return (
      <div className="content1">
        <h2 className="post">Latest Posts</h2>
        <h3 className="cat">Filter by category</h3>
        <div className="choice">
          <ul className="choice1">
            <li className="choice2">
              <a href="#All">All</a>
            </li>
            <li className="choice2">
              <a href="#html">Html</a>
            </li>
            <li className="choice2">
              <a href="#css">Css</a>
            </li>
            <li className="choice2">
              <a href="#js">Java script</a>
            </li>
            <li className="choice2">
              <a href="#mb">MangoDB</a>
            </li>
            <li className="choice2">
              <a href="#exp">Express</a>
            </li>
            <li className="choice2">
              <a href="#rea">React.js</a>
            </li>
            <li className="choice2">
              <a href="#node">Node.js</a>
            </li>
            <li className="choice2">
              <a href="#others">Others</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Content;
