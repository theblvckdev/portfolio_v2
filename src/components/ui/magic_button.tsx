import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  linkURL,
}: {
  title: string;
  linkURL?: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <a href={linkURL} className="no-underline outline-none">
      <button
        className="relative inline-flex font-code h-14 md:w-fit w-full md:mt-5 md:mx-0 mx-auto overflow-hidden rounded-lg p-[2px] focus:outline-none"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        {/* remove px-3 py-1, add px-5 gap-2 */}
        <span
          className={`flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm uppercase text-white hover:text-primary-0 duration-200 ease-in backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          <div>{title}</div>
          {position === "right" && icon}
        </span>
      </button>
    </a>
  );
};

export default MagicButton;
