import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
    const [showPara, setShowPara] = useState(false);

    return (
        <div className="App" id="main">
            {/* // Do not alter the main div */}
            <button id="click" onClick={() => (setShowPara(!showPara))}>{`${showPara ? "Hide" : "Show"} Paragraph`}</button>
            <p id="para" className={showPara ? "show" : "hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        </div>
    );
}

export default App
