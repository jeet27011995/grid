import React from "react";
import "./index.css";

class Table extends React.Component {
  render() {
    let { user } = this.props;
    return (
      <div className="container">
        <div className="cards">
          <div className="img-card">
            <img src={user.img} />
          </div>

          <div className="title">
            <h1>{user.title}</h1>
          </div>
          <span className="h">{user.h}</span>
          <span className="date">{user.date}</span>
          <div className="details">{user.details}</div>
        </div>
      </div>
    );
  }
}

export default Table;
