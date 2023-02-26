import React, { useState } from "react";
import { emailsender } from "../action/email";
import "./Email.css";

const Email = () => {
  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailsender(email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Email ">
        <input
          required
          type="email"
          name="email"
          value={email?.email}
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
          placeholder="Enter your email-id to subscribe to our newsletter"
        />
        <button>Subscribe</button>
      </div>
    </form>
  );
};

export default Email;
