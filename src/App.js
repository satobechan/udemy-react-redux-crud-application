import { Fragment } from "react";

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => console.log("I am clicked!")} />
//       </Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
    </>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
