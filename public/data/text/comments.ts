type commentsType = {
  imageUrl: string;
  title: string;
  time: number;
  content: string;
  likes: number;
  views: number;
  comments: number;
};

const comments: commentsType[] = [
  {
    imageUrl: "/data/image/camel.jpg",
    title: "Lorem Ipsum",
    time: 45,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 7,
    views: 5,
    comments: 3
  },
  {
    imageUrl: "/data/image/dolphin.jpg",
    title: "Dolor Sit Amet",
    time: 32,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: 3,
    views: 8,
    comments: 4
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Consectetur Adipiscing",
    time: 71,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 5,
    views: 2,
    comments: 2
  },
  {
    imageUrl: "/data/image/panda.jpg",
    title: "Ipsum Dolor",
    time: 15,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 6,
    views: 3,
    comments: 6
  },
  {
    imageUrl: "/data/image/penguin.jpg",
    title: "Sit Amet",
    time: 88,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 2,
    views: 7,
    comments: 1
  },
  {
    imageUrl: "/data/image/camel.jpg",
    title: "Adipiscing Elit",
    time: 50,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 4,
    views: 4,
    comments: 9
  },
  {
    imageUrl: "/data/image/panda.jpg",
    title: "Dolor Sit",
    time: 10,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: 8,
    views: 6,
    comments: 5
  },
  {
    imageUrl: "/data/image/penguin.jpg",
    title: "Consectetur",
    time: 20,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 1,
    views: 1,
    comments: 7
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Minim Veniam",
    time: 85,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 9,
    views: 9,
    comments: 8
  },
  {
    imageUrl: "/data/image/dolphin.jpg",
    title: "Labore Et",
    time: 5,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 3,
    views: 2,
    comments: 1
  },
  {
    imageUrl: "/data/image/camel.jpg",
    title: "Exercitation Ullamco",
    time: 65,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 6,
    views: 3,
    comments: 4
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Laboris Nisi",
    time: 75,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: 2,
    views: 7,
    comments: 5
  },
  {
    imageUrl: "/data/image/penguin.jpg",
    title: "Tempor Incididunt",
    time: 30,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 5,
    views: 5,
    comments: 3
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Dolore Magna",
    time: 40,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 7,
    views: 8,
    comments: 2
  },
  {
    imageUrl: "/data/image/panda.jpg",
    title: "Aliqua",
    time: 90,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 4,
    views: 4,
    comments: 6
  },
  {
    imageUrl: "/data/image/camel.jpg",
    title: "Lorem Ipsum",
    time: 45,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 7,
    views: 5,
    comments: 3
  },
  {
    imageUrl: "/data/image/dolphin.jpg",
    title: "Dolor Sit Amet",
    time: 32,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: 3,
    views: 8,
    comments: 4
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Consectetur Adipiscing",
    time: 71,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 5,
    views: 2,
    comments: 2
  },
  {
    imageUrl: "/data/image/panda.jpg",
    title: "Ipsum Dolor",
    time: 15,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 6,
    views: 3,
    comments: 6
  },
  {
    imageUrl: "/data/image/penguin.jpg",
    title: "Sit Amet",
    time: 88,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 2,
    views: 7,
    comments: 1
  },
  {
    imageUrl: "/data/image/camel.jpg",
    title: "Adipiscing Elit",
    time: 50,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 4,
    views: 4,
    comments: 9
  },
  {
    imageUrl: "/data/image/panda.jpg",
    title: "Dolor Sit",
    time: 10,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: 8,
    views: 6,
    comments: 5
  },
  {
    imageUrl: "/data/image/penguin.jpg",
    title: "Consectetur",
    time: 20,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 1,
    views: 1,
    comments: 7
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Minim Veniam",
    time: 85,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 9,
    views: 9,
    comments: 8
  },
  {
    imageUrl: "/data/image/dolphin.jpg",
    title: "Labore Et",
    time: 5,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 3,
    views: 2,
    comments: 1
  },
  {
    imageUrl: "/data/image/camel.jpg",
    title: "Exercitation Ullamco",
    time: 65,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 6,
    views: 3,
    comments: 4
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Laboris Nisi",
    time: 75,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: 2,
    views: 7,
    comments: 5
  },
  {
    imageUrl: "/data/image/penguin.jpg",
    title: "Tempor Incididunt",
    time: 30,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 5,
    views: 5,
    comments: 3
  },
  {
    imageUrl: "/data/image/lion.jpg",
    title: "Dolore Magna",
    time: 40,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    likes: 7,
    views: 8,
    comments: 2
  },
  {
    imageUrl: "/data/image/panda.jpg",
    title: "Aliqua",
    time: 90,
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    likes: 4,
    views: 4,
    comments: 6
  }
];

export default comments;
