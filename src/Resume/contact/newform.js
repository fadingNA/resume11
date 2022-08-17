import React, {useState} from "react";
import "./newform.css";

const FormInput = (props) => {
    const [focus, setFocus] = useState(false);

    const handleFocus = (e) => {
        setFocus(true);
    }

    const {label, errorMessage, onChange, id, ...inputProps} = props;
    return (
        <div className={"formInput"}>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}
                   onBlur={handleFocus}
                   onFocus={() =>
                       inputProps.name === "lastname" && setFocus(true)}
                   focus={focus.toString}
            />
            <span className={"error-msgs"}>{errorMessage}</span>
        </div>
    )
}

export default FormInput;