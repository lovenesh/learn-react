//create element to pass in root
const heading = React.createElement("h1",{id:"title"},"Hollla ... Nameste Everyone..!");


//get root from element.
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element in the root
root.render(heading);