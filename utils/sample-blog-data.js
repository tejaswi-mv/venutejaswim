// Sample blog data as fallback when Medium RSS feed is not available
export const sampleBlogs = [
  {
    id: 1,
    title: "Complete Tutorial: Build an n8n Automation to Find DevOps/SRE Tech Leads for Networking",
    description: "This tutorial will teach you to build a complete automation workflow that searches LinkedIn for DevOps and SRE Tech Leads in India, extracts their profile data, and saves it to Google Sheets for networking purposes....",
    url: "https://medium.com/towardsdev/complete-tutorial-build-an-n8n-automation-to-find-devops-sre-tech-leads-for-networking-8dddfeeff08a",
    cover_image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*kmdTRRgg_993u26-mt97Lg.png",
    published_at: new Date().toISOString(),
    reading_time_minutes: 8,
    public_reactions_count: 42,
    comments_count: 5,
    author: "Venu Tejaswi",
    categories: ["N8n","Automation","DevOps","Kubernetes","Technology"]
  },
  {
    id: 2,
    title: "Understanding Kubernetes Namespaces: Your Digital Office Building",
    description: "Imagine you’re managing a massive office building with hundreds of companies, each with their own floors, departments, and resources.",     url: "https://medium.com/towardsdev/understanding-kubernetes-namespaces-your-digital-office-building-70e51566f68b",
    cover_image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*UJIrEX3IH2FvkBuUEmaAPA.png",
    published_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    reading_time_minutes: 12,
    public_reactions_count: 28,
    comments_count: 3,
    author: "Venu Tejaswi",
    categories: ["Kubernetes", "Technology", "Trends"]
  },
  {
    id: 3,
    title: "Deploying MongoDB and Mongo Express on Kubernetes: A Production-Ready Guide",
    description: "A comprehensive guide to TypeScript best practices, advanced patterns, and how to write more maintainable code...",
    url: "hhttps://medium.com/towardsdev/deploying-mongodb-and-mongo-express-on-kubernetes-a-production-ready-guide-bf305fdabd4c",
    cover_image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Xih-dypPU8oONbgCuBSCOg.png",
    published_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    reading_time_minutes: 15,
    public_reactions_count: 67,
    comments_count: 8,
    author: "Venu Tejaswi",
    categories: ["MongoDB", "Programming", "Best Practices"]
  },
  {
    id: 4,
    title: "Deploying Java Microservices with Docker & Kubernetes: A Hands-On DevOps Guide",
    description: "In this article, I’ll walk you through a recent project where I deployed a Java microservice using Docker and Kubernetes. This hands-on tutorial demonstrates the complete process of containerization and orchestration, helping to solidify these essential DevOps concepts through practical implementation.....",
    url: "https://medium.com/@venutejaswim/api-design-patterns",
    cover_image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XrgR4znMDb-TVBx6yMctiA.png",
    published_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    reading_time_minutes: 10,
    public_reactions_count: 35,
    comments_count: 4,
    author: "Venu Tejaswi",
    categories: ["API", "Backend", "Design Patterns"]
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

