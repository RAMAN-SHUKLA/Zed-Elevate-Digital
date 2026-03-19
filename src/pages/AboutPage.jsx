import useAOS from '../hooks/useAOS';

export default function AboutPage() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <h1 className="display-3 fw-bold mb-4">About <span className="neon-text">Zed Elevate</span></h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '800px' }}>
            We are a team of digital enthusiasts dedicated to transforming brands through creative strategy and performance-driven marketing.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" className="img-fluid rounded-4 border border-info" alt="Team Work" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="neon-text mb-4">Our Mission</h2>
              <p className="fs-5 mb-4">At Zed Elevate Digital, our mission is to empower businesses by providing innovative digital solutions that drive real growth. We believe in the power of creativity combined with data-backed strategies.</p>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="glass-card">
                    <i className="bi bi-bullseye fs-1 neon-text mb-3"></i>
                    <h4>Strategy</h4>
                    <p className="small mb-0">Customized growth blueprints for every brand.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="glass-card">
                    <i className="bi bi-lightning fs-1 neon-text mb-3"></i>
                    <h4>Execution</h4>
                    <p className="small mb-0">High-speed delivery with attention to detail.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black bg-opacity-25">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">Founded in <span className="neon-text">Partnership</span></h2>
            <p className="opacity-50">The creative minds behind your brand's success.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { name: 'Riya Saxena', role: 'Founder', desc: 'Specialized in building lean, professional systems that bridge the gap between creative vision and measurable ROI. Passionate about helping brands establish a dominant and sophisticated presence in a crowded digital landscape', img: '/riyadidi_img.png' },
              { name: 'Zuhaib Amir Ansari', role: 'Founder', desc: 'Founder and Digital Strategist focused on building high-impact brand identities. I combine minimalist design principles with aggressive growth strategies to help modern agencies scale with precision and professional authority.', img: '/zuhaib.jpeg' },
            ].map((m, i) => (
              <div className="col-lg-5 col-md-6" data-aos="zoom-in" data-aos-delay={i * 100} key={i}>
                <div className="glass-card text-center">
                  <img src={m.img} className="rounded-circle mb-4 border border-info p-2" style={{ width: '150px', height: '150px', objectFit: 'cover' }} alt={m.name} />
                  <h4>{m.name}</h4>
                  <p className="neon-text small">{m.role}</p>
                  <p className="small opacity-75">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
