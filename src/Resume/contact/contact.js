import React from "react";
import {useForm, ValidationError} from "@formspree/react";
import "./contact.css";
import Selection from "./select";

export default function Contact() {
    const [state, handleSubmit] = useForm("mrgdgpwn");
    if (state.succeeded) {
        return <p className="submite-succeed">Thank YOU</p>;
    }
    return (
        <>
            <div className="submitForm">
                <form onSubmit={handleSubmit}>
                    <br/>
                    <br/>
                    <label htmlFor="name">FULL NAME</label>
                    <input id="name" type="name" name="fullname"/>

                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email"/>

                    <label htmlFor="Address">Address</label>
                    <input id="address" type="address" name="address"/>

                    <label htmlFor="City">City</label>
                    <input id="city" type="city" name="city"/>

                    <label htmlFor="Postal">Postal Code</label>
                    <input id="postal" type="postal" name="postal"/>

                    <div className="radion-select">
                        <Selection/>
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors}/>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <ValidationError
                        prefix="Address"
                        field="address"
                        errors={state.errors}
                    />
                    <ValidationError prefix="City" field="city" errors={state.errors}/>
                    <ValidationError
                        prefix="postal"
                        field="postal"
                        errors={state.errors}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <br/>
                    <br/>

                    <button
                        className="btn-submit"
                        type="submit"
                        disabled={state.submitting}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
/*
  <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="btn-form" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
*/
