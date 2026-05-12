import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEO from '../components/SEO';

export default function BlogPage() {
  useAOS();

  const posts = [
    { img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600', tag: 'KANPUR BUSINESS', date: 'Mar 23, 2026', title: 'Top 5 Digital Marketing Agencies in Kanpur (2026)', desc: 'Discover the leading agencies helping local businesses scale with SEO and SMM.', link: '/blog/top-agencies-kanpur' },
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600', tag: 'WEB DEVELOPMENT', date: 'Mar 23, 2026', title: 'Why Every Kanpur Business Needs a Professional Website', desc: 'Build trust and capture leads 24/7 with a premium digital storefront.', link: '/blog/business-website-kanpur' },
    { img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600', tag: 'CONTENT STRATEGY', date: 'Mar 23, 2026', title: 'Boosting Reels Engagement: Guide for Kanpur Brands', desc: 'Master short-form video to grow your local presence organically.', link: '/blog/reels-engagement-guide' },
    { img: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=600', tag: 'SEO TIPS', date: 'Mar 23, 2026', title: 'How to Rank on Google: Tips for Kanpur Entrepreneurs', desc: 'Cost-effective SEO strategies to dominate local search results.', link: '/blog/rank-on-google-tips' },
    { img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600', tag: 'BRAND STRATEGY', date: 'Mar 23, 2026', title: 'Branding vs. Marketing: Which One for Your Startup?', desc: 'Understand the key differences to build a lasting and scalable business.', link: '/blog/branding-vs-marketing' },
    { img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600', tag: 'AI & TECH', date: 'Mar 10, 2026', title: 'AI in Design 2026: The Future of Creativity', desc: 'How AI is changing video editing and graphic design workflows this year.', link: '/blog/ai-in-design' },
    { img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600', tag: 'SOCIAL MEDIA', date: 'Mar 08, 2026', title: 'Mastering the 3-Second Hook for Viral Reels', desc: 'In 2026, the battle for attention is won in the first few moments.', link: '/blog/reels-engagement' },
  ];

  return (
    <>
      <SEO 
        title="Blog & Insights" 
        description="Stay updated with the latest digital marketing trends, SEO tips, and branding strategies for Kanpur businesses on the Zed Elevate Digital blog."
        canonical="/blog"
      />
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <h1 className="display-3 fw-bold mb-4">Creative <span className="neon-text">&amp; Marketing</span> Insights</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '800px' }}>Explore the latest trends in digital marketing, design, and business scaling.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Featured Post */}
            <div className="col-12" data-aos="fade-up">
              <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(0,243,255,0.08), rgba(0,80,255,0.06))', border: '1px solid rgba(0,243,255,0.25)' }}>
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800" className="img-fluid rounded-3 border border-info" alt="Kanpur SEO Google Ranking" />
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <span className="badge bg-info text-dark">FEATURED</span>{' '}
                      <span className="badge" style={{ background: 'rgba(0,243,255,0.15)', color: '#00f3ff', border: '1px solid rgba(0,243,255,0.3)' }}>LOCAL SEO</span>{' '}
                      <span className="small opacity-50 ms-2">May 12, 2026</span>
                    </div>
                    <h3 className="fw-bold mb-3">Why Kanpur Businesses Are Still Invisible on Google — And How to Fix It in 30 Days</h3>
                    <p className="opacity-75 mb-4">73% of Kanpur consumers search Google before visiting any local store, clinic, or service provider. We audited 40+ Kanpur businesses and found the same 7 mistakes over and over. Every single one is fixable.</p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {['Google Business Profile', 'Local SEO', 'Website Speed', '12 min read'].map((tag, i) => (
                        <span key={i} className="badge" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '0.75rem' }}>{tag}</span>
                      ))}
                    </div>
                    <Link to="/blog/kanpur-invisible-google" className="btn-neon" style={{ fontSize: '0.85rem' }}>READ FULL ARTICLE →</Link>
                  </div>
                </div>
              </div>
            </div>

            {posts.map((p, i) => (
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 100} key={i}>
                <div className="glass-card h-100">
                  <img src={p.img} className="img-fluid rounded-3 mb-4 border border-info" alt={p.title} />
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">{p.tag}</span>
                    <span className="small opacity-50 ms-2">{p.date}</span>
                  </div>
                  <h4>{p.title}</h4>
                  <p className="small opacity-75 mb-4">{p.desc}</p>
                  <Link to={p.link} className="neon-text text-decoration-none fw-bold">Read Full Article →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
