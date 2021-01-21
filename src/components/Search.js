import React, { useState } from "react";
import styled from "styled-components";

function Search(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };
  return (
    <div>
      <Box>
        <SearchInput
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search your profile"
        />
        <IconSearch class="fas fa-search"></IconSearch>
      </Box>
    </div>
  );
}
const SearchInput = styled.input`

  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;

  :focus {
    outline: none;
  }
`;
const Box = styled.div`
background-color:rgb(179, 184, 205);
margin-bottom:2rem;
border-radius:5px;
  max-width: 30rem;
  margin:  0 auto;
`;
const IconSearch = styled.i`
  /* width: 1rem; */
`;
export default Search;
  