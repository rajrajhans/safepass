import React, { Component } from 'react';

class MyPasswords extends Component {
  constructor(props) {
    super(props);

    this.state = { showLoader: true, passwords: null };
  }
  render() {
    return <div>Logged In</div>;
  }
}

export default MyPasswords;
