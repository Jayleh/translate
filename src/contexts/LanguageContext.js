// Separate file to only make use of it
// in components that use it
import React, { Component } from 'react';

// english is the Default Value!
const Context = React.createContext();

export class LanguageStore extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
