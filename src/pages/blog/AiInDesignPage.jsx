import useAOS from '../../hooks/useAOS';

export default function AiInDesignPage() {
  useAOS();

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="mb-3"><span className="badge bg-info text-dark">AI & TECH</span> <span className="small opacity-50 ms-2">Mar 10, 2026</span></div>
          <h1 className="display-3 fw-bold mb-4">AI in Design 2026: <span className="neon-text">The Future of Creativity</span></h1>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200" className="img-fluid rounded-4 mb-5 border border-info" alt="AI in Design" />
              <p className="fs-5 mb-4">Artificial Intelligence is revolutionizing every aspect of the creative industry. In 2026, AI-powered tools have become essential companions for designers and video editors, enhancing productivity while enabling entirely new forms of creative expression.</p>
              <h3 className="neon-text mb-3">How AI is Changing Design</h3>
              <p>AI tools can now generate layout suggestions, create color palettes from mood boards, and even produce initial design concepts from text descriptions. This doesn't replace designers — it empowers them to iterate faster and explore more creative possibilities.</p>
              <h3 className="neon-text mb-3 mt-5">Video Editing Revolution</h3>
              <p>AI-powered video editing tools can automatically cut footage to beat, remove backgrounds, enhance audio quality, and even suggest optimal clip arrangements. The result is a dramatically faster workflow without sacrificing quality.</p>
              <h3 className="neon-text mb-3 mt-5">The Human Touch</h3>
              <p>While AI handles the technical heavy lifting, the creative vision, emotional intelligence, and strategic thinking that human designers bring remain irreplaceable. The most successful creative professionals in 2026 are those who leverage AI as a tool while maintaining their unique artistic perspective.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
