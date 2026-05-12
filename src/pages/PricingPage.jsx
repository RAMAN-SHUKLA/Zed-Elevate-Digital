import useAOS from '../hooks/useAOS';
import { useEffect } from 'react';

export default function PricingPage() {
  useAOS();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-5">
      {/* Pricing Header */}
      <section className="section-padding text-center mt-5" style={{ background: 'linear-gradient(135deg, rgba(0,243,255,0.1), rgba(0,80,255,0.1))' }}>
        <div className="container" data-aos="fade-up">
          <span className="badge bg-info text-dark mb-3">PRICING PLANS</span>
          <h1 className="display-3 fw-bold mb-4">Invest in Your <span className="neon-text">Growth</span></h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '800px' }}>
            Transparent, results-driven pricing for businesses that are ready to dominate their market. No hidden fees, no lock-in contracts.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-bg-hero"></div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[
              {
                title: 'BASIC PLAN',
                price: '3,999',
                features: ['10 Social Media Posts (Graphics)', '12 Reels / Short Videos', 'Basic Caption Writing', 'Hashtag Research', 'Basic Page Management'],
                popular: false,
                btnText: 'GET STARTED',
                subtitle: 'Best for small businesses starting online'
              },
              {
                title: 'PREMIUM PLAN',
                price: '6,999',
                features: ['15 Social Media Posts', '12 Reels / High Quality Videos', 'Advanced Video Editing', 'Content Strategy + Planning', 'Branding Support', 'Priority Support', 'Meta Ads Management'],
                popular: true,
                btnText: 'MOST POPULAR',
                subtitle: 'Best for brands who want fast growth 🚀'
              },
              {
                title: 'CUSTOM PLAN',
                price: 'CUSTOM',
                features: ['Everything in Premium', 'Personal Brand Strategy', 'Influencer Marketing', 'E-commerce Automation', 'High-End Video Production', 'Dedicated Growth Team'],
                popular: false,
                btnText: 'CONTACT US',
                subtitle: 'Tailored solutions for large scale dominance'
              }
            ].map((plan, i) => (
              <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="popular-tag">MOST POPULAR</div>}
                  <h3 className="fw-bold mb-3">{plan.title}</h3>
                  <div className="price-amount">
                    {plan.price !== 'CUSTOM' && <span style={{ fontSize: '1.5rem', verticalAlign: 'super' }}>₹</span>}
                    {plan.price}
                    {plan.price !== 'CUSTOM' && <span className="price-period">/mo</span>}
                  </div>
                  <p className="small opacity-75 mb-4" style={{ minHeight: '40px' }}>{plan.subtitle}</p>
                  <ul className="pricing-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}><i className="bi bi-check2-circle"></i> {feature}</li>
                    ))}
                  </ul>
                  <a href="/#contact" className="btn-pricing">{plan.btnText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Pricing? */}
      <section className="section-padding bg-black bg-opacity-25">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">Why Our <span className="neon-text">Pricing Works</span></h2>
            <p className="opacity-50 fs-5 mx-auto" style={{ maxWidth: '700px' }}>We don't just sell services; we sell measurable business outcomes.</p>
          </div>
          <div className="row g-4">
            {[
              { title: 'No Hidden Costs', desc: 'The price you see is the price you pay. All our plans are inclusive of the core services needed to see results.' },
              { title: 'Flexible Scaling', desc: 'Start with what you need today. Scale up as your revenue grows. We\'re built to evolve with your business.' },
              { title: 'Performance Driven', desc: 'Our retainers are tied to your success. If we don\'t deliver value, we don\'t expect you to stay.' },
              { title: 'Transparent Reporting', desc: 'Every rupee spent is tracked and reported. You\'ll see exactly how your investment is performing.' }
            ].map((item, i) => (
              <div className="col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="glass-card h-100" style={{ borderLeft: '4px solid #00f3ff' }}>
                  <h4 className="neon-text">{item.title}</h4>
                  <p className="opacity-75 mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ borderTop: '1px solid rgba(0,243,255,0.1)' }}>
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="display-4 fw-bold mb-4">Not Sure Which Plan is <span className="neon-text">Right for You?</span></h2>
          <p className="fs-5 opacity-75 mb-5 mx-auto" style={{ maxWidth: '700px' }}>Book a free strategy call and we'll help you identify the best growth path for your specific business goals.</p>
          <a href="https://calendly.com/zedelevatedigital/30min" className="btn-neon">BOOK A FREE AUDIT</a>
        </div>
      </section>
    </div>
  );
}
