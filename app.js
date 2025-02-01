
/**
 * 
 *<div>
 *  <div>
 *      <h1></h1>
 *  </div>
 *</div> 
 * 
 */


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},[
            React.createElement("h1", {}, "welcome akhilesh"), 
            React.createElement("h2", {}, "react chapter 1")
        ])
    )
 )

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

