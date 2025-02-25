import Thumbnail1 from "./pages/images/blog1.jpg";
import Thumbnail2 from "./pages/images/blog2.jpg";
import Thumbnail3 from "./pages/images/blog3.jpg";
import Thumbnail4 from "./pages/images/blog4.jpg";

export const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the first post of this blog.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat voluptate quam aperiam beatae modi praesentium error! Eum distinctio, rem dignissimos consectetur officia placeat cupiditate hic ipsa explicabo laudantium quisquam!",
    authorID: 3,
  },
  {
    id: 2,
    thumbnail: Thumbnail2,
    category: "technology",
    title: "Exploring the Future of Artificial Intelligence",
    desc: "AI is revolutionizing various industries, from healthcare to finance. In this post, we dive deep into the latest trends and advancements in artificial intelligence.",
    authorID: 1,
  },
  {
    id: 3,
    thumbnail: Thumbnail3,
    category: "lifestyle",
    title: "10 Healthy Habits for a Better Life",
    desc: "Developing healthy habits can significantly improve your well-being. This article covers ten easy and effective lifestyle changes for a healthier you.",
    authorID: 2,
  },
  {
    id: 4,
    thumbnail: Thumbnail4,
    category: "business",
    title: "How to Start a Successful Online Business",
    desc: "Starting an online business requires careful planning and execution. Learn key strategies to build a profitable online venture from scratch.",
    authorID: 4,
  },
];
