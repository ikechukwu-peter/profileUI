import React, { useState } from "react";
import styled from "styled-components";

function Search({ profiles }) {
  const [setQuery] = useState("");
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div>
      <Box>
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            onChange={handleInput}
            type="text"
            value={search}
            placeholder="Search for profile"
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </Box>
    </div>
  );
}

const SearchForm = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;

  :focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  background: #03bfcb;
  border: none;
  padding: 10px 20px;
  color: white;
`;

const Box = styled.div`
  margin-bottom: 2rem;
  border-radius: 5px;
  max-width: 30rem;
  margin: 0 auto;
`;

export default Search;
