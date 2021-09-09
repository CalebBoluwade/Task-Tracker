import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav id="header">
      <span>
        <div>
          <img
            src="/Running_icon.svg"
            id="site-logo"
            alt=""
            width="52"
            height="52"
          />
        </div>
        <div style={{ paddingTop: 15 }}>
          <h1>TASKTRACKER</h1>
        </div>
      </span>
      <span>
        <div>
          <SearchBar />
        </div>
      </span>
    </nav>
  );
};

export default Header;
