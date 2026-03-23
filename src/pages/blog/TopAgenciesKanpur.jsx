import useAOS from '../../hooks/useAOS';

export default function TopAgenciesKanpur() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="mb-3"><span className="badge bg-info text-dark">KANPUR BUSINESS</span> <span className="small opacity-50 ms-2">Mar 23, 2026</span></div>
          <h1 className="display-3 fw-bold mb-4">Top 5 Digital Marketing Agencies in <span className="neon-text">Kanpur (2026)</span></h1>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200" className="img-fluid rounded-4 mb-5 border border-info" alt="Marketing Agency Kanpur" />
              <p className="fs-5 mb-4">Kanpur's digital landscape is evolving rapidly. As businesses move from traditional models to online platforms, the demand for high-quality digital marketing services has never been higher.</p>
              
              <h3 className="neon-text mb-3">Why Local Businesses Need Digital Marketing</h3>
              <p>With thousands of potential customers in Swaroop Nagar, Civil Lines, and Kidwai Nagar searching for services online, local businesses must dominate search results and social media feeds to stay competitive.</p>
              
              <h3 className="neon-text mb-3 mt-5">Top Rated Agencies in Kanpur</h3>
              <p>Choosing the right partner is critical. Look for agencies that offer a mix of creative vision and data-driven results. Zed Elevate Digital leads the pack with its ROI-focused strategies and premium design aesthetics.</p>
              
              <h3 className="neon-text mb-3 mt-5">What to Look For</h3>
              <p>When selecting a marketing agency in Kanpur, ensure they have expertise in Local SEO, Google Business Profile optimization, and high-engagement social media content creation.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
