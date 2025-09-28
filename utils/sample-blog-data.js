// Sample blog data as fallback when Medium RSS feed is not available
export const sampleBlogs = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    description: "Learn how to build scalable and performant web applications using Next.js, React, and modern development practices...",
    url: "https://medium.com/@venutejaswim/building-modern-web-applications",
    cover_image: "/image/gincy.gif",
    published_at: new Date().toISOString(),
    reading_time_minutes: 8,
    public_reactions_count: 42,
    comments_count: 5,
    author: "Venu Tejaswi",
    categories: ["Next.js", "React", "Web Development"]
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    description: "Exploring the latest trends and technologies shaping the future of frontend development, from AI integration to performance optimization...",
    url: "https://medium.com/@venutejaswim/future-of-frontend-development",
    cover_image: "/image/image.png",
    published_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    reading_time_minutes: 12,
    public_reactions_count: 28,
    comments_count: 3,
    author: "Venu Tejaswi",
    categories: ["Frontend", "Technology", "Trends"]
  },
  {
    id: 3,
    title: "Mastering TypeScript for Better Code Quality",
    description: "A comprehensive guide to TypeScript best practices, advanced patterns, and how to write more maintainable code...",
    url: "https://medium.com/@venutejaswim/mastering-typescript",
    cover_image: "/image/real-estate.jpg",
    published_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    reading_time_minutes: 15,
    public_reactions_count: 67,
    comments_count: 8,
    author: "Venu Tejaswi",
    categories: ["TypeScript", "Programming", "Best Practices"]
  },
  {
    id: 4,
    title: "API Design Patterns and Best Practices",
    description: "Learn essential API design patterns, RESTful principles, and best practices for building robust and scalable APIs...",
    url: "https://medium.com/@venutejaswim/api-design-patterns",
    cover_image: "/image/travel.jpg",
    published_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    reading_time_minutes: 10,
    public_reactions_count: 35,
    comments_count: 4,
    author: "Venu Tejaswi",
    categories: ["API", "Backend", "Design Patterns"]
  },
  {
    id: 5,
    title: "Database Optimization Techniques",
    description: "Essential techniques for optimizing database performance, query optimization, and scaling strategies for modern applications...",
    url: "https://medium.com/@venutejaswim/database-optimization",
    cover_image: "/image/gincy.gif",
    published_at: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    reading_time_minutes: 14,
    public_reactions_count: 52,
    comments_count: 6,
    author: "Venu Tejaswi",
    categories: ["Database", "Performance", "Optimization"]
  },
  {
    id: 6,
    title: "DevOps and CI/CD Pipeline Setup",
    description: "Complete guide to setting up DevOps practices, CI/CD pipelines, and automated deployment strategies for modern applications...",
    url: "https://medium.com/@venutejaswim/devops-cicd-pipeline",
    cover_image: "/image/image.png",
    published_at: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
    reading_time_minutes: 18,
    public_reactions_count: 41,
    comments_count: 7,
    author: "Venu Tejaswi",
    categories: ["DevOps", "CI/CD", "Deployment"]
  }
];

