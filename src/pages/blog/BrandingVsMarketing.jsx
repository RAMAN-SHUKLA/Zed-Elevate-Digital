import useAOS from '../../hooks/useAOS';

export default function BrandingVsMarketing() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="mb-3"><span className="badge bg-info text-dark">BRAND STRATEGY</span> <span className="small opacity-50 ms-2">Mar 23, 2026</span></div>
          <h1 className="display-4 fw-bold mb-4">Branding vs. Marketing: <span className="neon-text">Which One for Your Startup?</span></h1>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200" className="img-fluid rounded-4 mb-5 border border-info" alt="Branding vs Marketing" />
              <p className="fs-5 mb-4">Many entrepreneurs use these terms interchangeably, but they serve different purposes. Understanding the difference is key to a successful growth strategy for any Kanpur-based startup.</p>
              
              <h3 className="neon-text mb-3">Branding: Who You Are</h3>
              <p>Branding is the foundation. It's your identity, your values, and the perception people have of your business. It's why customers choose you over a competitor.</p>
              
              <h3 className="neon-text mb-3 mt-5">Marketing: How You Reach Them</h3>
              <p>Marketing is the set of tactics you use to deliver your brand message to the world. It includes SEO, social media, and paid ads aimed at conversion.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
