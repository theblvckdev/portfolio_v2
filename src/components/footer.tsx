import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import SocialButton from "./ui/social_button";

const Footer = () => {
  const date: Date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <footer className="py-5 max-w-7xl mx-auto xl:px-0 md:px-5 px-3">
        <div className="flex md:flex-row flex-col md:items-center">
          <div className="mr-auto">
            <div className="text-base text-white font-code">
              Copywrite &copy; {currentYear}, Nathaniel Joseph
            </div>
          </div>

          <div className="flex gap-5 items-center md:mt-0 mt-3">
            <SocialButton
              icon={<IoLogoGithub className="text-xl" />}
              linkUrl="https://github.com/theblvckdev"
            />

            <SocialButton
              icon={<IoLogoLinkedin className="text-xl" />}
              linkUrl="https://www.linkedin.com/in/nathaniel-joseph-8b172a291/"
            />

            <SocialButton
              icon={<IoLogoInstagram className="text-xl" />}
              linkUrl="https://www.instagram.com/nathan_who_codes/"
            />

            <SocialButton
              icon={<IoLogoTwitter className="text-xl" />}
              linkUrl="https://x.com/theblvckdev"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
