const userData = {
  githubUsername: 'subbuguru',
  name: 'Dhruva Kumar',
  designation: 'Full Stack Developer & Real Estate Photographer',
  //avatarUrl: "/avatar.png",
  email: 'dhruvakumar2025@gmail.com',
  phone: '+1 (469) 451-0456',
  address: 'Coppell, Texas, United States',
  projects: [
    {
      title: 'Mosaic Learn - Learn Anything',
      link: 'https://github.com/subbuguru/mosaic-learn',
      imgUrl: '/mosaic-learn.png',
      technologies: 'React Native, Firebase, Gemini API',
      description:
        'An educational mobile app that converts text, image, or voice into personalized learning plans using Gemini API. Built with React Native and Firebase.',
    },
    {
      title: 'My Meds - Personal Meds List',
      link: 'https://github.com/subbuguru/my-meds',
      imgUrl: '/my-meds.png',
      technologies: 'Flutter, SQLite',
      description:
        "A privacy-centric mobile application made in Flutter to keep track of personal and family members' medications, integrated with FDA APIs for medication search. Currently serving over 3,000 users. Uses SQLite for local storage.",
    },
    {
      title: 'Chat App',
      link: 'https://github.com/subbuguru/chat-app',
      imgUrl: '/chat-app.png',
      technologies: 'Flutter, Firebase',
      description:
        'A mobile instant messaging application made in Flutter, with friends and image support. Uses Firebase Auth for authentication and Firebase Cloud Firestore for the database.',
    },
    {
      title: 'MOOC Search - Agentic Online Course Recommender',
      link: 'https://github.com/subbuguru/mooc-search',
      imgUrl: '/mooc-search.png',
      technologies: 'Python, Pandas, FastAPI, Next.js',
      description:
        'An online course recommender system focused on accessibility (free courses only). Uses BERT embeddings for semantic search, orchestrated by an LLM Agent with the LlamaIndex framework. Served with a FastAPI backend and Next.js frontend.',
    },
  ],
  about: {
    title: 'High School Senior planning to study Computer Science',
    description: [
      `I am currently a high school senior at Cistercian Preparatory School interested in pursuing a career as a software engineer. My interests include:`,
      ``,
      `- Software Development: Experienced with mobile and web development using Flutter and React. Currently exploring AI and agentic applications.`,
      ``,
      `- Photography: Have a (very) small business providing real estate and event photography services.`,
      ``,
      `Outside of tech, I enjoy playing the violin, reading sci-fi, and watching my freshwater aquarium.`,
    ],
  },
  experience: [
    {
      title: 'Software Engineer Intern',
      company: 'Reality5D',
      year: '2024-2025',
      companyLink: 'https://reality5d.com',
      desc: 'Developed cross-platform mobile applications using React Native and Firebase. Led development of Mosaic Learn, an app that turns user input into personalized learning plans via Gemini API.',
    },
    {
      title: 'IT Intern',
      company: 'Sagiss',
      year: '2024',
      companyLink: 'https://sagiss.com',
      desc: 'Wrote SQL queries to extract ticket data, built Power BI reports for client financial analysis, and managed support calls as a dispatcher.',
    },
    {
      title: 'Math Instructor',
      company: 'Mathnasium KV',
      year: '2023-2024',
      companyLink: 'https://mathnasium.com',
      desc: 'Taught groups of 4–5 students, evaluated student work, and communicated with parents about progress.',
    },
    {
      title: 'Web Designer',
      company: 'Sunrise Rental Cottages',
      year: '2023-2024',
      companyLink: 'https://sunriserentalcottages.com',
      desc: 'Designed and maintained a booking website for a short-term rental company.',
    },
    {
      title: 'Student',
      company: 'Cistercian Preparatory School',
      year: '2021-2025',
      companyLink: 'https://cistercian.org/school',
      desc: "During my time at Cistercian, I served as Yearbook Senior Pages Editor, Young Men's Service League Communications VP, and Medical Club Secretary.",
    },
  ],
  resumeUrl: '/resume/resume.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/dhruva-kumar-dk/',
    github: 'https://github.com/subbuguru',
  },
};

export default userData;
