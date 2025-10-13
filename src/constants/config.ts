type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    feedbacks: TSection;
    techs: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ari Royani Biya — Portfolio",
    fullName: "Ari Royani Biya",
    email: "aribiya@gmail.com",
  },
  hero: {
    name: "Ari Royani Biya",
    p: ["A Tech Founder and", "interested about web development"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
  about: {
    p: "Introduction",
    h2: "Overview.",
    content: `Creator at a technology startup specializing in software development and digital products. Passionate about web development and currently developing experience in business planning and team collaboration. Working with schools and marketing collaborators to deliver technology solutions, design promotional strategies, and expand partner networks. Recognized for honesty, responsibility, and the ability to work effectively both independently and in a team.`,
  },
  experience: {
    p: "What has been done so far",
    h2: "Work Experience.",
  },
  education: {
    p: "What has been learned so far",
    h2: "Education Experience.",
  },
  feedbacks: {
    p: "What others say",
    h2: "Testimonials.",
  },
  techs: {
    p: "What tools and skills are used for the work",
    h2: "Skills.",
  },
  works: {
    p: "Selected Projects",
    h2: "Projects.",
    content: `The following projects showcase skills and experience through
    real-world examples of work. Each project is briefly described with
    links to code repositories and live demos. They reflect the ability to
    solve complex problems, work with different technologies, and manage
    projects effectively.`,
  },
}

};
