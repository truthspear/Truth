import Thumbnail1 from "./pages/images/blog1.jpg";
import Thumbnail2 from "./pages/images/blog2.jpg";
import Thumbnail3 from "./pages/images/blog3.jpg";
import Thumbnail4 from "./pages/images/blog4.jpg";

export const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: "Education", // Matches the footer
    title: "This is the first post of this blog.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    authorID: 3,
  },
  {
    id: 2,
    thumbnail: Thumbnail2,
    category: "Investment", // Changed from "Technology" to "Investment"
    title: "Smart Investment Strategies for Beginners",
    desc: "Learn how to make smart investment decisions...",
    authorID: 1,
  },
  {
    id: 3,
    thumbnail: Thumbnail3,
    category: "Lifestyle", // Matches the footer
    title: "10 Healthy Habits for a Better Life",
    desc: "Developing healthy habits can significantly improve your well-being...",
    authorID: 2,
  },
  {
    id: 4,
    thumbnail: Thumbnail4,
    category: "Business", // Matches the footer
    title: "How to Start a Successful Online Business",
    desc: "Starting an online business requires careful planning...",
    authorID: 4,
  },
];
