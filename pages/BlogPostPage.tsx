import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import OrbsBackground from '../components/OrbsBackground';
import { getPostBySlug } from '../utils/blog';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  useEffect(() => {
    if (post?.externalUrl) {
      // For externally hosted stories, open the source and keep a simple message here.
      window.open(post.externalUrl, '_blank', 'noopener,noreferrer');
    }
  }, [post]);

  const shareUrl =
    typeof window !== 'undefined' ? window.location.href : post?.externalUrl || '';

  const handleShare = () => {
    if (!shareUrl) return;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleTweet = () => {
    if (!shareUrl || !post) return;
    const text = `${post.title}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(
        shareUrl
      )}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopy = async () => {
    if (!shareUrl || typeof navigator === 'undefined') return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      // Intentionally quiet; could be replaced with a toast.
    } catch {
      // ignore
    }
  };

  if (!post) {
    return (
      <div className="bg-brand-dark min-h-screen text-brand-light flex items-center justify-center px-4">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-3xl font-bold text-white">Article not found</h1>
          <p className="text-brand-light-text">
            The article you are looking for may have been moved or removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 border border-brand-red/30 rounded-full text-brand-light hover:border-brand-red hover:text-brand-red transition-all duration-300 text-sm"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans relative overflow-hidden">
      <OrbsBackground />

      <div className="container mx-auto px-4 pt-20 md:pt-28 pb-8 relative z-20">
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <div className="md:absolute md:left-0 mb-6 md:mb-0">
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 border border-brand-red/30 rounded-full text-brand-light hover:border-brand-red hover:text-brand-red transition-all duration-300 text-sm group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Blog
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              <span className="block font-semibold text-sm md:text-xl uppercase tracking-[0.2em] md:tracking-[0.5em] mb-2">
                Stories & Insight
              </span>
              <span className="block text-brand-red">Blog</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="relative pb-4 px-4 container mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
          <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4 block">
            {post.author || 'Safety For Women'}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">{post.title}</h1>

          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 text-sm text-gray-300 mb-3">
              {post.author ? (
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase">
                    {post.author
                      .split(' ')
                      .map((chunk) => chunk[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                  <span className="font-medium text-white">{post.author}</span>
                </div>
              ) : null}
              <span className="text-gray-600">|</span>
              <span>{post.date}</span>
              <span className="text-gray-600">|</span>
              <span>{post.readTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium hover:bg-white/10 transition-colors text-white group"
              >
                <span className="group-hover:text-blue-400 transition-colors">
                  <FaFacebook />
                </span>
                Share
              </button>
              <button
                onClick={handleTweet}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium hover:bg-white/10 transition-colors text-white group"
              >
                <span className="group-hover:text-sky-400 transition-colors">
                  <FaTwitter />
                </span>
                Tweet
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium hover:bg-white/10 transition-colors text-white group"
              >
                <span className="group-hover:text-brand-red transition-colors">
                  <FaLink />
                </span>
                Copy
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mb-8 relative z-10">
        {post.image ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-red/20 h-[300px] md:h-[450px]"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>
        ) : null}
      </div>

      <div className="container mx-auto px-4 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-brand-red prose-strong:text-white leading-snug"
        >
          {post.externalUrl ? (
            <div className="p-6 border border-brand-red/30 bg-brand-red/5 rounded-xl text-center space-y-3">
              <p className="text-brand-light-text">
                This story is hosted externally. It should open in a new tab. If it didn&apos;t, use the button
                below.
              </p>
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red text-white rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-red transition-colors"
              >
                Read Full Story
              </a>
            </div>
          ) : (
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          )}

          {post.tags && post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-brand-red/20">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-brand-red bg-brand-red/10 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-8 text-sm text-gray-500 italic">
            {post.author ? `About the Author: ${post.author}` : 'Safety For Women'}
          </div>

          <div className="mt-12 pt-8 border-t border-brand-red/20 flex justify-between items-center">
            <Link
              to="/blog"
              className="text-brand-light-text hover:text-brand-red transition-colors flex items-center gap-2 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Other Articles
            </Link>
            <Link to="/" className="text-brand-light-text hover:text-brand-red transition-colors">
              Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;

