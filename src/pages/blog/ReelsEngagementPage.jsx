import useAOS from '../../hooks/useAOS';

export default function ReelsEngagementPage() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="mb-3"><span className="badge bg-info text-dark">SOCIAL MEDIA</span> <span className="small opacity-50 ms-2">Mar 08, 2026</span></div>
          <h1 className="display-3 fw-bold mb-4">Mastering the 3-Second <span className="neon-text">Hook for Viral Reels</span></h1>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200" className="img-fluid rounded-4 mb-5 border border-info" alt="Reels Engagement" />
              <p className="fs-5 mb-4">In 2026, the battle for attention is won in the first few moments. With millions of reels being uploaded daily, your content needs to grab viewers instantly or risk being scrolled past.</p>
              <h3 className="neon-text mb-3">The 3-Second Rule</h3>
              <p>Research shows that viewers decide whether to keep watching within the first 3 seconds. Your hook needs to be visual, emotional, or curiosity-driven to stop the scroll.</p>
              <h3 className="neon-text mb-3 mt-5">Proven Hook Strategies</h3>
              <ul className="fs-5" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <li className="mb-2">Start with movement or a pattern interrupt</li>
                <li className="mb-2">Use text overlays with bold claims or questions</li>
                <li className="mb-2">Begin mid-action to create instant curiosity</li>
                <li className="mb-2">Use trending audio for algorithmic boost</li>
              </ul>
              <h3 className="neon-text mb-3 mt-5">Engagement Beyond the Hook</h3>
              <p>Once you've captured attention, maintain it with storytelling, value delivery, and a strong call-to-action. The best-performing reels in 2026 combine entertainment with genuine value.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
