import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../contact.css";


const Hiring = () => {
    const [state, handleSubmit] = useForm("mrgdgpwn");
  if (state.succeeded) {
    return <p>Thanks for Information</p>;
  }
  return (
    <div className="mt-4">
      <div className="fs-3">
        <form onSubmit={handleSubmit}>
          <label htmlFor="hiring">Offer me!</label>
          <input id="hiring" type="hiring" name="hiring" />
          <ValidationError
            prefix="Hiring"
            field="hiring"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </form>
      </div>
    </div>
  );
};

export default Hiring;
