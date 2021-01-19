import React from "react";

export const Pagination = ({ profilesPerPage, totalProfiles, paginate }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalProfiles / profilesPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
