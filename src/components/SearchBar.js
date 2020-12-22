import React, { useEffect, useRef } from "react";

function SearchBar({ handleChange, handleSubmit }) {
  useEffect(() => {
    search.current.focus();
  }, []);
  const search = useRef(null);
  return (
    <>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <input type="text" ref={search} placeholder="Enter artist or song name" onChange={handleChange} />
        <button className="btn-submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
