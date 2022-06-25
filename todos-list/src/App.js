import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  const onDelete = ()=>{
    console.log("onDelete")
  };
  let todos = [
    {sno: 10,
    title:"go to market",
    desc: "please go"},
    {sno: 20,
    title:"go to market2",
    desc: "please godgffs"},
    {sno: 30,
    title:"go to market3",
    desc: "please godfg"}  
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
