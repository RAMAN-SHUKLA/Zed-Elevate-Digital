import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4">
            <img src="/LOGO.png" alt="Logo" height="50" className="mb-4" />
            <p className="small opacity-50 text-start">
              Zed Elevate Digital is a leading <strong>online marketing agency in Kanpur</strong>. We offer premium digital marketing services in Kanpur, Uttar Pradesh, to elevate your brand globally.
            </p>

          </div>
          <div className="col-lg-2">
            <h5 className="mb-4 text-start">Quick Links</h5>
            <ul className="footer-links text-start">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="mb-4 text-start">Expertise</h5>
            <ul className="footer-links text-start">
              <li><Link to="/services/social-media">Social Media</Link></li>
              <li><Link to="/services/branding">Branding</Link></li>
              <li><Link to="/services/website-seo">SEO</Link></li>
              <li><Link to="/services/video-editing">Video Production</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="mb-4 text-start">Connect</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://www.instagram.com/zed_elevate_digital" target="_blank" rel="noopener noreferrer" className="neon-text"><i className="bi bi-instagram"></i></a>
              <a href="#" className="neon-text"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="neon-text"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="neon-text"><i className="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center pt-4 border-top border-secondary border-opacity-25">
          <p className="mb-0 opacity-50 small">&copy; {new Date().getFullYear()} Zed Elevate Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
