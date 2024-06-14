const Experience = () => {
  return (
    <>
      <section
        className="md:py-[5rem] py-[3rem] max-w-7xl mx-auto xl:px-0 md:px-5 px-3"
        id="experience"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center lg:text-5xl md:text-3xl text-2xl font-bold text-white font-poppins capitalize"
        >
          <span className="text-primary-0">My Experience</span> From over the
          years.
        </h1>

        <div className="mt-10">
          <div className="relative inline-flex font-code h-full w-full overflow-hidden rounded-xl p-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* remove px-3 py-1, add px-5 gap-2 */}
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm uppercase text-white hover:text-primary-0 duration-200 ease-in backdrop-blur-3xl gap-2`}
            >
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    src={svgURL}
                    className="h-[50%] w-[50%] object-cover"
                    alt=""
                  />
                </div>

                <div className="text-sm text-white font-poppins">
                  {description}
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
