import React, { Component } from "react";
import { GlobalContext } from "../StateProvider";

export default class PrintId extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <React.Fragment>
            <p>{context.globalState.id}</p>
            <button
              onClick={() => {
                context.changeStateFn._changeId(context.globalState.id + 1);
              }}
            >
              Increment
            </button>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}
