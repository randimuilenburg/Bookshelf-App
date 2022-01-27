// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage.jsx";

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
//   // state = {};
// }

// constructor();
// {
//   super();
// }

// render();
// {
//   return (
//     <div>
//       <img
//         className="bookshelf"
//         src={require("./src/media/Bookshelf.jpg")}
//         alt={"Bookshelf"}
//       />
//     </div>
//   );
// }

function App() {
  return <MainPage />;
}

export default App;
