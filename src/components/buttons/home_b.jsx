import React from "react";
import ReactDOM from "react-dom";

class HomeB extends React.Component {
  onclick() {
    window.location.assign("http://localhost:3000/Home/");
  }

  render() {
    return (
      <a onClick={(e) => this.onclick(e)}>
        <i className="fas fa-chart-bar"></i>
      </a>
    );
  }
}
export default Home_button;
