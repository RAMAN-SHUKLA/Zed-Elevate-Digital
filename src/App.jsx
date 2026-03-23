import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';

import SocialMediaPage from './pages/services/SocialMediaPage';
import DesigningPage from './pages/services/DesigningPage';
import VideoEditingPage from './pages/services/VideoEditingPage';
import PaidAdsPage from './pages/services/PaidAdsPage';
import WebsiteSeoPage from './pages/services/WebsiteSeoPage';
import BrandingPage from './pages/services/BrandingPage';

// Sub-services
import LeadGenPage from './pages/services/LeadGenPage';
import InstagroPage from './pages/services/InstagroPage';
import FunnelsPage from './pages/services/FunnelsPage';
import ContentPage from './pages/services/ContentPage';
import AdsPage from './pages/services/AdsPage';
import WebDevPage from './pages/services/WebDevPage';
import ScalingPage from './pages/services/ScalingPage';

import AiInDesignPage from './pages/blog/AiInDesignPage';
import ReelsEngagementPage from './pages/blog/ReelsEngagementPage';
import TopAgenciesKanpur from './pages/blog/TopAgenciesKanpur';
import BusinessWebsiteKanpur from './pages/blog/BusinessWebsiteKanpur';
import ReelsEngagementGuide from './pages/blog/ReelsEngagementGuide';
import RankOnGoogleTips from './pages/blog/RankOnGoogleTips';
import BrandingVsMarketing from './pages/blog/BrandingVsMarketing';

import CaseStudyPage from './pages/case-studies/CaseStudyPage';

// Admin
import AdminPage from './pages/AdminPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ScrollProgressBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        {/* Services */}
        <Route path="/services/social-media" element={<SocialMediaPage />} />
        <Route path="/services/designing" element={<DesigningPage />} />
        <Route path="/services/video-editing" element={<VideoEditingPage />} />
        <Route path="/services/paid-ads" element={<PaidAdsPage />} />
        <Route path="/services/website-seo" element={<WebsiteSeoPage />} />
        <Route path="/services/branding" element={<BrandingPage />} />

        {/* Sub-services */}
        <Route path="/services/lead-gen" element={<LeadGenPage />} />
        <Route path="/services/instagro" element={<InstagroPage />} />
        <Route path="/services/funnels" element={<FunnelsPage />} />
        <Route path="/services/content" element={<ContentPage />} />
        <Route path="/services/ads" element={<AdsPage />} />
        <Route path="/services/web-dev" element={<WebDevPage />} />
        <Route path="/services/scaling" element={<ScalingPage />} />

        {/* Blog Articles */}
        <Route path="/blog/ai-in-design" element={<AiInDesignPage />} />
        <Route path="/blog/reels-engagement" element={<ReelsEngagementPage />} />
        <Route path="/blog/top-agencies-kanpur" element={<TopAgenciesKanpur />} />
        <Route path="/blog/business-website-kanpur" element={<BusinessWebsiteKanpur />} />
        <Route path="/blog/reels-engagement-guide" element={<ReelsEngagementGuide />} />
        <Route path="/blog/rank-on-google-tips" element={<RankOnGoogleTips />} />
        <Route path="/blog/branding-vs-marketing" element={<BrandingVsMarketing />} />

        {/* Case Studies */}
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />

        {/* 404 */}
        <Route path="*" element={
          <div className="section-padding text-center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <h1 className="display-1 fw-bold neon-text">404</h1>
              <p className="fs-4 opacity-75">Page not found</p>
              <a href="/" className="btn-neon mt-3">Go Home</a>
            </div>
          </div>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
