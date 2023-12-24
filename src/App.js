import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PortFolio from "./components/PortFolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <PortFolio />
      <Experiences />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
