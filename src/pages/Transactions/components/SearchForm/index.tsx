import React from "react";
import { SearchFormContainer } from "./styled";
import { MagnifyingGlass } from "phosphor-react";

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
