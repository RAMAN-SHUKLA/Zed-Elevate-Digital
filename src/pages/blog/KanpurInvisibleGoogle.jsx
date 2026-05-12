import { Link } from 'react-router-dom';
import useAOS from '../../hooks/useAOS';

export default function KanpurInvisibleGoogle() {
  useAOS();

  const mistakes = [
    { num: '#1', title: 'Your Google Business Profile is unclaimed — or worse, wrong', body: "This is the single most common problem we see. Google Business Profile (formerly Google My Business) is the box that appears on the right side of Google search results — the one with your address, phone number, hours, photos, and reviews. If you haven't claimed yours, Google has likely auto-generated a listing for you. And it's probably incomplete, inaccurate, or pointing to the wrong address.", fix: 'Go to business.google.com and claim your listing today. It\'s free. Fill in every single field — hours, category, description, phone number, website, and at minimum 10 photos. Businesses with complete profiles get 7× more clicks than those with incomplete ones.' },
    { num: '#2', title: 'You have no reviews — or you\'ve never responded to a single one', body: "Reviews are the new word-of-mouth. The average business we audit has fewer than 12 reviews. The average business that ranks on Page 1 in Kanpur for competitive searches has 45+ reviews, with an average rating above 4.3. That gap is enormous — and it's entirely within your control.", fix: 'After every transaction or appointment, ask your customer directly: "Would you mind leaving us a Google review?" Send a WhatsApp message with a direct link. Respond to every review — good or bad — within 48 hours.' },
    { num: '#3', title: 'Your website loads in 8 seconds on a mobile phone', body: "Over 78% of searches in Kanpur happen on a smartphone. If your website takes more than 3 seconds to load, more than half of your visitors have already hit the back button and clicked on your competitor. Google actively penalises slow websites in its rankings.", fix: 'Go to PageSpeed Insights (pagespeed.web.dev) right now and type in your website URL. If your mobile score is below 60, you have a serious problem. Compress all images, remove unnecessary plugins, and switch to faster hosting.' },
    { num: '#4', title: 'Nobody in Kanpur is linking to your website', body: "Google decides how trustworthy your website is partly by looking at who else links to it. Most local businesses in Kanpur have fewer than 5 websites linking to them. Top-ranking competitors often have 50 to 200+.", fix: 'Start local: get listed on JustDial, Sulekha, IndiaMart, and the CII Kanpur chapter. Ask your suppliers and partners to link to your website. Write a guest article for a Kanpur-based publication.' },
    { num: '#5', title: "Your website content doesn't match what Kanpur customers are actually searching for", body: 'A coaching institute might call itself an "Academic Excellence Centre" — but students are searching for "best CBSE coaching in Kanpur" or "12th commerce tuition near Govind Nagar." If your website doesn\'t contain the words your customers are typing, you simply won\'t appear.', fix: 'Think like your customer, not like your brand. Make a list of 20 questions a potential customer might type into Google. Make sure your website naturally contains those phrases.' },
    { num: '#6', title: "You're targeting the whole world instead of Kanpur", body: "We've reviewed website content for Kanpur businesses that never once mentions Kanpur, Uttar Pradesh, or even India. Google localises its search results. If your website has no local signals, you're invisible in local results.", fix: 'Add your city and locality throughout your website naturally. Create a dedicated Service Areas page. Embed a Google Map on your Contact page. Mention Kanpur in your page titles and meta descriptions.' },
    { num: '#7', title: 'You set it up once and forgot about it', body: "Google rewards businesses that are active and consistent. A GBP that hasn't had a new photo in 14 months, a website whose blog hasn't been updated since 2022 — all signal to Google that this business might not be reliably active.", fix: 'Block one hour every month to update your GBP: add new photos, post an update, check your hours. Publish one piece of useful content every month. These small actions compound over time.' },
  ];

  return (
    <>
      <header className="section-padding text-center" style={{ background: 'radial-gradient(ellipse at top, rgba(0,243,255,0.15) 0%, transparent 65%)' }}>
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <span className="badge mb-3" style={{ background: 'rgba(0,243,255,0.15)', color: '#00f3ff', border: '1px solid rgba(0,243,255,0.3)', padding: '6px 16px', fontSize: '0.78rem', letterSpacing: '1px' }}>
                <i className="bi bi-search me-1"></i> LOCAL SEO
              </span>
              <h1 className="display-4 fw-bold mb-4">Why Kanpur Businesses Are Still <span className="neon-text">Invisible on Google</span> — And How to Fix It in 30 Days</h1>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-4" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                <span><i className="bi bi-person-fill me-2 text-info"></i>Zed Elevate Digital</span>
                <span><i className="bi bi-calendar3 me-2 text-info"></i>May 12, 2026</span>
                <span><i className="bi bi-clock me-2 text-info"></i>12 min read</span>
                <span><i className="bi bi-geo-alt-fill me-2 text-info"></i>Kanpur, U.P.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding pt-4">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: '820px', fontSize: '1.05rem', lineHeight: '1.85', color: 'rgba(255,255,255,0.85)' }}>

            <p>Let me ask you something honest. Right now, if someone in Kanpur Googles the thing you sell — your service, your product, your expertise — does your business show up?</p>
            <p>Not on page 3. Not buried below a Justdial listing. <strong>Actually show up</strong>, front and centre, where real customers are looking.</p>
            <p>If you paused before answering — or if you already know the answer is no — you're not alone.</p>
            <p>In the last three years, we've audited the online presence of over 40 Kanpur businesses across Civil Lines, Swaroop Nagar, Kidwai Nagar, Jajmau, and Govind Nagar. And we found the <strong>same seven mistakes</strong>, over and over again, regardless of the industry.</p>

            <div style={{ background: 'rgba(0,243,255,0.07)', borderLeft: '4px solid #00f3ff', borderRadius: '0 12px 12px 0', padding: '20px 28px', margin: '2rem 0', fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>
              <i className="bi bi-graph-up-arrow me-2"></i>73% of Kanpur consumers now search Google before visiting any local store, clinic, or service provider. If you're not showing up, your competitor is.
            </div>

            <h2 className="fw-bold mt-5 mb-4" style={{ fontSize: '1.7rem' }}>The 7 Mistakes — And How to Fix Each One</h2>

            {mistakes.map((m, i) => (
              <div key={i} className="mb-4 p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,243,255,0.15)' }}>
                <span className="badge mb-2" style={{ background: 'linear-gradient(135deg, #00f3ff, #0080ff)', color: '#000', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px' }}>MISTAKE {m.num}</span>
                <h3 className="neon-text mt-2 mb-3" style={{ fontSize: '1.25rem' }}>{m.title}</h3>
                <p>{m.body}</p>
                <div className="p-3 rounded-3" style={{ background: 'rgba(0,243,255,0.06)', border: '1px solid rgba(0,243,255,0.2)' }}>
                  <span className="d-block small fw-bold mb-2" style={{ color: '#00f3ff', fontSize: '0.75rem', letterSpacing: '1.5px' }}><i className="bi bi-tools me-1"></i> THE FIX</span>
                  <p className="mb-0">{m.fix}</p>
                </div>
              </div>
            ))}

            <h2 className="fw-bold mt-5 mb-3" style={{ fontSize: '1.7rem' }}>One Final Thought</h2>
            <p>Digital marketing in Kanpur isn't a luxury anymore. The businesses that are winning online right now — in leather, education, healthcare, food — are not necessarily the biggest or the oldest. They're the ones that showed up consistently online, fixed the basics, and kept going.</p>
            <p><strong>The businesses that are losing aren't bad businesses. They're just invisible.</strong></p>

            {/* CTA */}
            <div className="text-center p-5 my-5 rounded-4" style={{ background: 'linear-gradient(135deg, rgba(0,243,255,0.1), rgba(0,128,255,0.1))', border: '1px solid rgba(0,243,255,0.3)' }} data-aos="fade-up">
              <h3 className="fw-bold mb-3" style={{ fontSize: '1.8rem' }}>Want us to audit your Google presence — <span className="neon-text">for free?</span></h3>
              <p className="opacity-75 mb-4">We'll review your Google Business Profile, website speed, local rankings, and review score — and send you a personalised action report within 48 hours.</p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="https://wa.me/+917348144937?text=Hi%20Zed%20Elevate%2C%20I%20want%20a%20free%20Google%20audit" className="btn-neon">GET FREE AUDIT ON WHATSAPP</a>
                <a href="/#contact" className="btn-neon-outline">BOOK A CALL</a>
              </div>
              <p className="mt-3 small opacity-50"><i className="bi bi-geo-alt me-1"></i>Zed Elevate Digital • Kanpur, Uttar Pradesh • <a href="tel:+917348144937" className="neon-text" style={{ textDecoration: 'none' }}>+91 73481 44937</a></p>
            </div>

            <div className="mt-4">
              <Link to="/blog" className="neon-text" style={{ textDecoration: 'none' }}><i className="bi bi-arrow-left me-2"></i>Back to all articles</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
