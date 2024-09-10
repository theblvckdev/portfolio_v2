import SVGURL1 from "../assets/svgs/exp1.svg";
import SVGURL3 from "../assets/svgs/exp3.svg";
import SVGURL2 from "../assets/svgs/exp2.svg";

interface ExperienceDataTypes {
  svgURL: string;
  heading: string;
  description: string;
}

export const experienceData: ExperienceDataTypes[] = [
  {
    svgURL: SVGURL1,
    heading: "Frontend Developer",
    description: `Delivered high-quality, productive code for a diverse array of projects for clients.`,
  },

  {
    svgURL: SVGURL1,
    heading: "Frontend Developer Mentor",
    description: `Mentored over 10 aspiring developers in foundational web development skills.`,
  },

  {
    svgURL: SVGURL3,
    heading: "Freelance Web Dev Project",
    description: `Led the development of a web app for a client, from initial concept to deployment on app stores`,
  },

  {
    svgURL: SVGURL2,
    heading: "Graphics Designer",
    description: `Participated in designing unique magazines, invitation cards, flyers and many more`,
  },
];
