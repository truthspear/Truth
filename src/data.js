import Thumbnail1 from "./pages/images/blog1.jpg";
import Thumbnail2 from "./pages/images/blog2.jpg";
import Thumbnail3 from "./pages/images/blog3.jpg";
import Thumbnail4 from "./pages/images/blog4.jpg";

export const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: "Agriculture",
    title: "The Future of Sustainable Farming",
    desc: "Discover how modern technology is transforming agriculture and promoting sustainability.",
    authorID: 5,
  },
  {
    id: 2,
    thumbnail: Thumbnail2,
    category: "Business",
    title: "How to Start a Successful Online Business",
    desc: "Starting an online business requires careful planning and execution.",
    authorID: 4,
  },
  // Education category is empty

  {
    id: 3,
    thumbnail: Thumbnail3,
    category: "Entertainment",
    title: "Top 10 Movies to Watch This Year",
    desc: "A list of must-watch movies for entertainment lovers.",
    authorID: 6,
  },
  {
    id: 4,
    thumbnail: Thumbnail1,
    category: "Art",
    title: "The Evolution of Modern Art",
    desc: "Exploring the transition from classical to contemporary art movements.",
    authorID: 7,
  },
  // Investment category is empty

  {
    id: 5,
    thumbnail: Thumbnail2,
    category: "Uncategorized",
    title: "Random Thoughts on a Rainy Day",
    desc: "A collection of thoughts and reflections with no particular theme.",
    authorID: 8,
  },
  {
    id: 6,
    thumbnail: Thumbnail4,
    category: "Weather",
    title: "How Climate Change is Affecting Global Weather Patterns",
    desc: "Understanding the impact of climate change on our planet's weather conditions.",
    authorID: 9,
  },
];
