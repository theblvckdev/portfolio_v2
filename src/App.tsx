import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/ui/navbar";
import Hero from "./components/hero";
import Grid from "./components/gird";

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
    </>
  );
};

export default App;
