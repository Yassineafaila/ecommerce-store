import React from "react";
import "./Header.scss"
function Header({children}) {
  return (
      <header className="container__header">{children}</header>
  );
}

export default Header;
