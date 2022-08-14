
import React, { useState } from "react";

export default function Togglevisible({ children }){
    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
      }

    var buttonText = show ? "HIDE" : "CLICK ME TO GET MY CONNECT";

    return (
        <div className="container">
            {show && children}
            <button className="btn-show" onClick={toggleShow}>{buttonText}</button>
        </div>
    );
}