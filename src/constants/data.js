import project1 from "./../assets/project1.png"
import project2 from "./../assets/project2.png"
import project3 from "./../assets/project3.png"

export const HERO_CONTENT = `Highly motivated Computer Science graduate with a proven ability to develop robust and scalable applications using
modern technologies and frameworks.I possess a strong foundation in both front-end and back-end development,
coupled with a keen eye for detail and a passion for continuous improvement. I am dedicated to staying ahead of
industry trends and using my technical expertise to drive impactful results.
`;

export const ABOUT_TEXT = `I am a passionate Computer Science graduate with a strong foundation in software development and a keen interest in front-end technologies. With over a year of experience in React.js.js, I enjoy creating intuitive and engaging user interfaces. My background in Java, Spring Boot, and SQL complements my front-end skills, allowing me to work seamlessly across the full stack. I thrive on solving complex problems, learning new technologies, and collaborating with cross-functional teams to deliver high-quality software solutions. I am excited to bring my technical skills and creativity to new challenges and opportunities.`;


export const PROJECTS = [
  {
    title: "AI Resume Builder",
    image: project1,
    description:
      "This project aims to develop a cutting-edge tool that leverages ArtificialIntelligence (AI) to assist job seekers in creating high-quality resumes.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSql", "tailwindcss"],
    link: "https://ai-resume-builder-mu.vercel.app/"
  },
  {
    title: "BookiFy",
    image: project2,
    description:
      "An application for managing Books.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDb"],
    link: "https://book-store-app-ui.vercel.app/"
  },
  {
    title: "Web-Code Studio",
    image: project3,
    description:
      "This project is an innovative online Integrated Development Environment (IDE) designed for web developers. A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "tailwind", "Firebase"],
    link: "https://webcode-studio.web.app/home"
  },
];

export const CONTACT = {
  address: "Pune, India",
  phoneNo: "+91 9373770723 ",
  email: "rohitghate2903@gmail.com",
};