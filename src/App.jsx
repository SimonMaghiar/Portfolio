import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  document.addEventListener(
    'scroll',
    (event) => {
        // handle scroll event
        console.log("hello");
    }, 
    { passive: true }
);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro />
          <Portfolio />
          <Work />
          {/* <Testimonials /> */}
          <Contact />
        </div>
    </div>
  );
}

export default App;
