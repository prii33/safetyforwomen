import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import OrbsBackground from '../components/OrbsBackground';
import ShareStorySection from '../components/ShareStorySection';
import { getAllPostsMeta, BlogFrontmatter } from '../utils/blog';

const blogPosts: BlogFrontmatter[] = getAllPostsMeta();

const BlogPage: React.FC = () => {
  return (
    <div className="relative min-h-screen text-brand-light">
      <OrbsBackground />
      <Hero
        title="Stories & Insights"
        subtitle="Our Blog"
        description="Updates and insights on women's safety and empowerment."
        videoSrc=""
        scrollY={0}
        transparent={true}
        className="!pb-8"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden shadow-xl hover:shadow-brand-red/10 hover:border-brand-red/40 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
                {/* Content Side */}
                <div className={`space-y-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="inline-block px-3 py-1 bg-brand-red/20 border border-brand-red/40 rounded-full">
                       <span className="text-brand-red font-bold tracking-wider uppercase text-[10px]">
                         Article
                       </span>
                    </div>
                    <span className="text-brand-light-text text-sm flex items-center gap-1">
                      <i className="fa fa-clock-o text-brand-red/70"></i> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h2>

                  <div className="flex items-center gap-4 text-sm text-brand-light-text/80 border-b border-brand-red/10 pb-3">
                    <span className="flex items-center gap-2">
                       <i className="fa fa-calendar text-brand-red"></i>
                       {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                       <i className="fa fa-user text-brand-red"></i>
                       {post.author}
                    </span>
                  </div>

                  <p className="text-brand-light-text/80 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    {post.externalUrl ? (
                      <a 
                        href={post.externalUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-red font-bold uppercase text-xs tracking-widest hover:text-white transition-colors"
                      >
                        Read Full Story <i className="fa fa-long-arrow-right"></i>
                      </a>
                    ) : (
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-brand-red font-bold uppercase text-xs tracking-widest hover:text-white transition-colors"
                      >
                        Read Full Story <i className="fa fa-long-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`relative h-[250px] rounded-xl overflow-hidden ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                   <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ShareStorySection />
    </div>
  );
};

export default BlogPage;
