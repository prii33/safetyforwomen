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
      <OrbsBackground variant="subtle" />
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
          {blogPosts.map((post, index) =>
            post.externalUrl ? (
              <a
                key={post.slug}
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 rounded-xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden shadow-xl hover:shadow-brand-red/10 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
                    {/* Content Side */}
                    <div className={`space-y-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#8a4a3b]/80 text-white text-xs font-bold uppercase tracking-wider border border-[#8a4a3b]/30 backdrop-blur-sm shadow-lg">
                             Article
                        </div>
                        <span className="text-brand-light-text text-sm flex items-center gap-1">
                          <i className="fa fa-clock-o text-[#8a4a3b] text-base"></i> {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-white transition-colors">
                        {post.title}
                      </h2>

                      <div className="flex items-center gap-4 text-sm text-brand-light-text/80 border-b border-brand-red/10 pb-3">
                        <span className="flex items-center gap-2">
                           <i className="fa fa-calendar text-[#8a4a3b] text-base"></i>
                           {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                           <i className="fa fa-user text-[#8a4a3b] text-base"></i>
                           {post.author}
                        </span>
                      </div>

                      <p className="text-brand-light-text/80 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="pt-2">
                        <span className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors">
                            <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                            <span className="underline decoration-2 tracking-wider underline-offset-2 uppercase text-xs">Read Full Story</span>
                        </span>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`relative h-[250px] md:h-[300px] rounded-xl overflow-hidden ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                       <div className="absolute inset-0 bg-black/20 z-10"></div>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                       <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 contrast-110"
                       />
                    </div>
                  </div>
                </motion.div>
              </a>
            ) : (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 rounded-xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#2a100e] to-black rounded-xl overflow-hidden shadow-xl hover:shadow-brand-red/10 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
                    {/* Content Side */}
                    <div className={`space-y-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#8a4a3b]/80 text-white text-xs font-bold uppercase tracking-wider border border-[#8a4a3b]/30 backdrop-blur-sm shadow-lg">
                             Article
                        </div>
                        <span className="text-brand-light-text text-sm flex items-center gap-1">
                          <i className="fa fa-clock-o text-[#8a4a3b] text-base"></i> {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-white transition-colors">
                        {post.title}
                      </h2>

                      <div className="flex items-center gap-4 text-sm text-brand-light-text/80 border-b border-brand-red/10 pb-3">
                        <span className="flex items-center gap-2">
                           <i className="fa fa-calendar text-[#8a4a3b] text-base"></i>
                           {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                           <i className="fa fa-user text-[#8a4a3b] text-base"></i>
                           {post.author}
                        </span>
                      </div>

                      <p className="text-brand-light-text/80 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="pt-2">
                        <span className="group inline-flex items-center gap-2 text-[#2DD4BF] font-bold text-base hover:text-[#2DD4BF]/80 transition-colors">
                            <svg className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                            <span className="underline decoration-2 tracking-wider underline-offset-2 uppercase text-xs">Read Full Story</span>
                        </span>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`relative h-[250px] md:h-[300px] rounded-xl overflow-hidden ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                       <div className="absolute inset-0 bg-black/20 z-10"></div>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                       <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 contrast-110"
                       />
                    </div>
                  </div>
                </motion.div>
              </Link>
            )
          )}
        </div>
      </div>
      
      <ShareStorySection />
    </div>
  );
};

export default BlogPage;
