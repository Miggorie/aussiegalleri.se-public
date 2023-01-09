import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton,
} from "./css/search-bar-style";

function SearchBar() {
  const [search, setDogSearch] = useState([]);

  const handleClick = () => {};
  return (
    <SearchBarContainer>
      <SearchBarInput placeholder="Sök efter hund" />
      <SearchBarButton onClick={handleClick}>
        <FaSearch />
      </SearchBarButton>
    </SearchBarContainer>
  );
}

export default SearchBar;
