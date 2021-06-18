import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function ContactForm() {
  return (
    <div>
    <form className="box">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="name" placeholder="Name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alex@example.com" />
          </div>
        </div>
      
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <input className="input" type="message" placeholder="Message" />
          </div>
        </div>
      
        <button className="button">Submit</button>
      </form>
      </div>
  );
}

export default ContactForm;
