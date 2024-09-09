// import { IoPaperPlane } from "react-icons/io5";
import MagicButton from "./ui/magic_button";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-screen flex items-center justify-center relative lg:px-0 md:px-5 px-3">
        <div className="text-center">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="xl:text-7xl lg:text-6xl text-4xl capitalize font-poppins font-bold text-white"
          >
            Transforming Ideas Into
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="xl:text-7xl lg:text-6xl text-4xl capitalize font-poppins font-bold text-white"
          >
            Seamless <span className="text-primary-0">User Experiences</span>
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="lg:text-2xl md:text-xl text-base font-code text-gray-400 mt-5"
          >
            Hello!, I'm Nathan, and I'm a Frontend Developer.
          </h3>
          <div className="mt-2" data-aos="fade-up" data-aos-duration="2000">
            <MagicButton
              title="Explore projects"
              icon={false}
              linkURL="#projects"
              position="right"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
