import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY_POSTS } from "../data";
import PostItem from "./components/PostItem";

const CategoryPost = () => {
  const { category } = useParams(); // Get category from URL
  const filteredPosts = DUMMY_POSTS.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section>
      {filteredPosts.length > 0 ? (
        <div className="container posts__container">
          {filteredPosts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts Found</h2>
      )}
    </section>
  );
};

export default CategoryPost;
