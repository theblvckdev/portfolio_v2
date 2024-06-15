import { experienceData } from "../data/experience";

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
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 place-items-center">
            {experienceData.map((data, index) => {
              const { description, heading, svgURL } = data;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="relative inline-flex font-code h-full w-full overflow-hidden rounded-3xl p-[3px]"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                  {/* remove px-3 py-1, add px-5 gap-2 */}
                  <span
                    className={`inline-flex h-full w-full items-center justify-center rounded-[20px]
             bg-secondary-0 bg-opacity-90 md:p-10 p-5 text-sm text-white hover:text-primary-0 duration-200 ease-in backdrop-blur-3xl gap-2`}
                  >
                    <div className="xl:flex gap-5 items-center">
                      <div>
                        <img
                          src={svgURL}
                          className="xl:h-full xl:w-full md:h-[30%] md:w-[30%] h-[20%] w-[20%] xl:mb-0 mb-5 object-cover"
                          alt=""
                        />
                      </div>

                      <div className="text-sm text-white font-poppins capitalize">
                        <div className="text-white lg:text-2xl text-lg font-semibold">
                          {heading}
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">
                          {description}
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
