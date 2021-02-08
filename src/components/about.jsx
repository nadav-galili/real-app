import React, { Component } from 'react';
import PageHeader from "./common/page-header";

class About extends Component {

  state = {  }

  render() { 
    return (       
    <div className="container">
    <PageHeader>About Our App</PageHeader>
    <div className="row">
      <div className="col-12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed aspernatur dolorum enim nulla sunt deserunt aut? Error, id ratione.</p>
      </div>
    </div>
  </div> );
  }
}
 
export default About;