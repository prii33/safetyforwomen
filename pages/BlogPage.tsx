import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import redmist from '@/assets/redmist2.mov';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Safe Streets, Safe Workplaces, Safe India: Protecting Women in a Changing World",
    excerpt: "Ensuring women's safety in India is a pressing concern that demands immediate and sustained attention. Despite legislative reforms and public awareness campaigns, incidents of violence against women continue to surface, underscoring deep-seated societal challenges....",
    date: "11 Mar 2025",
    author: "Safety For Women",
    image: "https://safetyforwomen.org/wp-content/uploads/2025/03/blog-2-400x250.jpg",
    url: "https://safetyforwomen.org/safe-streets-safe-workplaces-safe-india-protecting-women-in-a-changing-world/"
  },
  {
    id: 2,
    title: "Finding My Voice: From Silent Survivor to Empowered Advocate",
    excerpt: "I remember the day with crystal clarity. I was wearing a lemon-yellow salwar kameez, just months shy of my 18th birthday. As usual, I had walked the kilometer to catch the State transport bus to college. In my mind, I was confident and beautiful. Fortune smiled as I...",
    date: "11 Mar 2025",
    author: "Safety For Women",
    image: "https://safetyforwomen.org/wp-content/uploads/2025/03/123.jpeg",
    url: "https://safetyforwomen.org/finding-my-voice-from-silent-survivor-to-empowered-advocate/"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero
        title="Stories & Insight"
        subtitle="Blog"
        description="Updates and insights on women's safety and empowerment."
        videoSrc={redmist}
        scrollY={0}
      />

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#2a100e] to-black rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#3d1a15] hover:border-brand-red/50 shadow-lg hover:shadow-brand-red/20 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <i className="fa fa-calendar w-4 h-4 mr-2 text-brand-red" aria-hidden="true"></i>
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <i className="fa fa-user w-4 h-4 mr-2 text-brand-red" aria-hidden="true"></i>
                    {post.author}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-red font-semibold hover:text-white transition-colors"
                >
                  Read More
                  <i className="fa fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
