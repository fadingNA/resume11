import React, {useState} from "react";

import "./contact.css";
import Selection from "./select";
import FormInput from "./newform";
import {useForm} from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("mrgdgpwn");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    const [values, setValues] = useState({
        firstname: "",
        lastName: "",
        AddressName: "",
        City: "",
        Postal: "",
        phone: ""
    })


    const input = [{
        id: 1, name: "firstName", type: "text", placeholder: "FirstName",
        errorMessage: "Incorrect Firstname", label: "FirstName",
        pattern: "^[A-Za-z0-9]{3,16}$", required: true
    }, {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "lastName",
        errorMessage: "Incorrect Lastname",
        label: "lastName", required: true
    }, {
        id: 3, name: "Address", type: "text", placeholder: "Address", label: "Address", required: true
    }, {
        id: 4, name: "City", type: "text", placeholder: "City", label: "City", required: true
    }, {
        id: 5,
        name: "PostalCode",
        type: "text",
        placeholder: "PostalCode",
        errorMessage: "Incorrect Postal Code",
        label: "PostalCode", required: true
    }, {
        id: 6,
        name: "PhoneNum",
        type: "text",
        placeholder: "PhoneNum",
        errorMessage: "Only Number",
        label: "PhoneNum",
        required: true
    },
        {
            id: 7,
            name: "Email",
            type: "email",
            placeholder: "Email",
            errorMessage: "please include @",
            label: "Email",
            required: true
        }


    ];

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }


    return (<>
        <div className={"set-all"}>
            <form onSubmit={handleSubmit}>
                <br/>
                <br/>
                <h1>Contact me</h1>
                {input.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}

                <div className="radion-select">
                    <Selection/>
                </div>
                <button className={"submit-btn"}
                        type="submit"
                        disabled={state.submitting}
                >
                    Submit
                </button>
            </form>
        </div>
    </>);
}
