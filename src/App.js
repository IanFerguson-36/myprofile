import Navbar from "./components/Navbar/Navbar";
import Bio from "./components/Bio/Bio";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Bio />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
