const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to...",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image:
      "https://images.unsplash.com/photo-1597348989645-46b190ce4918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg5NDUwMTJ8&ixlib=rb-4.0.3&q=80&w=1080", // Replace with a real image URL
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we can...",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image:
      "https://images.unsplash.com/photo-1736437381508-9f19d2936f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg5NDUwMTJ8&ixlib=rb-4.0.3&q=80&w=1080", // Replace with a real image URL
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Web Development Workshop",
    description:
      "Learn the basics of web development in this hands-on workshop.",
    location: "123 Main Street, Anytown",
    date: "2021-06-15",
    image:
      "https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with a real image URL
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Data Science for Beginners",
    description:
      "An introduction to the world of data science and machine learning.",
    location: "456 Elm Street, Anytown",
    date: "2021-07-22",
    image:
      "https://images.unsplash.com/photo-1597348989645-46b190ce4918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg5NDUwMTJ8&ixlib=rb-4.0.3&q=80&w=1080", // Replace with a real image URL
    isFeatured: false,
  },
  {
    id: "e5",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native.",
    location: "789 Oak Street, Anytown",
    date: "2021-08-05",
    image:
      "https://images.unsplash.com/photo-1736437381508-9f19d2936f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg5NDUwMTJ8&ixlib=rb-4.0.3&q=80&w=1080", // Replace with a real image URL
    isFeatured: false,
  },
  {
    id: "e6",
    title: "Cybersecurity Workshop",
    description:
      "Learn about the latest cybersecurity threats and how to protect yourself.",
    location: "101 Pine Street, Anytown",
    date: "2021-09-18",
    image:
      "https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with a real image URL
    isFeatured: false,
  },
  {
    id: "e7",
    title: "Artificial Intelligence and Machine Learning Seminar",
    description:
      "An in-depth look at the latest advancements in AI and machine learning.",
    location: "202 Maple Street, Anytown",
    date: "2021-10-25",
    image:
      "https://images.unsplash.com/photo-1739056352870-17df21abfab8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with a real image URL
    isFeatured: true,
  },
  {
    id: "e8",
    title: "Blockchain and Cryptocurrency Conference",
    description:
      "Explore the world of blockchain technology and cryptocurrency.",
    location: "303 Birch Street, Anytown",
    date: "2021-11-12",
    image:
      "https://images.unsplash.com/photo-1736437381508-9f19d2936f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg5NDUwMTJ8&ixlib=rb-4.0.3&q=80&w=1080", // Replace with a real image URL
    isFeatured: false,
  },
  {
    id: "e9",
    title: "Virtual Reality and Augmented Reality Expo",
    description:
      "Experience the latest in virtual reality and augmented reality technology.",
    location: "404 Cedar Street, Anytown",
    date: "2021-12-01",
    image:
      "https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with a real image URL
    isFeatured: false,
  },
  {
    id: "e10",
    title: "Sustainable Development Goals Summit",
    description:
      "Discuss the challenges and opportunities for achieving the Sustainable Development Goals.",
    location: "505 Willow Street, Anytown",
    date: "2022-01-19",
    image:
      "https://images.unsplash.com/photo-1738934437263-3d8d9fb7414c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with a real image URL
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured === true);
}

export function getEventById(id) {
  return DUMMY_EVENTS.filter((event) => event.id === id)[0];
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(searchParam) {
  const { year, month } = searchParam;

  return DUMMY_EVENTS.filter((event) => {
    const date = new Date(event.date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  })
}