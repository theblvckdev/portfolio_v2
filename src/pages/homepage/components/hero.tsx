import { IoPaperPlane } from "react-icons/io5";
import Bg from "../../../assets/images/bg.png";
import MagicButton from "../../../components/ui/magic_button";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-screen flex items-center justify-center relative">
        <div className="absolute top-0 left-0 h-full w-full -z-10">
          <img
            data-aos="fade-in"
            data-aos-duration="2000"
            src={Bg}
            className="w-full h-full"
            alt="bg gradiant image"
          />
        </div>
        <div className="text-center">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-8xl capitalize font-bold text-white"
          >
            Transforming Concepts into
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-8xl capitalize font-bold text-white"
          >
            Seamless <span className="text-primary-0">User Experiences</span>
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-3xl capitalize font-semibold text-gray-400 mt-5"
          >
            Hello 👋! I'm Nathan, a React/Next.js Developer.
          </h3>
          <div className="mt-2" data-aos="fade-up" data-aos-duration="2000">
            <MagicButton
              title="Explore projects"
              icon={<IoPaperPlane />}
              position="right"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
