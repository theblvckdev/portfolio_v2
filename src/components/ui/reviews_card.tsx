interface ComponentPropTypes {
  content: string;
  author: string;
  occupation: string;
}

const ReviewsCard = ({ author, content, occupation }: ComponentPropTypes) => {
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="ring-1 ring-gray-800 lg:rounded-3xl rounded-2xl p-10 h-full w-fit overflow-hidden bg-secondary-0 text-white font-poppins inline-block md:mx-5 mx-3"
      >
        <p className="md:text-base text-sm text-wrap font-light font-poppins">
          {content}
        </p>

        <div className="mt-8">
          <div className="flex gap-2 items-center">
            <div>
              <div className="font-semibold font-poppins">{author}</div>
              <div className="text-sm text-gray-400 font-poppins">
                {occupation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsCard;
