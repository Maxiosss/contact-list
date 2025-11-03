import React from "react";
import "./ContactItem.css";

const ContactItem = ({ name, number, onDelete }) => (
  <li className="contact-item">
    <span>
      {name}: {number}
    </span>
    <button onClick={onDelete}>Delete</button>
  </li>
);

export default ContactItem;
