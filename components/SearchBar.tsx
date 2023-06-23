"use client";

import React from "react";
import Image from "next/image";

import ComboBox from "./ComboBox";

import SearchButton from "./SearchButton";

const SearchBar: React.FC = () => {
  const [manufacturer, setManufacturer] = React.useState<string>("");
  const [model, setModel] = React.useState<string>("");

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={() => handleSearch()}>
      <div className="searchbar__item">
        <ComboBox
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input ml-2"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
