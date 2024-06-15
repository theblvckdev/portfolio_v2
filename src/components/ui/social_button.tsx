import { ReactElement } from "react";

const SocialButton = ({
  icon,
  linkUrl,
}: {
  icon: ReactElement;
  linkUrl: string;
}) => {
  return (
    <>
      <a href={linkUrl} target="_blank" className="no-underline outline-none">
        <button className="h-[35px] w-[35px] rounded-md bg-white bg-opacity-10 backdrop-blur-md ring-1 ring-gray-400 flex items-center justify-center text-white">
          {icon}
        </button>
      </a>
    </>
  );
};

export default SocialButton;
