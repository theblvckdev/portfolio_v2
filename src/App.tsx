import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/ui/navbar";
import Hero from "./components/hero";
import Grid from "./components/grid";
import Projects from "./components/projects";
import Reviews from "./components/reviews";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AnimatedCursor from "react-animated-cursor";

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
      <Contact />
      <Footer />

      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        color="203,172,249"
        outerAlpha={0.2}
        innerScale={0.7}
        outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid rgb(203,172,249)",
        }}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default App;
