interface ReviewsObjectType {
  author: string;
  occupation: string;
  content: string;
  profile: string;
}

import Profile from "../assets/svgs/profile.svg";

export const reviews: ReviewsObjectType[] = [
  {
    author: "Emmanuel Ihennacho",
    content: `Collaborating with Nathan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nathan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nathan is the ideal partner.`,
    occupation: "Frontend Developer",
    profile: Profile,
  },

  {
    author: "Emmanuel Ihennacho",
    content: `Collaborating with Nathan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nathan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nathan is the ideal partner.`,
    occupation: "Frontend Developer",
    profile: Profile,
  },
];
