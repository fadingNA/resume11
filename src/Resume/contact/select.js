import {useEffect, useState} from "react";
import React from "react";
import Comment from "./radio/comment";
import Hiring from "./radio/hiring";

function Selection() {
    const [radio, setRadio] = useState("selectRadioOption");

    const [hiring, setHringVisible] = useState(false);

    const [comment, setCommentisible] = useState(false);

    useEffect(() => {
        if (radio === "hiring") {
            setHringVisible(true);
        } else {
            setHringVisible(false);
        }
        radio === "comment" ? setCommentisible(true) : setCommentisible(false);
    }, [radio]);

    const letterBig = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const handleOnchange = (e) => {
        setRadio(e.target.value);
    };

    const Result = () => {
        let result;
        radio === "selectRadioOption"
            ? (result = "select something")
            : (result = letterBig(radio));
        return result;
    };

    return (
        <div className="container mt-3">
            <h2>Finally: {Result()}</h2>
            <div className="mt-4">
                <select className="select" value={radio} onChange={handleOnchange}>
                    <option value="selectRadioOption">Select your enquiry</option>
                    <option value="comment">Comment</option>
                    <option value="no select">Nothing</option>
                    <option value="hiring">Hiring</option>
                </select>
            </div>
            {hiring && <Hiring/>}
            {comment && <Comment/>}
        </div>
    );
}

export default Selection;
