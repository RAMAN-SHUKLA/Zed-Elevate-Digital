import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';

export default function HomePage() {
  useAOS();

  return (
    <>
      {/* Hero */}
      <section id="home" className="hero">
        <div className="container" data-aos="zoom-in">
          <img src="/zedelevatedigital.png" alt="Zed Elevate Digital" style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '20px', borderRadius: '50%' }} />
          <h1><span className="neon-text">Digital Marketing Agency in Kanpur</span> <br /> Elevate Your Presence Today.</h1>
          <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '800px' }}>
            Zed Elevate Digital is the <strong>best digital marketing company in Kanpur</strong>. We provide affordable digital marketing services in Kanpur, Uttar Pradesh, helping brands scale with ROI-driven strategies.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="#portfolio" className="btn-neon">VIEW OUR WORK</a>
            <a href="https://calendly.com/zedelevatedigital/30min" className="btn-neon-outline">BOOK NOW</a>
          </div>
        </div>
      </section>

      {/* Logo Loop */}
      <section className="logo-loop-section">
        <div className="logo-loop-container">
          <div className="logo-track">
            {/* Double the items for infinite loop */}
            {['Design', 'Development', 'Marketing', 'SMM', 'Video Editing', 'Automation', 'Design', 'Development', 'Marketing', 'SMM', 'Video Editing', 'Automation'].map((text, i) => (
              <a href="#" className="logo-item" key={i}>
                <span className="logo-text">{text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="neon-text display-5 fw-bold mb-4">About Zed Elevate Digital</h2>
              <p className="fs-5 opacity-75">Zed Elevate Digital is a modern digital agency dedicated to helping businesses grow online through strategic branding, creative execution, and measurable growth. Our focus is to make your brand visually powerful and digitally dominant.</p>
              <div className="mt-4"><Link to="/about" className="btn-neon" style={{ padding: '10px 30px', fontSize: '0.9rem' }}>Learn More</Link></div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800" className="img-fluid rounded-4 border border-info" alt="About Zed Elevate" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="neon-text display-4 fw-bold">Top Marketing Agency in Kanpur</h2>
            <p className="opacity-50 fs-5">Leading provider of SEO services and website development in Kanpur.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { title: 'Social Media Marketing', sub: 'Social Media Management Kanpur', img: '/1.jpg', color: 'blue', link: '/services/social-media' },
              { title: 'Graphic Designing', sub: 'Branding Agency in Kanpur', img: '/4.jpg', color: 'purple', link: '/services/designing' },
              { title: 'Video Editing', sub: 'Motion Mastery', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop', color: 'green', link: '/services/video-editing' },
              { title: 'PPC & Ads', sub: 'PPC Services in Kanpur', img: '/3.jpg', color: 'orange', link: '/services/paid-ads' },
              { title: 'Website / SEO', sub: 'Local SEO Services Kanpur', img: '/2.jpg', color: 'blue', link: '/services/website-seo' },
              { title: 'Branding', sub: 'Identity Design', img: '/5.jpg', color: 'purple', link: '/services/branding' },
            ].map((s, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <Link to={s.link} className="service-tile-link">
                  <div className={`service-card-modern card-accent-${s.color}`}>
                    <div className="service-card-inner">
                      <div className="service-image-wrapper">
                        <img src={s.img} alt={`${s.title} - ${s.sub}`} />
                        <div className="btn-view"><i className="bi bi-arrow-right"></i></div>
                      </div>
                      <div className="service-content-modern">
                        <span className="service-subtitle-modern">{s.sub}</span>
                        <h3 className="service-title-modern">{s.title}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="modern-projects-section" id="portfolio">
        <div className="projects-bg-hero"></div>
        <div className="container position-relative">
          <div className="section-header-modern text-center" data-aos="fade-up">
            <span className="project-category-badge">Our Portfolio</span>
            <h2 className="section-title-modern">Selected <span className="neon-text">Works</span></h2>
            <p className="text-white-50 mt-4 mx-auto" style={{ maxWidth: '600px' }}>
              A collection of our most impactful digital transformations and creative executions.
            </p>
          </div>
          <div className="row g-4 mb-5">
            {[
              { title: "Banarasi Saree House", category: "Branding", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&h=800&fit=crop" },
              { title: "Rajasthan Heritage", category: "Branding", img: "https://images.unsplash.com/photo-1596394636738-8a6385be0e2d?w=1200&h=800&fit=crop" },
              { title: "Diwali Campaign", category: "Marketing", img: "https://images.unsplash.com/photo-1608788989492-85a9c9b5c2b8?w=1200&h=800&fit=crop" },
              { title: "Wedding Marketing", category: "Marketing", img: "https://images.unsplash.com/photo-1511795406837-7a9c73e5b2f5?w=1200&h=800&fit=crop" }
            ].map((p, i) => (
              <div className="col-lg-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="project-card-modern">
                  <div className="project-image-container">
                    <img src={p.img} alt={p.title} />
                    <div className="project-overlay">
                      <div className="w-100">
                        <span className="project-category-badge">{p.category}</span>
                        <h3 className="project-title-modern">{p.title}</h3>
                        <Link to="/projects" className="project-link-modern">Explore Project <i className="bi bi-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/projects" className="btn-neon">VIEW ALL PROJECTS</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">Client <span className="neon-text">Success Stories</span></h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>Hear from the brands we've helped elevate in the digital space.</p>
          </div>

          <div className="testimonials-wrapper">
            <div className="testimonials-track">
              {[
                { name: 'Arjun Mehta', role: 'CEO, TechServe India', text: 'Zed Elevate transformed our online presence. Their expertise brought our brand to the next level in the Indian market.', img: 'https://images.unsplash.com/photo-1742981365880-698cfb84492d?auto=format&fit=crop&w=150' },
                { name: 'Megha Kapoor', role: 'Marketing Director', text: "Working with them was a game-changer. Our conversion rates increased by 40% within three months.", img: 'https://images.unsplash.com/photo-1711182673833-7e11dffa0eec?auto=format&fit=crop&w=150' },
                { name: 'Vikram Singh', role: 'Founder, RetailFlow', text: "Highly professional team with a deep understanding of digital aesthetics and user experience.", img: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=150' },
                { name: 'Ananya Iyer', role: 'Creative Lead, NEXA', text: "The level of creativity and technical expertise at Zed Elevate is unmatched. They delivered exactly what we needed and more.", img: 'https://images.unsplash.com/photo-1770627000564-3feb36aecbcd?auto=format&fit=crop&w=150' }
              ].concat([
                { name: 'Arjun Mehta', role: 'CEO, TechServe India', text: 'Zed Elevate transformed our online presence. Their expertise brought our brand to the next level in the Indian market.', img: 'https://images.unsplash.com/photo-1742981365880-698cfb84492d?auto=format&fit=crop&w=150' },
                { name: 'Megha Kapoor', role: 'Marketing Director', text: "Working with them was a game-changer. Our conversion rates increased by 40% within three months.", img: 'https://images.unsplash.com/photo-1711182673833-7e11dffa0eec?auto=format&fit=crop&w=150' },
                { name: 'Vikram Singh', role: 'Founder, RetailFlow', text: "Highly professional team with a deep understanding of digital aesthetics and user experience.", img: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=150' },
                { name: 'Ananya Iyer', role: 'Creative Lead, NEXA', text: "The level of creativity and technical expertise at Zed Elevate is unmatched. They delivered exactly what we needed and more.", img: 'https://images.unsplash.com/photo-1770627000564-3feb36aecbcd?auto=format&fit=crop&w=150' }
              ]).map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <i className="bi bi-quote quote-icon"></i>
                  <div className="testimonial-header">
                    <img src={t.img} alt={t.name} className="testimonial-img" />
                    <div className="testimonial-info">
                      <h5>{t.name}</h5>
                      <p>{t.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-bg-hero"></div>
        <div className="container position-relative">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">Flexible <span className="neon-text">Pricing</span></h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>Choose the plan that fits your growth stage. No hidden fees, just results.</p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="pricing-card">
                <h4 className="fw-bold">Starter</h4>
                <p className="small opacity-50">Perfect for small businesses</p>
                <div className="price-amount">₹7999 <span className="price-period">/ month</span></div>
                <ul className="pricing-features">
                  <li><i className="bi bi-check2-circle"></i> Social Media Management</li>
                  <li><i className="bi bi-check2-circle"></i> 12 Basic Post Designs & 10 Professional Reels </li>
                  <li><i className="bi bi-check2-circle"></i> Basic SEO Optimization</li>
                  <li><i className="bi bi-check2-circle"></i> Monthly Report</li>
                </ul>
                <a href="https://wa.me/+917348144937?text=Hi%20Zed%20Elevate%2C%20I'm%20interested%20in%20the%20Starter%20Plan." className="btn-pricing">GET STARTED</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-card popular">
                <div className="popular-tag">Most Popular</div>
                <h4 className="fw-bold">Professional</h4>
                <p className="small opacity-50">Scaling brands to the next level</p>
                <div className="price-amount"> ₹14999 <span className="price-period">/ month</span></div>
                <ul className="pricing-features">
                  <li><i className="bi bi-check2-circle"></i> Everything in Starter</li>
                  <li><i className="bi bi-check2-circle"></i> High-End Video Editing</li>
                  <li><i className="bi bi-check2-circle"></i> Paid Ads Management</li>
                  <li><i className="bi bi-check2-circle"></i> Advanced Data Analytics</li>
                  <li><i className="bi bi-check2-circle"></i> Priority Support</li>
                </ul>
                <a href="https://wa.me/+917348144937?text=Hi%20Zed%20Elevate%2C%20I'm%20interested%20in%20the%20Professional%20Plan." className="btn-pricing">GO PRO</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="pricing-card">
                <h4 className="fw-bold">Enterprise</h4>
                <p className="small opacity-50">Complete digital dominance</p>
                <div className="price-amount">Custom</div>
                <ul className="pricing-features">
                  <li><i className="bi bi-check2-circle"></i> Custom Brand Identity</li>
                  <li><i className="bi bi-check2-circle"></i> Full-Scale Marketing</li>
                  <li><i className="bi bi-check2-circle"></i> Dedicated Account Manager</li>
                  <li><i className="bi bi-check2-circle"></i> Unlimited Creative Revisions</li>
                  <li><i className="bi bi-check2-circle"></i> 24/7 Premium Support</li>
                </ul>
                <a href="https://calendly.com/zedelevatedigital/30min" className="btn-pricing">BOOK A CALL</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <h1 className="display-3 fw-bold neon-text mb-4">Let's Connect</h1>
              <div className="d-flex align-items-center mb-4">
                <div className="contact-info-circle me-3"><i className="bi bi-envelope-at"></i></div>
                <div>
                  <p className="mb-0 small opacity-50">Email Us</p>
                  <p className="mb-0 fw-bold fs-5">zedelevatedigital@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="contact-info-circle me-3"><i className="bi bi-telephone"></i></div>
                <div>
                  <p className="mb-0 small opacity-50">Call Us</p>
                  <p className="mb-0 fw-bold fs-5">+91 7348144937</p>
                </div>
              </div>
              <div className="audit-box">
                <h5 className="text-info fw-bold mb-2">Free Social Media Audit</h5>
                <p className="small opacity-75 mb-3">Get a quick review of your profile and discover how to improve your growth.</p>
                <a href="https://wa.me/+917348144937?text=Hi%20Zed%20Elevate%2C%20I%20want%20to%20claim%20my%20Free%20Social%20Media%20Audit." className="btn btn-sm btn-neon" style={{ fontSize: '0.8rem', textDecoration: 'none' }}>CLAIM FREE AUDIT</a>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="bg-dark rounded-4 border border-secondary border-opacity-25 h-100 overflow-hidden">
                <iframe
                  src="https://calendly.com/zedelevatedigital/30min?hide_gdpr_banner=1&amp;hide_event_type_details=1&amp;primary_color=00f3ff&amp;text_color=ffffff&amp;background_color=0a0b10"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Select a Date &amp; Time - Calendly"
                  style={{ borderRadius: '1.25rem', background: 'rgb(5, 5, 5)', width: '100%', height: '100%', minHeight: '700px', display: 'block', border: 'none', filter: 'brightness(0.85) saturate(1.1)' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
