import React from "react";
import "./navbar.css"; // Use the updated CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="ide-buttons">
          <span className="ide-button red"></span>
          <span className="ide-button yellow"></span>
          <span className="ide-button green"></span>
        </div>
        <div className="tabs">
          <div className="tab active-tab">Bunk-Maadi</div>
          <div className="tab">Utils.js</div>
          <div className="tab">Styles.css</div>
        </div>
      </nav>
      <div className="breadcrumb">
        <span>~/Projects/BunkApp/src/main.js</span>
      </div>
      <div className="status-bar">
        <span>UTF-8</span>
        <span className="divider">|</span>
        <span>JavaScript</span>
        <span className="divider">|</span>
        <span>Line 1, Column 1</span>
      </div>
    </div>
  );
};

export default Navbar;
