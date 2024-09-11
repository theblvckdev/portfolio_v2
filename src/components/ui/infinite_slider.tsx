import ReviewsCard from "./reviews_card";
import { reviews } from "../../data/reviews";

const InfiniteSlider = () => {
  return (
    <>
      <div className="whitespace-nowrap relative md:p-2 w-screen md:before:block md:after:block before:hidden after:hidden sm:overflow-hidden slide">
        <div className="slider md:inline-flex w-full">
          {reviews.map((data, index) => {
            const { author, content, occupation } = data;

            return (
              <ReviewsCard
                key={index}
                author={author}
                content={content}
                occupation={occupation}
              />
            );
          })}
        </div>

        <div className="slider md:inline-flex hidden w-full">
          {reviews.map((data, index) => {
            const { author, content, occupation } = data;

            return (
              <ReviewsCard
                key={index}
                author={author}
                content={content}
                occupation={occupation}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
