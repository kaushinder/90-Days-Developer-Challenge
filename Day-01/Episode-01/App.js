/**
 * <div id="parent">
 *
 *   <div id="child1">
 *    <h1>I'm an h1 Tag</h1>
 *    <h2>I'm an h2 Tag</h2>
 *   </div>
 *
 *   <div id="child2">
 *    <h1>I'm an h1 Tag</h1>
 *    <h2>I'm an h2 Tag</h2>
 *   </div>
 *
 * </div>
 *
 * React.createElement() => Object => HTML (DOM)
 *
 */

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello World using React!",
// ); // Create a React element

// console.log(heading); // Object representation of the React element

// const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root for rendering

// root.render(heading); // Renders the heading in the DOM

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag"),
      ],
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag"),
      ],
    ),
  ],
);

// JSX

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root for rendering

root.render(parent); // Renders the parent in the DOM
