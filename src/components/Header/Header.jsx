import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header" onClick={() => window.scroll(0, 0)}>
      🎬Entertainment HUB 🎬
    </div>
  );
};

export default Header;
