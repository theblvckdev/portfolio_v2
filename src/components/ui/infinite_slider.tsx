import ReviewsCard from "./reviews_card";
import Profile from "../../assets/svgs/profile.svg";

const InfiniteSlider = () => {
  return (
    <>
      <div className="whitespace-nowrap relative p-2 w-screen sm:overflow-hidden inline-block slide">
        <div className="slider inline-block lg:w-[50%] w-full">
          <ReviewsCard
            author="John Doe"
            content="Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner."
            occupation="Software Developer"
            profile={Profile}
          />

          <ReviewsCard
            author="John Doe"
            content="Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner."
            occupation="Software Developer"
            profile={Profile}
          />
        </div>

        <div className="slider inline-block lg:w-[50%] w-full">
          <ReviewsCard
            author="John Doe"
            content="Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner."
            occupation="Software Developer"
            profile={Profile}
          />

          <ReviewsCard
            author="John Doe"
            content="Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner."
            occupation="Software Developer"
            profile={Profile}
          />
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
