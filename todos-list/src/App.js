import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  let myVariable = 33;
  return (
    <>
      <Header title="toapp" searchBar = {false} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
