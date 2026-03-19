import useAOS from '../hooks/useAOS';

export default function SubServicePage({ title, heroTitle, heroDesc, image, features, results, metrics }) {
  useAOS();

  return (
    <div className="sub-service-page instagro-theme">
      <section className="detail-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h6 className="neon-text fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px' }}>Core Expertise</h6>
              <h1 className="display-3 fw-bold mb-4">{heroTitle.split('<br>')[0]} {heroTitle.includes('<br>') && <br />} <span className="neon-text">{heroTitle.split('<br>')[1] || heroTitle.split(' ').slice(-1)}</span></h1>
              <p className="fs-5 opacity-75 mb-5">{heroDesc}</p>
              <a href="/#contact" className="btn-neon-main">CLAIM FREE STRATEGY</a>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="img-wrapper-mst">
                <img src={image} alt={title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-grid-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="mst-card">
                <h2 className="display-5 fw-bold mb-5">What <span className="neon-text">We Do</span></h2>
                <ul className="mst-list">
                  {features.map((f, i) => (
                    <li key={i}><i className={`bi ${f.icon}`}></i> {f.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="mst-card">
                <h2 className="display-5 fw-bold mb-5">Result <span className="neon-text">Focus</span></h2>
                {results.map((r, i) => (
                  <div className="result-box-mst" key={i}>
                    <h5 className="fs-4 fw-bold mb-1">{r.title}</h5>
                    <p className="fs-6 opacity-75">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {metrics && (
        <section className="stats-section">
          <div className="container text-center">
            <h1 className="display-3 fw-bold mb-5">Performance <span className="neon-text">Metrics</span></h1>
            <div className="row g-4 justify-content-center">
              {metrics.map((m, i) => (
                <div className="col-md-4 col-sm-6" data-aos="zoom-in" data-aos-delay={i * 100} key={i}>
                  <div className="stat-card">
                    <h2 className="neon-text">{m.value}</h2>
                    <p className="fs-5 fw-bold mb-1">{m.label}</p>
                    <span className="opacity-50 small">{m.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-5" data-aos="fade-up">
              <h3 className="fw-bold mb-4 fs-1">Ready to scale your sales?</h3>
              <a href="/#contact" className="btn-neon-main">BOOK FREE CONSULTATION NOW</a>
            </div>
          </div>
        </section>
      )}

      <style>{`
        .instagro-theme { 
          --neon-blue: #00f3ff;
          --card-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(0, 243, 255, 0.15);
        }
        .detail-hero { padding: 80px 0; }
        .img-wrapper-mst {
            border-radius: 25px;
            overflow: hidden;
            border: 2px solid var(--neon-blue);
            box-shadow: 0 0 40px rgba(0, 243, 255, 0.1);
        }
        .img-wrapper-mst img {
            width: 100%; height: 480px; object-fit: cover; display: block;
        }
        .btn-neon-main { 
            border: none; background: var(--neon-blue); color: #000;
            padding: 16px 45px; font-weight: 800; border-radius: 10px; 
            transition: 0.4s; text-decoration: none; 
            display: inline-flex; align-items: center; justify-content: center;
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
            font-size: 1.1rem;
        }
        .btn-neon-main:hover { transform: translateY(-3px); box-shadow: 0 0 35px var(--neon-blue); color: #000; }
        .feature-grid-section { padding: 80px 0; background: rgba(255,255,255,0.01); }
        .mst-card {
            background: var(--card-bg); border: 1px solid var(--glass-border);
            border-radius: 30px; padding: 40px; height: 100%; transition: 0.4s;
        }
        .mst-card:hover { border-color: var(--neon-blue); transform: translateY(-8px); }
        .mst-list { list-style: none; padding: 0; }
        .mst-list li { margin-bottom: 20px; display: flex; align-items: center; gap: 15px; font-size: 1.1rem; }
        .mst-list i { color: var(--neon-blue); font-size: 1.2rem; background: rgba(0, 243, 255, 0.1); width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .result-box-mst {
            background: rgba(0, 243, 255, 0.02); border-left: 4px solid var(--neon-blue);
            padding: 20px; margin-bottom: 20px; border-radius: 0 15px 15px 0; transition: 0.3s;
        }
        .result-box-mst:hover { background: rgba(0, 243, 255, 0.06); padding-left: 25px; }
        .stats-section { padding: 80px 0; }
        .stat-card {
            background: rgba(255,255,255,0.02);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            padding: 40px 20px;
            transition: 0.3s;
        }
        .stat-card:hover { border-color: var(--neon-blue); transform: scale(1.03); }
        .stat-card h2 { font-size: 3.5rem; font-weight: 800; margin-bottom: 10px; }
      `}</style>
    </div>
  );
}
