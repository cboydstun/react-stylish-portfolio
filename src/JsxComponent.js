import React, { Component } from 'react';
class JsxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myname: 'Chris Boydstun',
      myage: '34',
    };
  }
  changemyage = () => {
    this.setState({ myage: '35' }, () => {
      alert('Happy Birthday');
    });
  };
  render() {
    return (
      <div>
        {/* Your Html/JSX code goes here */}
        <h1>This is my component</h1>
        <h2>My Name is {this.state.myname}</h2>
        <h3 onClick={this.changemyage}>My Age is {this.state.myage}</h3>
      </div>
    );
  }
}
export default JsxComponent;
