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
      title: 'My Meds - Personal Meds List',
      link: 'https://github.com/subbuguru/my-meds',
      imgUrl: '/my-meds.png',
      technologies: 'Flutter, SQLite',
      description:
        'A privacy-centric application made in Flutter to keep track of personal medications. Currently serving over 3,000 users. Uses SQLite for local storage.',
    },
    {
      title: 'Chat App',
      link: 'https://github.com/subbuguru/chat-app',
      imgUrl: '/chat-app.png',
      technologies: 'Flutter, Firebase',
      description:
        'A chat application made in Flutter using Firebase for authentication and Firestore for the database.',
    },
    {
      title: 'Portfolio Site',
      link: 'https://github.com/subbuguru/portfolio',
      imgUrl: '/portfolio.png',
      technologies: 'Flutter, Firebase',
      description:
        'This very portfolio site, made with TypeScript and Next.js.',
    },
    {
      title: 'Online Course Recommender',
      link: 'https://github.com/subbuguru/mooc-search',
      imgUrl: '/mooc-search.png',
      technologies: 'Python, Pandas, FastAPI, Next.js',
      description:
        'An online course recommender system focused on accessiblity (free courses only). Uses BERT embeddings for search, and served by FastAPI and Next.js applications.',
    },
  ],
  about: {
    title: 'High School Senior planning to study Computer Science',
    description: [
      `I am currently a high school senior at Cistercian Preparatory School interested in pursuing a career as a software engineer within the ed-tech space. My interests include:`,
      ``,
      `- Software Development: Proficient in Java and Python. Experienced in mobile app development using Flutter, React Native and Firebase`,
      ``,
      `- Photography: Run a small business providing real estate and event photography services.`,
      ``,
      `Outside of tech, I play the violin, read sci-fi and enjoy watching my freshwater aquarium.`,
    ],
  },
  experience: [
    {
      title: 'Software Engineer Intern',
      company: 'Reality5D',
      year: '2024-2025',
      companyLink: 'reality5d.com',
      desc: 'Develop cross-platform educational mobile applications using React Native and Firebase on the Mosaic Learn (A learning plan creation tool) team.',
    },
    {
      title: 'IT Intern',
      company: 'Sagiss',
      year: '2024',
      companyLink: 'sagiss.com',
      desc: 'Wrote SQL queries to extract ticket data, built Power BI reports for client financial data, and managed support calls as a dispatcher.',
    },
    {
      title: 'Math Instructor',
      company: 'Mathnasium KV',
      year: '2023-2024',
      companyLink: 'mathnasium.com',
      desc: 'Instruct groups of 4 students per hour, evaluate student work, and communicate with parents regarding progress.',
    },
    {
      title: 'Web Designer',
      company: 'Sunrise Rental Cottages',
      year: '2023-2024',
      companyLink: 'sunriserentalcottages.com',
      desc: 'Design and Maintain a booking website for a short term rental company.',
    },
    {
      title: 'Student',
      company: 'Cistercian Preparatory School',
      year: '2021-2025',
      companyLink: 'sunriserentalcottages.com',
      desc: "My time at Cistercian was crucial in my academic and moral formation. During my time there, I participated in Yearbook as Senior Pages Editor, Young Men's Service League as Communications VP, and Medical Club as Secretary.",
    },
  ],
  resumeUrl: '/resume/resume.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/dhruva-kumar-dk/',
    github: 'https://github.com/subbuguru',
  },
};

export default userData;
