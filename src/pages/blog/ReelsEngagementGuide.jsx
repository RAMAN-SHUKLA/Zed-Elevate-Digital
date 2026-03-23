import useAOS from '../../hooks/useAOS';

export default function ReelsEngagementGuide() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="mb-3"><span className="badge bg-info text-dark">CONTENT STRATEGY</span> <span className="small opacity-50 ms-2">Mar 23, 2026</span></div>
          <h1 className="display-4 fw-bold mb-4">Boosting Reels Engagement: <span className="neon-text">Guide for Kanpur Brands</span></h1>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200" className="img-fluid rounded-4 mb-5 border border-info" alt="Reels Engagement Kanpur" />
              <p className="fs-5 mb-4">Instagram Reels have become the fastest way to grow your brand organically. For Kanpur-based creators and businesses, the key is combining local charm with high-quality production.</p>
              
              <h3 className="neon-text mb-3">The Power of Choice Audio</h3>
              <p>Using trending tracks that resonate with the Indian audience can significantly boost your reach. Mix these with high-quality transitions for maximum impact.</p>
              
              <h3 className="neon-text mb-3 mt-5">Local Context Matters</h3>
              <p>Showcasing recognizable Kanpur landmarks or culture can help build a stronger connection with your local followers, leading to higher conversion rates.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
