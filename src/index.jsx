import React from "react";
import ReactDOM from "react-dom/client";

// A basic JSX element
const handle = (
  <h1 className="smthg" tabIndex="5">
    hiii sans u doing grt
  </h1>
);

// A functional component
const HandlerComp = () => {
  return <h1>smthg smthg me made a component</h1>;
};

// React DOM render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {handle}
    <HandlerComp />
  </>
);
