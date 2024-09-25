import React from "react";
import Navbar from "./navbar";
import Bunk from "./bunk";
import Footer from "./footer";
import "./bunk.css"; // Shared styles for the Bunk component
import "./navbar.css"; // Shared styles for the Navbar
import "./footer.css"; // Shared styles for the Footer

const App = () => {
  return (
    <div>
      <Navbar />
      <Bunk />
      <Footer />
    </div>
  );
};

export default App;
