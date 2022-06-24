import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  let todos = [
    {sno: 1,
    title:"go to market",
    desc: "please go"},
    {sno: 2,
    title:"go to market",
    desc: "please go"},
    {sno: 3,
    title:"go to market",
    desc: "please go"}  
  ];
  return (
    <>
      <Header title="toapp" searchBar = {false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
