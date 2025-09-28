import { personalData } from "@/utils/data/personal-data";
import { getMediumBlogs } from "@/utils/medium-blog-fetcher";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  try {
    // Import the Medium blog fetcher directly instead of using API route
    const { getMediumBlogs } = await import('@/utils/medium-blog-fetcher');
    const { personalData } = await import('@/utils/data/personal-data');
    
    const blogs = await getMediumBlogs(personalData.mediumUsername);
    return blogs.slice(0, 6); // Show only first 6 blogs on homepage
  } catch (error) {
    console.error('Error fetching Medium blogs:', error);
    return []; // Return empty array on error
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};