import React from "react";

function Sort({ setSort }) {
  return (
    <div className="sort">
      <label> SORT </label>
      <select onChange={(event) => setSort(event.target.value)}>
        <option value="">All</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default Sort;
