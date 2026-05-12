import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';

export default function AboutPage() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <h1 className="display-3 fw-bold mb-4">Our <span className="neon-text">Story</span></h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '800px' }}>
            We're a bunch of Kanpuriyas who love growing businesses. No fancy jargon, no empty promises — just honest, hard-working digital marketing that gets your phone ringing and your inbox full. We started in Kanpur because we saw great businesses here getting left behind online. We're here to change that.
          </p>
        </div>
      </header>

      {/* Mission */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" className="img-fluid rounded-4 border border-info" alt="Team Work" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="neon-text mb-4">A local team with a national mindset.</h2>
              <p className="fs-5 mb-4">Zed Elevate Digital was born right here in Kanpur. We know the lanes of Kidwai Nagar, the leather belt of Jajmau, the coaching hubs near IIT — and we know what their customers search for online. That local intelligence is our superpower.</p>
              <p className="fs-5 mb-4">We're a tight team of SEO nerds, ad experts, designers, and content writers who genuinely care about making your business grow. We don't just send you a monthly PDF and disappear — we're invested in your success like it's our own.</p>
              <p className="fs-5 mb-4">Since we started, we've worked with 200+ businesses across Kanpur and U.P., managing crores in ad spend and helping brands go from "barely findable" to "first on Google".</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-black bg-opacity-25">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">By the numbers <br /><span className="neon-text">(and we're proud of every one)</span></h2>
          </div>
          <div className="row g-4 text-center">
            {[
              { value: '200+', label: 'Happy clients in U.P.' },
              { value: '4.8 ★', label: 'Average Google rating' },
              { value: '₹12Cr+', label: 'Ad spend managed' },
              { value: '3×', label: 'Average client ROI' },
              { value: '5 Yrs', label: 'In the digital game' },
              { value: '98%', label: 'Client retention rate' },
            ].map((s, i) => (
              <div className="col-lg-2 col-md-4 col-6" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="glass-card p-4">
                  <h3 className="display-5 fw-bold neon-text mb-0">{s.value}</h3>
                  <p className="small opacity-75 mt-2">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {[
              { title: 'We keep it real', desc: "No inflated promises, no fake reports. You'll know exactly what we're doing, why, and what it's achieving — every single month." },
              { title: "We're always reachable", desc: "Got a question on a Saturday? Message us on WhatsApp. We're not a 9–5 agency when your business isn't 9–5." },
              { title: 'Data drives everything', desc: 'Every decision we make has a reason backed by numbers — not gut feel, not trends, not what worked for someone else.' },
              { title: 'Built for U.P. businesses', desc: "We know what Kanpur's customers search, click, and buy. That local edge makes our campaigns sharper than any Delhi agency parachuted in." },
            ].map((v, i) => (
              <div className="col-lg-3 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="glass-card h-100" style={{ borderLeft: '4px solid #00f3ff' }}>
                  <h4 className="neon-text">{v.title}</h4>
                  <p className="small opacity-75 mb-0">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-black bg-opacity-25">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">Founded in <span className="neon-text">Partnership</span></h2>
            <p className="opacity-50">The creative minds behind your brand's success.</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-5 col-md-6" data-aos="zoom-in">
              <div className="glass-card text-center h-100">
                <img src="/riyadidi_img.png" className="rounded-circle mb-4 border border-info p-2 d-block mx-auto" style={{ width: '150px', height: '150px', objectFit: 'cover' }} alt="Riya Saxena" />
                <h4>Riya Saxena</h4>
                <p className="neon-text small">Founder</p>
                <p className="small opacity-75">Specialized in building lean, professional systems that bridge the gap between creative vision and measurable ROI. Passionate about helping brands establish a dominant and sophisticated presence in a crowded digital landscape</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="glass-card text-center h-100">
                <img src="/zuhaib.jpeg" className="rounded-circle mb-4 border border-info p-2 d-block mx-auto" style={{ width: '150px', height: '150px', objectFit: 'cover' }} alt="Zuhaib Amir Ansari" />
                <h4>Zuhaib Amir Ansari</h4>
                <p className="neon-text small">Founder</p>
                <p className="small opacity-75">Founder and Digital Strategist focused on building high-impact brand identities. I combine minimalist design principles with aggressive growth strategies to help modern agencies scale with precision and professional authority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge bg-info text-dark mb-3">INDUSTRIES WE KNOW WELL</span>
            <h2 className="display-4 fw-bold">We've been around the <span className="neon-text">Kanpur block.</span></h2>
            <p className="opacity-50 fs-5">From leather exporters to coaching institutes — here's where we have deep expertise.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'bi-briefcase', title: 'Leather & Textile', desc: "SEO & B2B lead gen for Kanpur's backbone industries — Jajmau exporters to Harsh Nagar traders." },
              { icon: 'bi-book', title: 'Education & Coaching', desc: 'Admission campaigns, ranking on "best coaching in Kanpur" searches, parent-targeting social ads.' },
              { icon: 'bi-heart-pulse', title: 'Healthcare & Clinics', desc: 'Google Ads for doctors, hospital reputation management, appointment-driving SEO.' },
              { icon: 'bi-building', title: 'Real Estate', desc: 'Property lead generation, project launches, area-specific Google & Meta campaigns.' },
              { icon: 'bi-shop', title: 'Retail & E-Commerce', desc: "Taking Kanpur's shops from local-only to statewide online sales and D2C brand building." },
              { icon: 'bi-cup-hot', title: 'Restaurants & Food', desc: 'Zomato alternatives, Google Maps dominance, social campaigns that make people hungry.' },
            ].map((ind, i) => (
              <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <div className="glass-card">
                  <h4><i className={`bi ${ind.icon} text-info me-2`}></i> {ind.title}</h4>
                  <p className="small opacity-75 mb-0">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            <p className="fs-5 mb-4">Curious about working with us? Let's have a no-pressure chat.</p>
            <a href="/#contact" className="btn-neon">BOOK A DISCOVERY CALL</a>
          </div>
        </div>
      </section>
    </>
  );
}
