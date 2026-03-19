import useAOS from '../../hooks/useAOS';
import { Link } from 'react-router-dom';

export default function BrandingPage() {
  useAOS();

  const services = [
    'Logo & Visual Identity', 'Brand Strategy', 'Tone of Voice', 
    'Color Palette Selection', 'Brand Guidelines', 'Packaging Design'
  ];

  return (
    <div className="container">
      <header className="page-header text-center section-padding">
        <h1 className="display-3 fw-bold">BRAND <span className="neon-text">IDENTITY</span></h1>
        <p style={{ color: 'var(--text-gray)', letterSpacing: '4px', textTransform: 'uppercase' }}>Building Legacies, Not Just Logos</p>
      </header>

      <section className="expertise-grid pb-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="position-relative">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop" alt="Branding & Visual Identity" className="img-fluid rounded-4 shadow-lg" />
              <div className="transform-badge" style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'var(--neon-blue)', color: '#000', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold' }}>✨ Brand Transformation</div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="text-side">
              <h2 className="display-5 fw-bold mb-4">Creative <span className="neon-text">Branding</span></h2>
              <p className="fs-5 opacity-75 mb-4">Branding is more than just a logo; it is the emotional connection and perception a customer feels when they hear your name. We provide your business with a distinctive personality that commands attention and stands out in a crowded marketplace.</p>
              
              <div className="services-list row g-3">
                {services.map((item, i) => (
                  <div className="col-6" key={i}>
                    <div className="s-item glass-card p-2 text-center small border border-secondary border-opacity-25" style={{ borderRadius: '10px' }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section text-center section-padding my-5" data-aos="fade-up">
        <h3 className="display-6 fw-bold mb-4">Our Branding <span className="neon-text">Philosophy</span></h3>
        <p className="fs-5 opacity-75 mx-auto" style={{ max_width: '900px' }}>
          We believe every brand has a unique story to tell. At Zed Elevate, we translate that narrative into visual and emotional forms. By combining trend-focused aesthetics with timeless strategic planning, we ensure your brand remains relevant and impactful for years to come.
        </p>
      </section>

      <div className="brand-detail-grid row g-4 mb-5">
        {[
          { title: 'Moodboard Preview', desc: 'Before design begins, we curate a visual moodboard that establishes the vibe, texture, and emotional direction of your brand identity.' },
          { title: 'Guidelines & Assets', desc: 'We provide a comprehensive brand book including typography, color usage, and styling rules to ensure professional consistency across all touchpoints.' },
          { title: 'Packaging & Print', desc: 'From digital screens to physical presence, we ensure your packaging creates a "wow" moment for customers from the very first interaction.' }
        ].map((card, i) => (
          <div className="col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="glass-card h-100 p-4 border border-secondary border-opacity-25" style={{ borderRadius: '20px' }}>
              <h4 className="neon-text mb-3">{card.title}</h4>
              <p className="opacity-75">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="cta-section text-center section-padding mb-5" data-aos="zoom-in">
        <h2 className="display-5 fw-bold mb-4">Ready to <span className="neon-text">Elevate</span> Your Brand?</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a href="https://wa.me/+919120820470?text=Hi%20Zed%20Elevate%2C%20I'm%20ready%20to%20build%20a%20powerful%20brand%20identity.%20Let's%20discuss%20the%20details!" className="btn-neon">GET STARTED</a>
          <Link to="/" className="btn-neon-outline">BACK TO HOME</Link>
        </div>
      </section>
    </div>
  );
}
