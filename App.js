/*
 *<div id='parent'>
 *    <div id="child">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h2 tag</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h2 tag</h2>
 *    </div>
 *</div>
 */

import React from "react";
import ReactDOM from "react-dom/client";

// ? const parent = React.createElement("div", { id: "parent" }, [
// ?   React.createElement("div", { id: "child" }, [
// ?     React.createElement("h1", {}, "I'm h1 tag"),
// ?     React.createElement("h2", {}, "I'm h2 tag"),
// ?   ]),
// ?   React.createElement("div", { id: "child2" }, [
// ?     React.createElement("h1", {}, "I'm h1 tag"),
// ?     React.createElement("h2", {}, "I'm h2 tag"),
// ?   ]),
// ? ]);

// ? console.log(parent);
// ? const root = ReactDOM.createRoot(document.getElementById("root"));
// ? root.render(parent);

//! React.createElement => ReactElement-JS Object => HTMLElement(render)/
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

//! JSX (Transpiled before it reaches the JS) - PARCEL - Babel
//! JSX => Babel transpiles it to React.createElement => ReactElement-JS OBject => HTMLElement(render)

const jsxheading = (
  <h1 id="heading" className="head" tabIndex={1}>
    Namaste React
  </h1>
);
console.log(jsxheading);

console.log(heading === jsxheading);

//! React Components
//! Class Based
//! Functional Components -> A JavaScript function that returns a React Element or some piece of jsx
const HeadingComponent1 = () => (
  <h1 id="head1">Namaste React Functional Component - 1</h1>
);
const HeadingComponent2 = () => {
  return <h1 id="head2">Namaste React Functional Component - 2</h1>;
};
const HeadingComponent3 = () => (
  <div>
    <HeadingComponent1 />
    <HeadingComponent2 />
    <HeadingComponent1 />
    <HeadingComponent2 />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeadingComponent3 />);
