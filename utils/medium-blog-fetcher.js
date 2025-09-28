import { sampleBlogs } from './sample-blog-data';

// Utility function to fetch Medium blogs from RSS feed
export async function getMediumBlogs(username) {
  try {
    // For now, let's use sample data since Medium RSS might be blocked
    // In production, you would need to set up a proper server-side solution
    console.log('Using sample blog data for demonstration');
    return sampleBlogs;
    
    // Uncomment below code when you have a proper server-side RSS parser
    /*
    const rssUrl = `https://medium.com/feed/@${username}`;
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(proxyUrl, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium blogs');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('RSS feed parsing failed');
    }
    
    const blogs = data.items.map((item, index) => ({
      id: index,
      title: item.title,
      description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      url: item.link,
      cover_image: item.thumbnail || '/png/placeholder.png',
      published_at: item.pubDate,
      reading_time_minutes: Math.ceil(item.content.split(' ').length / 200) || 5,
      public_reactions_count: 0,
      comments_count: 0,
      author: item.author,
      categories: item.categories || []
    }));
    
    return blogs;
    */
  } catch (error) {
    console.error('Error fetching Medium blogs, using sample data:', error);
    return sampleBlogs;
  }
}

// Alternative method using Medium's unofficial API
export async function getMediumBlogsAlternative(username) {
  try {
    // This uses a different approach - you might need to implement your own server-side solution
    const response = await fetch(`https://api.medium.com/v1/users/${username}/posts`, {
      headers: {
        'Authorization': `Bearer ${process.env.MEDIUM_ACCESS_TOKEN}`, // You'd need to get this from Medium
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium blogs');
    }
    
    const data = await response.json();
    
    const blogs = data.data.map((post, index) => ({
      id: index,
      title: post.title,
      description: post.content?.subtitle || post.title,
      url: post.url,
      cover_image: post.virtuals?.previewImage?.imageId ? 
        `https://cdn-images-1.medium.com/max/800/${post.virtuals.previewImage.imageId}` : 
        '/png/placeholder.png',
      published_at: new Date(post.createdAt).toISOString(),
      reading_time_minutes: post.virtuals?.totalClapCount || 5,
      public_reactions_count: post.virtuals?.totalClapCount || 0,
      comments_count: 0,
      author: post.author?.name || username,
      categories: post.virtuals?.tags?.map(tag => tag.name) || []
    }));
    
    return blogs;
  } catch (error) {
    console.error('Error fetching Medium blogs:', error);
    return [];
  }
}
