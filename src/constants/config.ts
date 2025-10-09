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
      content: `Founder & CEO of a startup technology company focused on software development services and digital product innovation. Passionate about web development, with interests in English and Japanese literature. Currently developing experience in business planning and team management while collaborating with schools and marketing agencies to create technology solutions, design promotional strategies, and expand partner networks. Recognized for honesty, responsibility, and the ability to work effectively both independently and in a team.`,
    },
    experience: {
      p: "What Ari has done so far",
      h2: "Work Experience.",
    },
    education: {
      p: "What Ari has learn so far",
      h2: "Education Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    techs: {
      p: "What Ari have for his work?",
      h2: "Skills.",
    },
    works: {
      p: "Ari's Projects",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
