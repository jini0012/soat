import React, { useState } from "react";
import { TextInput } from "../controls/Inputs";

export default function Hedaer() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <header>
      <h1>
        <img src="images/icons/logo-temp.svg" alt="soat" />
      </h1>
      <TextInput value={searchValue} onChange={setSearchValue} />
    </header>
  );
}
