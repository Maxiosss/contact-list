import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOperations";
import { selectVisibleContacts } from "../../redux/contactsSelectors";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisibleContacts);

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
