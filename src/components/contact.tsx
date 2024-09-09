import MagicButton from "./ui/magic_button";

const Contact = () => {
  return (
    <>
      <section
        className="md:py-[5rem] py-[3rem] max-w-7xl mx-auto xl:px-0 md:px-5 px-3"
        id="contact"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center lg:text-5xl md:text-3xl text-2xl font-bold text-white font-code capitalize max-w-2xl mx-auto"
        >
          Ready to take your{" "}
          <span className="text-primary-0">digital presence</span> to the next
          level?
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto w-fit"
        >
          <MagicButton
            position="right"
            title="Get in touch"
            linkURL="mailto:nathancodes05@gmail.com"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
