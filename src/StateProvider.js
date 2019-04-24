import React, { Component } from "react";

export const GlobalContext = React.createContext();

export default class StateProvider extends Component {
  state = {
    id: 23,
    pid: 0,
    name: "John",
    work: "done"
  };

  changeStateFn = {
    _changeId: id => {
      this.setState({ id });
    },
    _changePId: id => {
      this.setState({ id });
    },
    _changeName: id => {
      this.setState({ id });
    },
    _changeDone: id => {
      this.setState({ id });
    }
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{ globalState: this.state, changeStateFn: this.changeStateFn }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
