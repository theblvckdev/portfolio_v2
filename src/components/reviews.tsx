import InfiniteSlider from "./ui/infinite_slider";

const Reviews = () => {
  return (
    <>
      <section
        id="reviews"
        className="md:py-[5rem] py-[3rem] px-3 overflow-x-hidden w-screen"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center lg:text-5xl md:text-3xl text-2xl font-bold text-white font-poppins capitalize"
        >
          Kind words from{" "}
          <span className="text-primary-0">satisfied clients</span>.
        </h1>

        <div className="mt-10">
          <InfiniteSlider />
        </div>
      </section>
    </>
  );
};

export default Reviews;
