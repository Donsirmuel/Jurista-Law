import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { BlogHero } from '../components/heroes/BlogHero';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { BLOG_POSTS, ATTORNEYS, PRACTICE_AREAS } from '../data/firmData';

interface BlogIndexPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const featuredPost = BLOG_POSTS.find((p) => p.isFeatured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  const featuredAuthor = ATTORNEYS.find((a) => a.id === featuredPost.authorId);
  const featuredPractice = PRACTICE_AREAS.find((p) => p.id === featuredPost.practiceSlug);

  return (
    <div className="w-full">
      {/* Distinct Quiet Content-First Blog Hero with Open Book & Quill */}
      <BlogHero onNavigate={onNavigate} />

      {/* Main Blog Content */}
      <section className="py-16 lg:py-20 bg-[#F1F4EC]">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
          {/* Featured Post (Large Top Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            onClick={() => onNavigate({ type: 'blog-detail', slug: featuredPost.slug })}
            className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-8 sm:p-12 mb-16 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#2E4C47] mb-4">
              <span className="text-[#9C4A32] font-bold uppercase tracking-wider">
                {featuredPractice?.name}
              </span>
              <span>·</span>
              <span>{featuredPost.date}</span>
              <span>·</span>
              <span>{featuredPost.readTime}</span>
              <span className="bg-[#C6902E]/20 text-[#173330] px-2.5 py-0.5 rounded-full font-bold">
                Featured article
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#173330] group-hover:text-[#9C4A32] transition-colors tracking-tight leading-tight mb-4">
              {featuredPost.title}
            </h2>

            <p className="text-base sm:text-lg text-[#2E4C47] leading-relaxed max-w-3xl mb-8">
              {featuredPost.excerpt}
            </p>

            {featuredAuthor && (
              <div className="flex items-center gap-3 pt-6 border-t border-[#173330]/10">
                <div className="w-10 h-10">
                  <AttorneyPortrait styleId={featuredAuthor.portraitStyle} size="100%" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#173330]">{featuredAuthor.name}</div>
                  <div className="text-xs text-[#2E4C47]">{featuredAuthor.role}</div>
                </div>
                <div className="ml-auto text-xs font-bold text-[#173330] group-hover:text-[#9C4A32] flex items-center gap-1">
                  <span>Read article</span>
                  <span>→</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Grid of Remaining Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, idx) => {
              const practice = PRACTICE_AREAS.find((p) => p.id === post.practiceSlug);
              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => onNavigate({ type: 'blog-detail', slug: post.slug })}
                  className="bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-7 hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#2E4C47] mb-3">
                      <span className="text-[#9C4A32] font-bold uppercase tracking-wider">
                        {practice?.name}
                      </span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif font-semibold text-xl text-[#173330] group-hover:text-[#9C4A32] transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[#2E4C47] leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#173330]/8 flex items-center justify-between text-xs">
                    <span className="text-[#2E4C47]">{post.date}</span>
                    <span className="font-bold text-[#173330] group-hover:text-[#9C4A32] transition-colors">
                      Read article →
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Standalone Newsletter Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mt-20 bg-[#E6E4D2]/60 border border-[#173330]/12 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto"
          >
            <span className="text-[#9C4A32] font-bold text-xs uppercase tracking-wider block mb-2">
              Updates
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#173330] mb-3">
              Get our monthly email.
            </h3>
            <p className="text-sm sm:text-base text-[#2E4C47] max-w-lg mx-auto mb-6 leading-relaxed">
              One email a month. Practical legal explanations and updates on new rules, without marketing fluff.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#FAFCF6] border border-[#173330]/20 rounded-full px-5 py-3 text-sm text-[#173330] placeholder:text-[#2E4C47]/50 focus:outline-none focus:ring-2 focus:ring-[#C6902E] grow"
                />
                <button
                  type="submit"
                  className="bg-[#173330] hover:bg-[#2E4C47] text-[#F1F4EC] px-7 py-3 rounded-full font-bold text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-[#FAFCF6] border border-[#173330]/10 p-4 rounded-xl max-w-md mx-auto text-sm text-[#173330] font-semibold">
                ✓ You are subscribed. We'll send our next update to your inbox.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
