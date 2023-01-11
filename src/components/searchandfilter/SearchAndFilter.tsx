import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from "./DropdownStyles";

interface DropdownProps {
  buttonText: string;
  options: string[];
}

const Dropdown = ({ buttonText, options }: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{buttonText}</DropdownButton>
      <DropdownMenu open={dropdownOpen}>
        {options.map((option) => (
          <DropdownItem>{option}</DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

const SearchAndDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const SearchAndDropdown = () => {
  return (
    <SearchAndDropdownContainer>
      <Dropdown
        buttonText="Filtrera"
        options={["Option 1", "Option 2", "Option 3"]}
      />
      <Dropdown
        buttonText="Sortera"
        options={["Option 1", "Option 2", "Option 3"]}
      />
      <SearchBar />
    </SearchAndDropdownContainer>
  );
};

export default SearchAndDropdown;
