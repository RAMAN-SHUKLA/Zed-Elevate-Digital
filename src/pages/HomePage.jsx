import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import SEO from '../components/SEO';

export default function HomePage() {
  useAOS();

  return (
    <>
      <SEO 
        title="Home" 
        description="Zed Elevate Digital is the best digital marketing agency in Kanpur. We help businesses scale with SEO, social media, and ROI-driven marketing strategies."
        keywords="digital marketing agency kanpur, best seo company kanpur, social media marketing kanpur"
        canonical="/"
      />
      {/* Hero */}
      <section id="home" className="hero">
        <div className="container" data-aos="zoom-in">
          <h1 className="display-3 fw-bold mb-4">Grow Faster, Rank Higher<br /><span className="neon-text">Convert Better.</span></h1>
          <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '800px' }}>
            At Zed Elevate Digital, we help businesses in Kanpur and across India dominate search rankings, attract quality leads, and turn digital traffic into real revenue. From laser-focused SEO to high-converting ad campaigns — we build strategies that actually work.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
            <div className="text-center px-3" style={{ borderRight: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 className="neon-text fw-bold mb-0">200+</h3>
              <p className="small opacity-75 mb-0">Brands elevated across Kanpur & UP</p>
            </div>
            <div className="text-center px-3">
              <h3 className="neon-text fw-bold mb-0">5×</h3>
              <p className="small opacity-75 mb-0">Average ROI delivered for our clients</p>
            </div>
          </div>

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
              <span className="badge bg-info text-dark mb-3">ABOUT ZED ELEVATE DIGITAL</span>
              <h2 className="neon-text display-5 fw-bold mb-4">We're Not an Agency.<br />We're Your Growth Partner.</h2>
              <p className="fs-5 opacity-75 mb-3">Zed Elevate Digital was born from a simple belief: every great business deserves to be found online.</p>
              <p className="opacity-75 mb-3">Founded and rooted in Kanpur, we combine hyper-local market intelligence with world-class digital strategies to help brands of every size dominate their space online. We've seen too many great businesses stay invisible — not because their product isn't exceptional, but because their digital presence doesn't do them justice. That's where we come in.</p>
              <p className="opacity-75">Our team of SEO specialists, performance marketers, content creators, and web strategists exist for one purpose: to build a digital engine that runs 24/7, bringing qualified customers to your door while you focus on running your business.</p>
              <div className="mt-4"><Link to="/about" className="btn-neon" style={{ padding: '10px 30px', fontSize: '0.9rem' }}>Learn More</Link></div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800" className="img-fluid rounded-4 border border-info" alt="About Zed Elevate" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-black bg-opacity-25">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { value: '200+', label: 'Brands Elevated', desc: 'From local shops to large enterprises across Uttar Pradesh' },
              { value: '98%', label: 'Client Retention', desc: 'Clients stay because results speak louder than promises' },
              { value: '5×', label: 'Average ROI', desc: 'Measured across SEO, PPC and social media campaigns' },
              { value: '#1', label: 'Local Rankings', desc: 'Consistently securing Page 1 & Map Pack rankings for clients' },
            ].map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="glass-card p-4 h-100">
                  <h3 className="display-4 fw-bold neon-text mb-1">{s.value}</h3>
                  <h5 className="fw-bold mb-2">{s.label}</h5>
                  <p className="small opacity-75 mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-info text-dark mb-3">WHAT WE DO</span>
            <h2 className="neon-text display-4 fw-bold">Everything You Need to Win Online</h2>
            <p className="opacity-50 fs-5 mx-auto" style={{ maxWidth: '700px' }}>From building your search presence from the ground up to running campaigns that deliver leads overnight.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { title: 'Search Engine Optimisation (SEO)', sub: 'Rank on Page 1', img: '/1.jpg', color: 'blue', link: '/services/website-seo', tags: ['TECHNICAL SEO', 'ON-PAGE SEO', 'LINK BUILDING', 'LOCAL SEO'] },
              { title: 'PPC & Google Ads', sub: 'Maximum ROI', img: '/3.jpg', color: 'orange', link: '/services/paid-ads', tags: ['GOOGLE ADS', 'META ADS', 'RETARGETING', 'DISPLAY ADS'] },
              { title: 'Social Media Marketing', sub: 'Build Your Brand', img: '/4.jpg', color: 'purple', link: '/services/social-media', tags: ['INSTAGRAM', 'FACEBOOK', 'LINKEDIN', 'REELS & SHORTS'] },
              { title: 'Content Marketing', sub: 'Content That Converts', img: '/5.jpg', color: 'green', link: '/services/branding', tags: ['BLOG WRITING', 'LANDING PAGES', 'VIDEO SCRIPTS', 'CASE STUDIES'] },
              { title: 'Website Design & Development', sub: 'Your Digital Salesperson', img: '/2.jpg', color: 'blue', link: '/services/designing', tags: ['WORDPRESS', 'E-COMMERCE', 'CRO', 'SPEED OPTIMISATION'] },
              { title: 'Local SEO & Google Business', sub: 'Dominate Near Me', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop', color: 'orange', link: '/services/website-seo', tags: ['GOOGLE BUSINESS', 'MAP PACK', 'LOCAL CITATIONS', 'REVIEW STRATEGY'] },
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
              { title: "Banarasi Saree House", category: "Branding", img: "/banaras.jpg?v=final" },
              { title: "Rajasthan Heritage", category: "Branding", img: "/rajasthan.jpg?v=final" },
              { title: "Diwali Campaign", category: "Marketing", img: "/diwali.jpg?v=final" },
              { title: "Wedding Marketing", category: "Marketing", img: "/wedding.jpg?v=final" }
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
            <span className="badge bg-info text-dark mb-3">CLIENT RESULTS</span>
            <h2 className="display-4 fw-bold">Real Businesses. <span className="neon-text">Real Results.</span></h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>Don't take our word for it. Here's what our clients say after partnering with Zed Elevate Digital.</p>
          </div>

          <div className="testimonials-wrapper">
            <div className="testimonials-track">
              {[
                { initials: 'RV', name: 'Dr. Rajesh Verma', role: 'Multi-Specialty Clinic, Kanpur', text: 'Before Zed Elevate, our clinic was invisible on Google. Within 4 months, we were ranking for our most important keywords and our new patient enquiries tripled. The team genuinely cares about your growth, not just your retainer.', bg: 'linear-gradient(135deg, #00f3ff, #0080ff)', color: '#000' },
                { initials: 'PS', name: 'Priya Sharma', role: 'Founder, Clothing Brand, Kanpur', text: 'Our e-commerce sales increased by 180% in 6 months after Zed Elevate took over our Google Ads and SEO. What I love most is the complete transparency — I know exactly what\'s happening with my budget at all times.', bg: 'linear-gradient(135deg, #ff00f3, #8000ff)', color: '#fff' },
                { initials: 'AK', name: 'Amit Khanna', role: 'Director, Real Estate Agency, Kanpur', text: 'We tried three agencies before Zed Elevate. None of them gave us the local SEO results we needed. Within 60 days, we were in the Google Map Pack for \'real estate Kanpur\'. Our enquiries haven\'t stopped since.', bg: 'linear-gradient(135deg, #00ff80, #0080ff)', color: '#000' },
              ].concat([
                { initials: 'RV', name: 'Dr. Rajesh Verma', role: 'Multi-Specialty Clinic, Kanpur', text: 'Before Zed Elevate, our clinic was invisible on Google. Within 4 months, we were ranking for our most important keywords and our new patient enquiries tripled. The team genuinely cares about your growth, not just your retainer.', bg: 'linear-gradient(135deg, #00f3ff, #0080ff)', color: '#000' },
                { initials: 'PS', name: 'Priya Sharma', role: 'Founder, Clothing Brand, Kanpur', text: 'Our e-commerce sales increased by 180% in 6 months after Zed Elevate took over our Google Ads and SEO. What I love most is the complete transparency — I know exactly what\'s happening with my budget at all times.', bg: 'linear-gradient(135deg, #ff00f3, #8000ff)', color: '#fff' },
                { initials: 'AK', name: 'Amit Khanna', role: 'Director, Real Estate Agency, Kanpur', text: 'We tried three agencies before Zed Elevate. None of them gave us the local SEO results we needed. Within 60 days, we were in the Google Map Pack for \'real estate Kanpur\'. Our enquiries haven\'t stopped since.', bg: 'linear-gradient(135deg, #00ff80, #0080ff)', color: '#000' },
              ]).map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <i className="bi bi-quote quote-icon"></i>
                  <div className="testimonial-header">
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: t.bg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.2rem', marginRight: '15px', flexShrink: 0 }}>{t.initials}</div>
                    <div className="testimonial-info">
                      <h5>{t.name}</h5>
                      <p>{t.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="text-warning mt-3">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-black bg-opacity-25">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge bg-info text-dark mb-3">WHY ZED ELEVATE</span>
            <h2 className="display-4 fw-bold">Kanpur Has Many Agencies.<br /><span className="neon-text">Here's Why Businesses Choose Us.</span></h2>
          </div>
          <div className="row g-4">
            {[
              { title: 'We Only Win When You Win', desc: 'Our KPIs are tied to your revenue goals — not vanity metrics like impressions or follower counts. If your numbers don\'t grow, we haven\'t done our job.' },
              { title: 'Full Transparency, Always', desc: 'Live performance dashboards, weekly summaries, and detailed monthly reports. You\'ll always know exactly where your budget is going and what it\'s achieving.' },
              { title: 'A Dedicated Account Manager', desc: 'You get a real person — not a ticket number. Your dedicated account manager is available, responsive, and invested in your growth as much as you are.' },
              { title: '360° In-House Expertise', desc: 'SEO, paid ads, social media, content, and web design — all under one roof, no outsourcing. Your strategy is coherent, integrated, and always on-brand.' },
              { title: 'Deep Market Knowledge', desc: 'We live in this market. We understand Kanpur\'s consumers, its competition, and its nuances in a way that out-of-city agencies simply can\'t replicate.' },
              { title: 'No Lock-In Contracts', desc: 'We don\'t trap you in long-term agreements. We earn your business every single month through performance, trust, and results. Simple as that.' },
            ].map((item, i) => (
              <div className="col-md-6" key={i} data-aos="fade-up" data-aos-delay={(i % 2) * 100}>
                <div className="glass-card h-100" style={{ borderLeft: '4px solid #00f3ff' }}>
                  <h4 className="neon-text">{item.title}</h4>
                  <p className="opacity-75 mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-bg-hero"></div>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge bg-info text-dark mb-3">TRANSPARENT PRICING</span>
            <h2 className="display-4 fw-bold">Plans Tailored for <span className="neon-text">Growth</span></h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>Choose the perfect plan to elevate your digital presence and start dominating your market.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              {
                title: 'BASIC PLAN',
                price: '3,999',
                features: ['10 Social Media Posts (Graphics)', '12 Reels / Short Videos', 'Basic Caption Writing', 'Hashtag Research', 'Basic Page Management'],
                popular: false,
                btnText: 'GET STARTED',
                subtitle: 'Best for small businesses starting online'
              },
              {
                title: 'PREMIUM PLAN',
                price: '6,999',
                features: ['15 Social Media Posts', '12 Reels / High Quality Videos', 'Advanced Video Editing', 'Content Strategy + Planning', 'Branding Support', 'Priority Support', 'Meta Ads Management'],
                popular: true,
                btnText: 'MOST POPULAR',
                subtitle: 'Best for brands who want fast growth 🚀'
              },
              {
                title: 'CUSTOM PLAN',
                price: 'CUSTOM',
                features: ['Everything in Premium', 'Personal Brand Strategy', 'Influencer Marketing', 'E-commerce Automation', 'High-End Video Production', 'Dedicated Growth Team'],
                popular: false,
                btnText: 'CONTACT US',
                subtitle: 'Tailored solutions for large scale dominance'
              }
            ].map((plan, i) => (
              <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="popular-tag">MOST POPULAR</div>}
                  <h3 className="fw-bold mb-3">{plan.title}</h3>
                  <div className="price-amount">
                    {plan.price !== 'CUSTOM' && <span style={{ fontSize: '1.5rem', verticalAlign: 'super' }}>₹</span>}
                    {plan.price}
                    {plan.price !== 'CUSTOM' && <span className="price-period">/mo</span>}
                  </div>
                  <p className="small opacity-75 mb-4" style={{ minHeight: '40px' }}>{plan.subtitle}</p>
                  <ul className="pricing-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}><i className="bi bi-check2-circle"></i> {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-pricing">{plan.btnText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">From First Call to <span className="neon-text">First Result</span></h2>
            <p className="opacity-50 fs-5">A clear, proven process that eliminates guesswork and gets you growing faster.</p>
          </div>
          <div className="row g-4">
            {[
              { num: '01', title: 'Free Audit & Discovery', desc: 'We dig deep into your current digital presence, your competitors, and your market opportunity. No charge, no obligation — just honest insights.' },
              { num: '02', title: 'Custom Strategy Build', desc: 'Using your audit findings, we craft a bespoke digital strategy with clear goals, timelines, budgets, and expected outcomes. No templates.' },
              { num: '03', title: 'Execution & Optimisation', desc: 'Our specialists execute across every channel, monitoring performance daily and making data-driven refinements to maximise your results.' },
              { num: '04', title: 'Report, Review & Scale', desc: 'Monthly deep-dive reports, transparent ROI tracking, and quarterly strategy reviews to ensure we\'re always accelerating your growth.' },
            ].map((step, i) => (
              <div className="col-lg-3 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="glass-card h-100 text-center">
                  <div className="display-1 fw-bold opacity-25 mb-3" style={{ color: 'transparent', WebkitTextStroke: '1px #00f3ff' }}>{step.num}</div>
                  <h4 className="neon-text">{step.title}</h4>
                  <p className="small opacity-75 mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-black bg-opacity-25" id="faq">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="badge bg-info text-dark mb-3">FAQ</span>
              <h2 className="display-4 fw-bold mb-4">Common <span className="neon-text">Questions</span></h2>
              <p className="fs-5 opacity-75 mb-4">Everything you need to know before partnering with us. Can't find your answer?</p>
              <a href="#contact" className="btn-neon">Talk to an Expert</a>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="accordion" id="faqAccordion">
                {[
                  { q: 'What digital marketing services does Zed Elevate offer in Kanpur?', a: 'Zed Elevate Digital offers a complete suite of services including SEO, PPC advertising (Google Ads & Meta Ads), social media marketing and management, content marketing and copywriting, website design and development, and local SEO / Google Business Profile optimisation — all tailored for businesses in Kanpur and across Uttar Pradesh.' },
                  { q: 'How long does SEO take to show results in Kanpur?', a: 'SEO is a long-term, compounding investment. Most businesses begin seeing meaningful ranking improvements within 3 to 6 months. For local SEO in Kanpur — especially Google Maps and "near me" searches — we often see results sooner.' },
                  { q: 'Do you work with small businesses and startups in Kanpur?', a: 'Absolutely. We work with businesses of all sizes — from solo entrepreneurs and local shops to established companies and e-commerce brands. We create bespoke strategies that fit your budget and growth stage.' },
                  { q: 'How much does digital marketing cost in Kanpur?', a: 'Our packages are flexible and tied to your specific goals. Pricing depends on which services you need, your industry competitiveness, and your growth targets. We offer a completely free audit and strategy call.' },
                  { q: 'What makes Zed Elevate different from other digital agencies in Kanpur?', a: 'Three things: our relentless focus on measurable ROI (not vanity metrics), our radical transparency (live dashboards, no hidden fees), and our genuine local expertise in Kanpur\'s market. We also don\'t use lock-in contracts.' },
                  { q: 'Can you help my business rank on Google Maps in Kanpur?', a: 'Yes — this is one of our core specialisations. We\'ve placed dozens of Kanpur businesses at the top of Google Maps for their most valuable keywords through precise local SEO.' },
                  { q: 'How will I know if my campaigns are actually working?', a: 'Every client gets a dedicated account manager, weekly performance summaries, full access to a live reporting dashboard, and a detailed monthly report. We track leads, sales, calls, and revenue — not just clicks.' },
                ].map((faq, i) => (
                  <div className="accordion-item mb-3" key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0,243,255,0.2)', borderRadius: '12px', overflow: 'hidden' }}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body opacity-75">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(0,243,255,0.1), rgba(0,80,255,0.1))', borderTop: '1px solid rgba(0,243,255,0.2)', borderBottom: '1px solid rgba(0,243,255,0.2)' }}>
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="display-3 fw-bold mb-4">Ready to Become <br /><span className="neon-text">Impossible to Ignore?</span></h2>
          <p className="fs-5 opacity-75 mx-auto mb-5" style={{ maxWidth: '600px' }}>Book a free 30-minute strategy session. No sales pitch. Just an honest look at where you stand online — and a clear plan to get you ahead of your competition.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="#contact" className="btn-neon">Get Your Free Audit →</a>
            <a href="tel:+917348144937" className="btn-neon-outline"><i className="bi bi-telephone-fill me-2"></i>Call Us Now</a>
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
