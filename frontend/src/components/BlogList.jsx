import React from "react";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

const BlogList = () => {
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <RotatingLines
          visible={true}
          height="48"
          width="48"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  if (error)
    return <p className="text-center text-red-500 mt-6">Error: {error}</p>;
  if (!blogs.length)
    return (
      <div className="flex flex-col items-center justify-center mt-16 text-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mb-4 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-6a2 2 0 00-2-2H5m6 8v-6a2 2 0 012-2h2m-6 8v-6a2 2 0 012-2h2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h2 className="text-2xl font-semibold mb-2">No Blogs Found</h2>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex items-start bg-white rounded-lg shadow-md overflow-hidden ms-2 me-4 cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="flex-shrink-0 w-32 h-32">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 p-4 flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>

            <p className="text-gray-700 text-sm line-clamp-3">{blog.content}</p>

            <div className="mt-3 flex items-center text-gray-500 text-sm space-x-4">
              <span className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>{blog.likes}</span>
              </span>

              <span className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-5l-5 5v-5H7a2 2 0 01-2-2V10a2 2 0 012-2h2"
                  />
                </svg>
                <span>{blog.commentsCount}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
