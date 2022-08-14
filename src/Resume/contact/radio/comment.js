import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Comment = () => {
  const [state, handleSubmit] = useForm("mrgdgpwn");
  if (state.succeeded) {
    return <p>Thanks for Information</p>;
  }
  return (
    <div className="ss">
      <div className="ds">
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Leave a comment!</label>
          <textarea className="textarea-1" />
          <ValidationError
            prefix="Comment"
            field="comment"
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
export default Comment;
