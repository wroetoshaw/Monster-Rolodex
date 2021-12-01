import React from "react";
import "./search-box.component.css";

export const SearchBox = ({ handleChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder="search monsters"
    onChange={handleChange}
  />
);
