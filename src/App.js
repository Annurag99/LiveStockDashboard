import React, { Component } from "react";
import "./App.css";
import LiveStockBoard from "./components/LiveStockBoard.jsx";

class App extends Component {
  state = {
    hasError: false,
    showSpinner: true,
  };

  static getDerivedStateFromError(error) {
    console.log("some error has occured");
    return { hasError: true };
  }

  // logging error
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  hideSpinner = () => {
    this.setState({ showSpinner: false });
  };

  render() {
    if (this.state.hasError) {
      return Error;
    }
    return (
      <div className="App">
        <LiveStockBoard
          hideSpinner={this.hideSpinner}
          showSpinner={this.state.showSpinner}
        />
      </div>
    );
  }
}

export default App;
