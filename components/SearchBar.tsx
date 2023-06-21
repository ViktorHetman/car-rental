"use client";

import React from "react";

import ComboBox from "./ComboBox";

const SearchBar: React.FC = () => {
  const [manufacturer, setManufacturer] = React.useState<string>("");

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={() => handleSearch()}>
      <div className="searchbar__item">
        <ComboBox
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
