import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../features/contacts/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

export default function ContactList() {
  const { contacts, filter } = useSelector((state) => state.contactsState);
  const dispatch = useDispatch();

  const normalized = filter.toLowerCase();
  const visible = contacts.filter((c) =>
    c.name.toLowerCase().includes(normalized)
  );

  return (
    <ul className="contact-list">
      {visible.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}
