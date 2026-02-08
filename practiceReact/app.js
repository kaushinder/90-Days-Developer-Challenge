import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent", key: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", { id: "heading", key: "heading1" }, "Heading1"),
//     React.createElement("h2", { id: "heading", key: "heading2" }, "Hello React by JSX"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h2", { id: "heading", key: "heading2" }, "Hello React by JSX"),
//     React.createElement("h1", { id: "heading", key: "heading1" }, "Heading2"),
//   ]),
// ]);



const Heading1 = () => <h1 className="heading1">Hello React by JSX1</h1>;

const number = 1000;

const Title = () => {
  return <h1>Hello React by JSX3</h1>;
};

const Heading4 = () => {
  return (
    <div>
      
      <h1>Hello React by JSX4</h1>
    </div>
  );
};

const Heading2 = () =>{
  return (
    <div id="conatiner">
      {number}
      <Heading1></Heading1>
      <h1>Hello React by JSX2</h1>
      {Title()}
      <Heading4/>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2/>);

console.log(<Heading2/>);
