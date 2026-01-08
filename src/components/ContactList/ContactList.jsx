import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOperations";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts?.items ?? []);
  const filter = useSelector((state) => state.filter ?? "");

  const normalized = filter.toLowerCase();
  const visible = contacts.filter((c) =>
    c.name.toLowerCase().includes(normalized)
  );

  return (
    <ul className="contact-list">
      {visible.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}
