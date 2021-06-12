import { render } from "@testing-library/react";
import React from "react";
import "./26.1 search-box.styles.css.css";

export const SearchBox = ({ placeholder, handler }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handler}
    />
  );
};
