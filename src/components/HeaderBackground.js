import React from "react";

import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
function HeaderBackground({ handleChange, handleSubmit }) {
  return (
    <>
      <div className="header-background">
        <div className="overlay">
          <div className="container">
            <Header />
            <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBackground;
