import { NextResponse } from 'next/server';
import { personalData } from '@/utils/data/personal-data';

export async function GET() {
  try {
    const rssUrl = `https://medium.com/feed/@${personalData.mediumUsername}`;
    
    // Use a CORS proxy service
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Medium blogs');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('RSS feed parsing failed');
    }
    
    // Transform the data to match our blog card format
    const blogs = data.items.map((item, index) => ({
      id: index,
      title: item.title,
      description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...', // Strip HTML and truncate
      url: item.link,
      cover_image: item.thumbnail || '/png/placeholder.png', // Fallback to placeholder
      published_at: item.pubDate,
      reading_time_minutes: Math.ceil(item.content.split(' ').length / 200) || 5, // Estimate reading time
      public_reactions_count: 0, // Medium doesn't provide this in RSS
      comments_count: 0, // Medium doesn't provide this in RSS
      author: item.author,
      categories: item.categories || []
    }));
    
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching Medium blogs:', error);
    return NextResponse.json([], { status: 500 });
  }
}

