export interface PersonalConfig {
  fullLegalName: string;
  fullName: string;
  firstName: string;
  lastName: string;
  professionalTitle: string;
  education: string;
  currentStatus: string;
  shortIntroduction: string;
  heroHeadline: {
    prefix: string;
    gradientWord: string;
  };
  subtitle: string;
  aboutMe: {
    introHeading: string;
    paragraphs: string[];
    philosophyTitle: string;
    philosophyPoints: [string, string, string];
    philosophyDescription: string;
  };
  location: string;
  locationDetails: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  email: string;
  githubUrl: string;
  linkedinUrl: string | null;
  resumePath: string;
  profileImagePath: string;
  initials: string;
}

export const personalConfig: PersonalConfig = {
  fullLegalName: "Kaklotar Jay Narotam Bhai",
  fullName: "Jay Kaklotar",
  firstName: "Jay",
  lastName: "Kaklotar",
  professionalTitle: "Full-Stack Developer",
  education: "Bachelor of Computer Applications (BCA)",
  currentStatus: "Working at a company",

  shortIntroduction: "Hi, I'm Jay Kaklotar",

  heroHeadline: {
    prefix: "Full-Stack",
    gradientWord: "Developer",
  },

  subtitle:
    "I build modern, responsive, and scalable web applications, combining thoughtful frontend design with reliable backend development.",

  aboutMe: {
    introHeading: "Hello, I'm Jay Kaklotar.",
    paragraphs: [
      "I'm Jay Kaklotar, a Full-Stack Developer with a background in Computer Applications. During my BCA studies, I developed web applications using technologies such as React, Angular, Node.js, Express, and MongoDB.",
      "I enjoy building responsive interfaces, developing backend APIs, and solving real-world development challenges.",
      "I'm currently working at a company while continuing to strengthen my skills in modern web development.",
    ],
    philosophyTitle: "My Philosophy",
    philosophyPoints: [
      "Clean Code.",
      "Thoughtful Design.",
      "Meaningful Experiences.",
    ],
    philosophyDescription:
      "Prioritizing readability, system maintainability, and end-user delight in every line written.",
  },

  location: "Based in India",
  locationDetails: "India (IST) • UTC +5:30",
  coordinates: {
    latitude: "20.5937° N",
    longitude: "78.9629° E",
  },

  email: "jaykaklotar329@gmail.com",
  githubUrl: "https://github.com/jaykaklotar786",
  linkedinUrl: null,
  resumePath: "/resume.pdf",
  profileImagePath: "/images/jay-profile.jpg",
  initials: "JK",
};
