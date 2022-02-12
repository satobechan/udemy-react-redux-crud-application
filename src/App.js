import { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => console.log("I am clicked!")} />
      </Fragment>
    );
  }
}

export default App;
