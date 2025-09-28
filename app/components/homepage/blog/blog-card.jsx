'use client';

import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt, FaExternalLinkAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 rounded-lg overflow-hidden group shadow-sm hover:shadow-md">
      <div className="h-48 w-full cursor-pointer overflow-hidden">
        <Image
          src={blog?.cover_image || '/png/placeholder.png'}
          height={300}
          width={400}
          alt={blog.title}
          className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1">
              <BsHeartFill className="text-red-500" />
              <span>{blog.public_reactions_count || 0}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt className="text-blue-500" />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>

        {blog.url ? (
          <Link target='_blank' href={blog.url} className="group/link">
            <h3 className='text-lg font-medium text-black dark:text-white mb-2 group-hover/link:text-gray-600 dark:group-hover/link:text-gray-300 transition-colors duration-200 line-clamp-2'>
              {blog.title}
            </h3>
          </Link>
        ) : (
          <h3 className='text-lg font-medium text-black dark:text-white mb-2 line-clamp-2'>
            {blog.title}
          </h3>
        )}

        <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
          {`${blog.reading_time_minutes || 5} Min Read`}
        </p>

        <p className='text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow'>
          {blog.description}
        </p>

        {blog.url && (
          <div className="mt-auto">
            <Link 
              target='_blank' 
              href={blog.url}
              className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Read More
              <FaExternalLinkAlt size={12} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;