import React, { useEffect, useState } from 'react';

const BlogPosts = ({ postsPerPage = 10}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}posts?_limit=${postsPerPage}&_start=${(currentPage - 1) * postsPerPage}`);
      const data = await response.json();
      const totalPostsCount = response.headers.get('X-Total-Count');

      setPosts(data);
      setTotalPages(Math.ceil(totalPostsCount / postsPerPage));
    };

    fetchPosts();
  }, [currentPage, postsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
        </div>
      ))}
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span> / <span>{totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPosts;