import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="heading" tabIndex="2">
        Namaste React using jsx
    </h1>
);

// functional component
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste react functional component</h1>
    </div>
);

console.log(HeadingComponent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
