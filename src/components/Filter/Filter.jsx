import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import "./Filter.css";

export default function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
}
