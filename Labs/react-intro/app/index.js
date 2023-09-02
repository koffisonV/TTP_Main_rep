// Your code here!
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter({increment}){
    const [count, setCount] = useState(0);
    function increment()
    { setCount(count+1); }
    return(
        <div id="container">
            <div id="navbar">Counter.js</div>
            <div id="counter">
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Counter />);

/* When the increment button is clicked, it responds to the onClick event 
listener that has the function increment past as an argument. In the 
increment() function, we have a useState initialized with zero that 
increments by 1. count is then updated in the body element.*/