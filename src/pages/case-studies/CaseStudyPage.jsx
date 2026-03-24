import { useParams } from 'react-router-dom';
import useAOS from '../../hooks/useAOS';

const CASE_STUDIES = {
  'banarasi-saree-house': {
    title: 'Banarasi Saree House',
    category: 'Branding',
    image: '/banaras.jpg?v=final',
    challenge: 'A traditional saree brand struggling to connect with the modern digital audience while maintaining its heritage appeal.',
    stats: [{ value: '500%', label: 'Social Growth' }, { value: '3X', label: 'Revenue Increase' }, { value: '1M+', label: 'Reach' }],
  },
  'rajasthan-heritage': {
    title: 'Rajasthan Heritage Tours',
    category: 'Branding',
    image: '/rajasthan.jpg?v=final',
    challenge: 'A heritage tourism company needed to modernize their digital presence while preserving the authentic Rajasthani experience.',
    stats: [{ value: '400%', label: 'Booking Increase' }, { value: '2M+', label: 'Impressions' }, { value: '4.9', label: 'Rating' }],
  },
  'mumbai-street-food': {
    title: 'Mumbai Street Food Hub',
    category: 'Web Development',
    image: '/streetfood.jpg?v=final',
    challenge: 'A popular street food chain wanted to expand online ordering and build a strong social media community around Indian street food culture.',
    stats: [{ value: '200%', label: 'Online Orders' }, { value: '15', label: 'New Outlets' }, { value: '2.5M', label: 'Views' }],
  },
  'kerala-ayurveda': {
    title: 'Kerala Ayurveda Center',
    category: 'Web Development',
    image: '/ayurved.jpg?v=final',
    challenge: 'An Ayurvedic wellness center needed a complete digital transformation to attract international health tourism.',
    stats: [{ value: '350%', label: 'Traffic Growth' }, { value: '150+', label: 'Intl Bookings' }, { value: '4.8', label: 'Rating' }],
  },
  'diwali-campaign': {
    title: 'Diwali Festive Campaign',
    category: 'Marketing',
    image: '/diwali.jpg?v=final',
    challenge: 'A multi-brand festive campaign that needed to capture the spirit of Diwali while driving conversions across multiple product categories.',
    stats: [{ value: '10X', label: 'ROAS' }, { value: '5M+', label: 'Impressions' }, { value: '₹2Cr', label: 'Revenue' }],
  },
  'wedding-marketing': {
    title: 'Wedding Season Marketing',
    category: 'Marketing',
    image: '/wedding.jpg?v=final',
    challenge: 'A wedding planning company wanted to dominate the digital space during peak wedding season with targeted campaigns.',
    stats: [{ value: '800%', label: 'Lead Growth' }, { value: '100+', label: 'Weddings Booked' }, { value: '4.9', label: 'Rating' }],
  },
};

export default function CaseStudyPage() {
  useAOS();
  const { slug } = useParams();
  const study = CASE_STUDIES[slug];

  if (!study) {
    return (
      <div className="section-padding text-center">
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Case Study <span className="neon-text">Not Found</span></h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)' }}>
        <div className="container" data-aos="fade-up">
          <span className="project-category-badge">{study.category}</span>
          <h1 className="display-3 fw-bold mb-4">{study.title}</h1>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <img src={study.image} className="img-fluid rounded-4 mb-5 w-100" alt={study.title} style={{ maxHeight: '500px', objectFit: 'cover' }} />

              <div className="stats-grid mb-5">
                {study.stats.map((s, i) => (
                  <div className="stat-item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <h3 className="neon-text">{s.value}</h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>

              <h3 className="neon-text mb-3">The Challenge</h3>
              <p className="fs-5 mb-5">{study.challenge}</p>

              <h3 className="neon-text mb-3">Our Strategy</h3>
              <div className="row g-4 mb-5">
                {['Research & Analysis', 'Creative Execution', 'Performance Optimization'].map((s, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="strategy-card text-center p-4" data-aos="fade-up" data-aos-delay={i * 100}>
                      <div className="strategy-icon mb-3">
                        <i className={`bi ${['bi-search', 'bi-brush', 'bi-graph-up'][i]}`}></i>
                      </div>
                      <h4>{s}</h4>
                      <p>Comprehensive approach tailored to the brand's unique needs and market position.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5">
                <a href="https://calendly.com/zedelevatedigital/30min" className="btn-neon" target="_blank" rel="noopener noreferrer">START YOUR PROJECT</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
