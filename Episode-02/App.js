import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1", key: "child1" },
      [
        React.createElement("h1", { key: "child1-h1" }, "I'm an h1 Tag"),
        React.createElement("h2", { key: "child1-h2" }, "I'm an h2 Tag"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" },
      [
        React.createElement("h1", { key: "child2-h1" }, "I'm an h1 Tag"),
        React.createElement("h2", { key: "child2-h2" }, "I'm an h2 Tag"),
      ]
    ),
  ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
