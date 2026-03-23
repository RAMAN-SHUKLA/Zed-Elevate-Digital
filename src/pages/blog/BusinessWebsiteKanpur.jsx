import useAOS from '../../hooks/useAOS';

export default function BusinessWebsiteKanpur() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="mb-3"><span className="badge bg-info text-dark">WEB DEVELOPMENT</span> <span className="small opacity-50 ms-2">Mar 23, 2026</span></div>
          <h1 className="display-4 fw-bold mb-4">Why Every Kanpur Business Needs a <span className="neon-text">Professional Website</span></h1>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200" className="img-fluid rounded-4 mb-5 border border-info" alt="Business Website Kanpur" />
              <p className="fs-5 mb-4">Your website is your digital storefront. In a bustling city like Kanpur, standing out requires more than just a physical shop; it requires a powerful online presence that builds trust and captures leads 24/7.</p>
              
              <h3 className="neon-text mb-3">24/7 Accessibility</h3>
              <p>A website allows your customers to find your services and contact you even while you're asleep. This is particularly important for the growing service sector in Kanpur.</p>
              
              <h3 className="neon-text mb-3 mt-5">Building Local Authority</h3>
              <p>When someone in Kanpur searches for "Best Interior Designer near me" or "Top Coaching Center in Kanpur," having a professional website ensures you appear at the top, building instant credibility.</p>
              
              <h3 className="neon-text mb-3 mt-5">Mobile Optimization</h3>
              <p>With high mobile usage in Uttar Pradesh, a responsive website is essential to reach your target audience effectively across all devices.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
