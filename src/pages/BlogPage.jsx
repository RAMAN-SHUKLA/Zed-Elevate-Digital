import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';

export default function BlogPage() {
  useAOS();

  const posts = [
    { img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600', tag: 'AI & TECH', date: 'Mar 10, 2026', title: 'AI in Design 2026: The Future of Creativity', desc: 'How AI is changing video editing and graphic design workflows this year.', link: '/blog/ai-in-design' },
    { img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600', tag: 'SOCIAL MEDIA', date: 'Mar 08, 2026', title: 'Mastering the 3-Second Hook for Viral Reels', desc: 'In 2026, the battle for attention is won in the first few moments.', link: '/blog/reels-engagement' },
    { img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600', tag: 'BRANDING', date: 'Mar 05, 2026', title: 'Building Legacies: The ROI of Brand Identity', desc: 'Why consistent branding is your most valuable asset in a digital world.', link: '/services/branding' },
  ];

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <h1 className="display-3 fw-bold mb-4">Creative <span className="neon-text">&amp; Marketing</span> Insights</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '800px' }}>Explore the latest trends in digital marketing, design, and business scaling.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
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
