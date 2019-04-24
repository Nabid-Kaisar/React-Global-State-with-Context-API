import React, { Component } from "react";
import PrintId from "./printId/PrintId";
import PrintWork from "./printWork/PrintWork";

//importing global state provider
import StateProvider from "./StateProvider";

class App extends Component {
  render() {
    return (
      <StateProvider>
        <PrintId />
        <PrintWork />
      </StateProvider>
    );
  }
}

export default App;
