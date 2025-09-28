// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { getMediumBlogs } from "@/utils/medium-blog-fetcher";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  try {
    // Import the Medium blog fetcher directly instead of using API route
    const { getMediumBlogs } = await import('@/utils/medium-blog-fetcher');
    const { personalData } = await import('@/utils/data/personal-data');
    
    const blogs = await getMediumBlogs(personalData.mediumUsername);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8 bg-[#F8F8F8] dark:bg-slate-900 min-h-screen">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-black dark:bg-white"></span>
          <span className="bg-black dark:bg-white text-white dark:text-black w-fit p-2 px-5 text-2xl rounded-md font-light">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-black dark:bg-white"></span>
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No blogs found. Please check your Medium username or try again later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {blogs.map((blog, i) => (
            <BlogCard blog={blog} key={blog.id || i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;