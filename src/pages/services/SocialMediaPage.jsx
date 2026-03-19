import useAOS from '../../hooks/useAOS';

export default function SocialMediaPage() {
  useAOS();

  const features = [
    { icon: 'bi-graph-up-arrow', title: 'Account Management', desc: 'Complete social media oversight' },
    { icon: 'bi-calendar3', title: 'Content Calendar', desc: 'Strategic posting schedule' },
    { icon: 'bi-palette', title: 'Graphic Designing', desc: 'Eye-catching visual content' },
    { icon: 'bi-pen', title: 'Copywriting', desc: 'Compelling brand storytelling' },
    { icon: 'bi-hash', title: 'Hashtag Optimization', desc: 'Maximum reach & visibility' },
    { icon: 'bi-rocket-takeoff', title: 'Growth Blueprint', desc: 'Scalable growth strategies' },
  ];

  return (
    <>
      <div className="container">
        <header className="hero-detail">
          <h1>DIGITAL <span className="highlight">EXPERTISE</span></h1>
          <p style={{ color: 'var(--text-gray)', letterSpacing: '3px' }}>STRATEGIC SOCIAL MEDIA GROWTH</p>
        </header>

        <section className="expertise-section py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="expertise-content" data-aos="fade-right">
                  <div className="badge mb-3"><span className="badge-text">Social Media Excellence</span></div>
                  <h2 className="display-4 fw-bold mb-4">Social Media <span className="neon-text">Marketing</span></h2>
                  <p className="lead mb-4">We empower brands to dominate Instagram through data-driven strategies and high-engagement content. We don't just post content; we build a thriving community that connects deeply with your brand identity.</p>
                  <div className="expertise-features">
                    {features.map((f, i) => (
                      <div className="feature-item" key={i}>
                        <div className="feature-icon"><i className={`bi ${f.icon}`}></i></div>
                        <div className="feature-text">
                          <h5>{f.title}</h5>
                          <p>{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a href="https://calendly.com/zedelevatedigital/30min" className="btn-neon me-3">Get Started</a>
                    <a href="#contact" className="btn-neon-outline">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="expertise-visual" data-aos="fade-left">
                  <div className="image-frame">
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Social Media Strategy" className="img-fluid rounded-4" />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="stats">
                          <div className="stat"><h3>200%</h3><p>Engagement Growth</p></div>
                          <div className="stat"><h3>50K+</h3><p>Reach Increase</p></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section py-5">
          <h2 className="text-center mb-5">Our <span className="highlight">Success Stories</span></h2>
          <div className="category-section mb-5">
            <h3 className="category-title mb-4">Fashion & Lifestyle</h3>
            <div className="row g-4">
              {[
                { img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop', badge: 'Fashion', title: 'Kalamkari Creations', desc: 'Traditional Indian wear brand specializing in handcrafted sarees and ethnic wear. We helped them reach 1M+ followers through authentic cultural content.', stats: ['1.2M Followers', '450% Growth'] },
                { img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', badge: 'Beauty', title: 'Shringar Bridal Studio', desc: 'Luxury bridal makeup and styling service. Our strategic content showcasing traditional bridal looks increased their bookings by 300%.', stats: ['850K Followers', '12M Likes'] },
              ].map((p, i) => (
                <div className="col-md-6" key={i}>
                  <div className="portfolio-card glass-card h-100" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="portfolio-image">
                      <img src={p.img} alt={p.title} className="img-fluid rounded-3" />
                      <div className="portfolio-overlay"><span className="portfolio-badge">{p.badge}</span></div>
                    </div>
                    <div className="portfolio-content p-4">
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                      <div className="portfolio-stats">
                        {p.stats.map((s, j) => <span key={j}><i className="bi bi-people-fill"></i> {s}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="category-section mb-5">
            <h3 className="category-title mb-4">Food & Beverage</h3>
            <div className="row g-4">
              {[
                { img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop', badge: 'Restaurant', title: 'Madras Mahal', desc: 'Authentic South Indian restaurant chain. We created content around traditional recipes and cultural dining experiences, doubling their online presence.', stats: ['5 Cities', '4.8 Rating'] },
                { img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop', badge: 'Street Food', title: 'Chaat Corner', desc: 'Popular street food brand specializing in Indian chaat and snacks. Our viral content strategy made them a social media sensation with 2M+ views.', stats: ['2.5M Views', '15 Outlets'] },
              ].map((p, i) => (
                <div className="col-md-6" key={i}>
                  <div className="portfolio-card glass-card h-100" data-aos="fade-up" data-aos-delay={(i + 2) * 100}>
                    <div className="portfolio-image">
                      <img src={p.img} alt={p.title} className="img-fluid rounded-3" />
                      <div className="portfolio-overlay"><span className="portfolio-badge">{p.badge}</span></div>
                    </div>
                    <div className="portfolio-content p-4">
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                      <div className="portfolio-stats">
                        {p.stats.map((s, j) => <span key={j}><i className="bi bi-graph-up"></i> {s}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-us py-5">
          <h2 className="text-center mb-5" style={{ fontSize: '2.2rem' }}>Why Partner With <span className="highlight">Zed Elevate?</span></h2>
          <div className="row g-4">
            {[{ t: 'Organic', d: '100% Authentic Engagement' }, { t: 'Strategic', d: 'Psychology-Based Content' }, { t: 'Results', d: 'ROI-Focused Growth' }].map((c, i) => (
              <div className="col-md-4" key={i}>
                <div className="stat-card text-center p-4 glass-card h-100"><h3>{c.t}</h3><p>{c.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section py-5">
          <h2 className="text-center mb-5">Our <span className="highlight">Process</span></h2>
          <div className="row g-4">
            {[
              { t: '01. Discovery & Analysis', d: "We start by analyzing your brand voice and auditing your competitors to identify growth opportunities." },
              { t: '02. Content Curation', d: "We craft high-quality visuals and scroll-stopping captions designed to capture your audience's attention instantly." },
              { t: '03. Execution & Growth', d: 'Through consistent posting and strategic engagement, we scale your account to build long-term authority.' },
            ].map((s, i) => (
              <div className="col-lg-4" key={i}>
                <div className="process-step p-4 glass-card h-100"><h4>{s.t}</h4><p>{s.d}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
