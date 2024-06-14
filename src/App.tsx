import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/ui/navbar";
import Hero from "./components/hero";
import Grid from "./components/grid";
import Projects from "./components/projects";
import Reviews from "./components/reviews";
import Experience from "./components/experience";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Grid />
      <Projects />
      <Reviews />
      <Experience />
    </>
  );
};

export default App;
