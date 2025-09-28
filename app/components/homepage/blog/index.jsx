'use client';

import Link from 'next/link';
import { FaArrowRight, FaSpinner } from 'react-icons/fa';
import BlogCard from './blog-card';
import { useState, useEffect } from 'react';

function Blog({ blogs: initialBlogs }) {
  const [blogs, setBlogs] = useState(initialBlogs || []);
  const [loading, setLoading] = useState(!initialBlogs || initialBlogs.length === 0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialBlogs || initialBlogs.length === 0) {
      fetchBlogs();
    }
  }, [initialBlogs]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='blogs' className="relative z-10 border-t my-12 lg:my-24 border-black dark:border-white mx-4 sm:mx-6 lg:mx-8 xl:mx-12" aria-label="Blog posts">
      <div className="w-[100px] h-[100px] bg-gray-200 dark:bg-gray-700 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-black dark:bg-white"></span>
          <h2 className="bg-black dark:bg-white text-white dark:text-black w-fit p-2 px-5 text-xl rounded-md font-light">
            Blogs
          </h2>
          <span className="w-24 h-[2px] bg-black dark:bg-white"></span>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12" aria-label="Loading blogs">
          <FaSpinner className="animate-spin text-2xl text-black dark:text-white" />
          <span className="ml-3 text-black dark:text-white">Loading blogs...</span>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center py-12" role="alert" aria-label="Error loading blogs">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchBlogs}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300"
            aria-label="Retry loading blogs"
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && blogs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {blogs.slice(0, 6).map((blog, i) => (
            <BlogCard blog={blog} key={blog.id || i} />
          ))}
        </div>
      )}

      {!loading && !error && blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-black dark:text-white">No blogs available at the moment.</p>
        </div>
      )}

      {!loading && !error && blogs.length > 0 && (
        <div className="flex justify-center mt-8 lg:mt-12">
          <Link
            className="flex items-center gap-2 px-6 py-3 border border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 text-sm font-medium mobile-btn"
            href="/blog"
            aria-label="View all blog posts"
          >
            <span>View More</span>
            <FaArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Blog;