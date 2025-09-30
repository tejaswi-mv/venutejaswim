import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Venu Tejaswi - Software Developer",
  description:
    "This is the portfolio of Venu Tejaswi. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    icon: '/profile.svg',
    shortcut: '/profile.svg',
    apple: '/profile.png',
  },
  openGraph: {
    title: "Portfolio of Venu Tejaswi - Software Developer",
    description: "This is the portfolio of Venu Tejaswi. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others.",
    images: ['/profile.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Portfolio of Venu Tejaswi - Software Developer",
    description: "This is the portfolio of Venu Tejaswi. I am a full stack developer and a self taught developer.",
    images: ['/profile.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#ffffff' }}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <ToastContainer />
          <main id="main-content" className="min-h-screen relative w-full text-text-primary transition-colors duration-300 main-content px-4 sm:px-6 lg:px-8 xl:px-12">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
