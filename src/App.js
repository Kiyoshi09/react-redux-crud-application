//import React, { Component } from "react";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  const decrement = () => setCounter((prevCounter) => prevCounter - 1);

  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   handlePlusButton = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   handleMinusButton = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div>counter : {this.state.count}</div>
//         <button onClick={this.handlePlusButton}>+1</button>
//         <button onClick={this.handleMinusButton}>-1</button>
//       </React.Fragment>
//     );
//   }
// }

export default App;
