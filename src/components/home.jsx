import React, { Component } from "react";
import PageHeader from "./common/page-header";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <PageHeader>Real App Home Page</PageHeader>
        <div className="row">
          <div className="col-12">
            <p>
              This is a demo site for creating and displaying business cards
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
