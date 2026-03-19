import useAOS from '../hooks/useAOS';

export default function ServicePage({ title, subtitle, badgeText, description, features, image, stats }) {
  useAOS();

  return (
    <div className="container">
      <header className="hero-detail">
        <h1>DIGITAL <span className="highlight">EXPERTISE</span></h1>
        <p style={{ color: 'var(--text-gray)', letterSpacing: '3px' }}>{subtitle}</p>
      </header>

      <section className="expertise-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="expertise-content" data-aos="fade-right">
                <div className="badge mb-3"><span className="badge-text">{badgeText}</span></div>
                <h2 className="display-4 fw-bold mb-4">{title.split(' ').slice(0, -1).join(' ')} <span className="neon-text">{title.split(' ').slice(-1)}</span></h2>
                <p className="lead mb-4">{description}</p>
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
                  <img src={image} alt={title} className="img-fluid rounded-4" />
                  {stats && (
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="stats">
                          {stats.map((s, i) => (
                            <div className="stat" key={i}><h3>{s.value}</h3><p>{s.label}</p></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us py-5">
        <h2 className="text-center mb-5" style={{ fontSize: '2.2rem' }}>Why Partner With <span className="highlight">Zed Elevate?</span></h2>
        <div className="row g-4">
          {[{ t: 'Expert', d: 'Industry-Leading Skills' }, { t: 'Strategic', d: 'Data-Driven Approach' }, { t: 'Results', d: 'ROI-Focused Delivery' }].map((c, i) => (
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
            { t: '01. Discovery & Analysis', d: 'We start by understanding your brand, audience, and goals to craft a tailored strategy.' },
            { t: '02. Creative Execution', d: 'Our team brings your vision to life with premium quality deliverables.' },
            { t: '03. Optimization & Growth', d: 'We continuously refine and optimize for maximum results and sustained growth.' },
          ].map((s, i) => (
            <div className="col-lg-4" key={i}>
              <div className="process-step p-4 glass-card h-100"><h4>{s.t}</h4><p>{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
