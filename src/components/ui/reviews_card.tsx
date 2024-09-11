interface ComponentPropTypes {
  content: string;
  author: string;
  occupation: string;
  linkedInURL: string | undefined;
}

const ReviewsCard = ({
  author,
  content,
  occupation,
  linkedInURL,
}: ComponentPropTypes) => {
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="ring-1 ring-gray-800 lg:rounded-3xl rounded-2xl lg:p-10 p-5 w-full overflow-hidden bg-secondary-0 text-white font-poppins inline-block md:mx-5 mx-3"
      >
        <p className="lg:text-base text-sm text-white font-semibold h-[150px] text-wrap font-code">
          {content}
        </p>

        <div className="mt-8">
          <div className="flex gap-2 items-center">
            <div>
              <a
                href={linkedInURL}
                target="_blank"
                className="font-semibold font-poppins"
              >
                {author}
              </a>
              <div className="text-sm text-gray-400 font-code">
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
