import React from "react";
import { useSelector } from "react-redux";

const BlogList = () => {
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!blogs.length) return <p>No blogs found.</p>;

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id} style={{ marginBottom: "15px" }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
