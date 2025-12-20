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

      <div className={`relative w-full ${post.image ? 'mb-4 flex items-start -mt-32' : 'pt-24 pb-8'}`}>
        {post.image && (
          <div className="absolute inset-0 z-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-contain object-top" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
          </div>
        )}

        <div className={`container mx-auto px-4 relative z-10 ${post.image ? 'pb-4' : ''}`} style={post.image ? { paddingTop: '450px' } : undefined}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-left max-w-4xl mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">{post.title}</h1>

            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center flex-wrap gap-2 md:gap-3 text-sm text-gray-200">
                {post.author ? (
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold uppercase backdrop-blur-sm">
                      {post.author
                        .split(' ')
                        .map((chunk) => chunk[0])
                        .join('')
                        .slice(0, 2)}
                    </span>
                    <span className="font-medium text-white drop-shadow-md">{post.author}</span>
                  </div>
                ) : null}
                <span className="text-gray-400">|</span>
                <span className="drop-shadow-md">{post.date}</span>
                <span className="text-gray-400">|</span>
                <span className="drop-shadow-md">{post.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 border border-white/20 rounded-md text-xs font-medium hover:bg-black/50 transition-colors text-white group backdrop-blur-sm"
                >
                  <span className="group-hover:text-blue-400 transition-colors">
                    <FaFacebook />
                  </span>
                  Share
                </button>
                <button
                  onClick={handleTweet}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 border border-white/20 rounded-md text-xs font-medium hover:bg-black/50 transition-colors text-white group backdrop-blur-sm"
                >
                  <span className="group-hover:text-sky-400 transition-colors">
                    <FaTwitter />
                  </span>
                  Tweet
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 border border-white/20 rounded-md text-xs font-medium hover:bg-black/50 transition-colors text-white group backdrop-blur-sm"
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
            {post.authorBio ||
              (post.author ? `About the Author: ${post.author}` : 'Safety For Women')}
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
