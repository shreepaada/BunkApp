import React from "react";
import Navbar from "./navbar";
import Bunk from "./bunk";
import Footer from "./footer";
import "./bunk.css";
import "./navbar.css";
import "./footer.css";

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
