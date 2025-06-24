const userData = {
  githubUsername: 'subbuguru',
  name: 'Dhruva Kumar',
  designation: 'CS major at UT Austin',
  email: 'contact@dhruva-kumar.com',
  phone: '+1 (469) 451-0456',
  address: 'Coppell, Texas, United States',
  projects: [
    {
      title: 'Ordoflow - Simple Task Management',
      link: 'https://github.com/subbuguru/ordoflow',
      imgUrl: '/ordoflow.png',
      technologies: 'React Native, Expo, SQLite',
      description:
        'A simple task management mobile application with task prioritization, light/dark modes, swipe gestures, and drag-and-drop reordering.',
    },
    {
      title: 'Mosaic Learn - Learn Anything',
      link: 'https://apps.apple.com/us/app/mosaic-learn/id6736591253',
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
      technologies: 'Python, Pandas, LLamaIndex, FastAPI, Next.js',
      description:
        'An online course recommender system focused on accessibility (free courses only). Uses BERT embeddings for semantic search, orchestrated by an LLM Agent with the LlamaIndex framework. Served with a FastAPI backend and Next.js frontend.',
    },
  ],
  about: {
    title: 'UT Austin Computer Science 2029',
    description: [
      `I'm excited to begin my Computer Science journey at the University of Texas at Austin (Class of 2029). I enjoy learning about software development and AI-integrated applications. I also like photography, violin, working out and freshwater aquariums. I hope you enjoy my site!`,
    ],
  },
  experience: [
    {
      title: 'Undergraduate, Computer Science',
      company: 'Reality5D',
      year: '2025-2029',
      companyLink: 'utexas.edu',
      desc: 'Currently a Freshman at the University of Texas at Austin.',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Reality5D',
      year: '2024-2025',
      companyLink: 'https://reality5d.com',
      desc: 'Developed cross-platform mobile applications using React Native and Firebase. Help develop Mosaic Learn, an app that turns user input into personalized learning plans via Gemini API.',
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
      title: 'Student',
      company: 'Cistercian Preparatory School',
      year: '2021-2025',
      companyLink: 'https://cistercian.org/school',
      desc: "During my time at Cistercian, I served as Yearbook Senior Pages Editor and Young Men's Service League Communications VP and was part of the Cum Laude Society.",
    },
  ],
  resumeUrl: '/resume/resume.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/dhruva-kumar-dk/',
    github: 'https://github.com/subbuguru',
  },
};

export default userData;
