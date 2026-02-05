import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement⇒ JS Object ⇒ HTML Element(render)

const jsxHeading = (
  <div>
    <h1 className="heading">Namaste React</h1>
    <h1 className="heading">Episode-03</h1>
  </div>
);

const Title = () => <h1>React Project</h1>;

let number = 1000;
const elem = <span> React Element </span>
// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      {number}
      {elem}
      <h1 className="heading">Namaste React</h1>
      <h1 className="heading">Episode-03</h1>
      <Title />
      {/* <Title></Title>
      {Title()} */}
    </div>
  );
};

// const HeadingComponent = () => <h1>Kaushinder singh raghav</h1>;

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
