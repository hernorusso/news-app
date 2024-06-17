"use client";

const FilterError = ({ error }) => (
  <div id="error">
    <h2>An Error Ocurred</h2>
    <p>{error.message}</p>
  </div>
);

export default FilterError;
