import useAOS from '../../hooks/useAOS';

export default function RankOnGoogleTips() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="mb-3"><span className="badge bg-info text-dark">SEO TIPS</span> <span className="small opacity-50 ms-2">Mar 23, 2026</span></div>
          <h1 className="display-4 fw-bold mb-4">How to Rank on Google: <span className="neon-text">Tips for Kanpur Entrepreneurs</span></h1>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1200" className="img-fluid rounded-4 mb-5 border border-info" alt="SEO Kanpur" />
              <p className="fs-5 mb-4">SEO isn't just for big tech firms. For small and medium businesses in Kanpur, local SEO is the most cost-effective way to get high-quality leads without spending a fortune on ads.</p>
              
              <h3 className="neon-text mb-3">Optimize for Local Intent</h3>
              <p>Ensure your business appears for "service + in Kanpur" searches. This starts with a well-optimized Google Business Profile and relevant content on your site.</p>
              
              <h3 className="neon-text mb-3 mt-5">Keyword Research for Kanpur</h3>
              <p>Understanding what locals are searching for is the first step. Focus on keywords like "Best CA Kanpur," "Graphic Design Kanpur," or "Top Hotel in Kanpur."</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
