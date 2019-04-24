import React, { Component } from "react";
import { GlobalContext } from "../StateProvider";

export default class PrintWorkRender extends Component {
  render() {
    return (
      <div>
        <GlobalContext.Consumer>
          {context => <p>{console.log(context)}{context.globalState.work}</p>}
        </GlobalContext.Consumer>
      </div>
    );
  }
}
