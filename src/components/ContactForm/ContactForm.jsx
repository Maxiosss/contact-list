import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../features/contacts/contactsSlice";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contactsState.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    if (!trimmedName || !trimmedNumber) return;

    const exists = contacts.some(
      (c) => c.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (exists) {
      alert(`${trimmedName} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: trimmedName, number: trimmedNumber }));
    setName("");
    setNumber("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}