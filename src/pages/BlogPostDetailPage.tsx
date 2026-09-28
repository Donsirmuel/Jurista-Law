import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { AttorneyPortrait } from '../components/AttorneyPortraits';
import { BrickCheckIcon } from '../components/LineIcons';
import { FinalCtaBand } from '../components/FinalCtaBand';
import { BLOG_POSTS, ATTORNEYS, PRACTICE_AREAS } from '../data/firmData';

interface BlogPostDetailPageProps {
  slug: string;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
}) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const author = ATTORNEYS.find((a) => a.id === post.authorId);
  const practice = PRACTICE_AREAS.find((p) => p.id === post.practiceSlug);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#E6E4D2]/40 pt-6 pb-12 border-b border-[#173330]/10">
        <div className="max-w-[820px] mx-auto px-6 sm:px-8">
          <Breadcrumb
            items={[
              { label: 'Blog & Insights', route: { type: 'blog' } },
              { label: post.title },
            ]}
            onNavigate={onNavigate}
          />

          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#2E4C47] mb-4">
              <span className="text-[#9C4A32] font-bold uppercase tracking-wider">
                {practice?.name}
              </span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif font-semibold text-[#173330] tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            {/* Author Byline at top */}
            {author && (
              <div
                onClick={() => onNavigate({ type: 'attorney-detail', id: author.id })}
                className="flex items-center gap-3.5 pt-4 border-t border-[#173330]/10 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-[#FAFCF6] border border-[#173330]/12 rounded-full p-1 group-hover:scale-105 transition-transform">
                  <AttorneyPortrait styleId={author.portraitStyle} size="100%" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#173330] group-hover:text-[#9C4A32] transition-colors">
                    {author.name}
                  </div>
                  <div className="text-xs text-[#2E4C47]">{author.role}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Article Typography */}
      <article className="py-16 lg:py-20 bg-[#F1F4EC]">
        <div className="max-w-[760px] mx-auto px-6 sm:px-8">
          {/* Excerpt Lead */}
          <p className="text-lg sm:text-xl text-[#173330] font-serif italic leading-relaxed mb-10 pb-6 border-b border-[#173330]/10">
            {post.excerpt}
          </p>

          {/* Article Sections */}
          <div className="space-y-10 text-base sm:text-lg text-[#2E4C47] leading-relaxed">
            {post.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-[#173330] pt-2">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="mt-12 bg-[#FAFCF6] border border-[#173330]/12 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9C4A32] mb-3">
                Key Legal Takeaways
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-[#173330]">
                {post.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BrickCheckIcon size={18} className="mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Author Byline at bottom */}
          {author && (
            <div className="mt-14 pt-8 border-t border-[#173330]/10 flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#FAFCF6] border border-[#173330]/12 p-6 rounded-2xl">
              <div className="w-16 h-16 shrink-0">
                <AttorneyPortrait styleId={author.portraitStyle} size="100%" />
              </div>
              <div>
                <span className="text-[0.75rem] uppercase font-bold tracking-wider text-[#9C4A32] block mb-1">
                  About the Author
                </span>
                <h4
                  onClick={() => onNavigate({ type: 'attorney-detail', id: author.id })}
                  className="font-serif font-semibold text-lg text-[#173330] hover:text-[#9C4A32] cursor-pointer"
                >
                  {author.name}
                </h4>
                <p className="text-xs text-[#2E4C47] mt-1 mb-3">
                  {author.bio[0]}
                </p>
                <button
                  onClick={() => onNavigate({ type: 'attorney-detail', id: author.id })}
                  className="text-xs font-bold text-[#9C4A32] hover:underline"
                >
                  View full attorney profile →
                </button>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts Strip */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#FAFCF6] border-t border-[#173330]/10">
          <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
            <h3 className="font-serif font-semibold text-2xl text-[#173330] mb-8">
              Related Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  onClick={() => onNavigate({ type: 'blog-detail', slug: rPost.slug })}
                  className="bg-[#F1F4EC] border border-[#173330]/10 p-6 rounded-xl hover:border-[#173330]/30 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-[#9C4A32] font-bold uppercase tracking-wider block mb-2">
                      {rPost.readTime}
                    </span>
                    <h4 className="font-serif font-semibold text-lg text-[#173330] group-hover:text-[#9C4A32] transition-colors leading-snug mb-2">
                      {rPost.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-[#173330] group-hover:text-[#9C4A32] transition-colors mt-4">
                    Read article →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Band */}
      <FinalCtaBand onOpenBooking={onOpenBooking} />
    </div>
  );
};
