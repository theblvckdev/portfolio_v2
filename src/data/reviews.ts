interface ReviewsObjectType {
  author: string;
  occupation: string;
  content: string;
  profile: string;
  linkedinURL?: string;
}

import Profile from "../assets/svgs/profile.svg";

export const reviews: ReviewsObjectType[] = [
  // {
  //   author: "Stephen Adeniji",
  //   content: `I had the pleasure of working with Nathaniel during our recent internship, and his commitment to excellence stood out. He consistently delivered high-quality work on time and was always ready to lend a hand to the team. Nathaniel has a remarkable ability to solve complex frontend challenges efficiently, and his proactive approach makes him an invaluable team player. I'm confident he will exceed expectations in any role he takes on.`,
  //   occupation: "Frontend Developer",
  //   profile: Profile,
  //   linkedinURL: "https://www.linkedin.com/in/stephen-adeniji/",
  // },

  {
    author: "Chioma Okeke",
    content: `Nathaniel is a great team player. His dedication and willingness to contribute immensely to team projects is excellent.
    I have personally worked with him on a project and I highly recommend him for any frontend role, knowing he'll deliver way beyond expectations.`,
    occupation: "Frontend Developer",
    profile: Profile,
    linkedinURL: "https://www.linkedin.com/in/chioma-okeke-a7823b237/",
  },

  {
    author: "Faith Obi",
    content: `Nathaniel is a relentless frontend web developer. I had the opportunity to work with him on the Delve project during the HNG11 internship.`,
    occupation: "Frontend Developer",
    profile: Profile,
    linkedinURL: "https://www.linkedin.com/in/faithdev/",
  },
];
