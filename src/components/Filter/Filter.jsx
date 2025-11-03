import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../features/contacts/contactsSlice";
import "./Filter.css";

export default function Filter() {
  const filter = useSelector((state) => state.contactsState.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={(e) => dispatch(updateFilter(e.target.value))}
      />
    </div>
  );
}
