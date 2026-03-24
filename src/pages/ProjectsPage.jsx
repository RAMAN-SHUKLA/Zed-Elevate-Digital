import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAOS';
import AOS from 'aos';

const DEFAULT_PROJECTS = [
  { id: 1, title: "Banarasi Saree House", category: "branding", image: "/1.jpg", link: "/case-studies/banarasi-saree-house" },
  { id: 2, title: "Rajasthan Heritage Tours", category: "branding", image: "/rajasthan.jpg", link: "/case-studies/rajasthan-heritage" },
  { id: 3, title: "Mumbai Street Food Hub", category: "web", image: "/streetfood.jpg", link: "/case-studies/mumbai-street-food" },
  { id: 4, title: "Kerala Ayurveda Center", category: "web", image: "/ayurved.jpg", link: "/case-studies/kerala-ayurveda" },
  { id: 5, title: "Diwali Festive Campaign", category: "marketing", image: "/diwali.jpg", link: "/case-studies/diwali-campaign" },
  { id: 6, title: "Wedding Season Marketing", category: "marketing", image: "/wedding.jpg", link: "/case-studies/wedding-marketing" },
];

export default function ProjectsPage() {
  useAOS();
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Force refresh defaults using a new key to avoid stale data
    const stored = localStorage.getItem('zed_projects_v11');
    if (!stored) {
      localStorage.setItem('zed_projects_v11', JSON.stringify(DEFAULT_PROJECTS));
      setProjects(DEFAULT_PROJECTS);
    } else {
      setProjects(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [filter]);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.05) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <h1 className="display-3 fw-bold mb-4">Our <span className="neon-text">Portfolio</span></h1>
          <p className="lead opacity-75 mx-auto mb-5" style={{ maxWidth: '800px' }}>A showcase of our recent digital transformations, from high-converting campaigns to premium brand identities.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            {['all', 'branding', 'marketing', 'web'].map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
                style={{ background: 'transparent', border: 'none', color: filter === cat ? 'var(--neon-blue)' : 'rgba(255,255,255,0.6)', padding: '10px 25px', fontSize: '0.9rem', fontWeight: 600, position: 'relative', cursor: 'pointer' }}
              >
                {cat === 'all' ? 'All Works' : cat === 'web' ? 'Web Dev' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            {filtered.length === 0 ? (
              <div className="col-12 text-center py-5"><p className="text-white">No projects found in this category.</p></div>
            ) : filtered.map(p => (
              <div className="col-lg-6" data-aos="fade-up" key={p.id}>
                <Link to={p.link} className="text-decoration-none">
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', aspectRatio: '16/9', marginBottom: '30px', cursor: 'pointer', border: '1px solid rgba(0, 243, 255, 0.1)' }} className="project-card-hover">
                    <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)' }} alt={p.title} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(10, 11, 16, 0.95), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px', opacity: 0, transition: 'opacity 0.4s ease' }} className="project-overlay-hover">
                      <span style={{ color: 'var(--neon-blue)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>{p.category}</span>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '15px', color: '#fff' }}>{p.title}</h3>
                      <div className="neon-text">View Case Study <i className="bi bi-arrow-right"></i></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black bg-opacity-50">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">Client <span className="neon-text">Feedback</span></h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>What our partners say about our digital excellence.</p>
          </div>
          <div className="row g-4">
            {[
              { name: 'Siddharth Rao', role: 'Business Owner', text: 'The attention to detail in the branding process was phenomenal. They captured the Banarasi heritage perfectly.', img: 'https://images.unsplash.com/photo-1742981365880-698cfb84492d?auto=format&fit=crop&w=150' },
              { name: 'Megha Kapoor', role: 'Marketing Lead', text: 'Our Diwali campaign saw a 4x return on ad spend. The creative direction was spot on!', img: 'https://images.unsplash.com/photo-1711182673833-7e11dffa0eec?auto=format&fit=crop&w=150' },
              { name: 'Vikram Singh', role: 'Tourism Director', text: 'The website captures the soul of Rajasthan. Our bookings have increased significantly.', img: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=150' }
            ].map((t, i) => (
              <div className="col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="glass-card h-100 p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src={t.img} alt={t.name} className="rounded-circle me-3" style={{ width: '60px', height: '60px', minWidth: '60px', minHeight: '60px', objectFit: 'cover', border: '2px solid var(--neon-blue)', aspectRatio: '1/1' }} />
                    <div>
                      <h5 className="mb-0">{t.name}</h5>
                      <p className="small text-white-50 mb-0">{t.role}</p>
                    </div>
                  </div>
                  <p className="mb-0 opacity-75">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .project-card-hover:hover img { transform: scale(1.1); }
        .project-card-hover:hover .project-overlay-hover { opacity: 1 !important; }
        .filter-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 25%;
          width: 50%;
          height: 2px;
          background: var(--neon-blue);
          box-shadow: 0 0 10px var(--neon-blue);
        }
      `}</style>
    </>
  );
}
