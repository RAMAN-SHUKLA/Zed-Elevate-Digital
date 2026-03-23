import ServicePage from '../../components/ServicePage';

export default function WebsiteSeoPage() {
  return (
    <ServicePage
      title="SEO Services in Kanpur"
      subtitle="LOCAL SEO & WEBSITE DEVELOPMENT"
      badgeText="Best SEO Agency Kanpur"
      description="Zed Elevate Digital is the top IT company in Kanpur for website development and SEO services. We help businesses rank on the first page of Google with localized strategies and high-performance web solutions."
      features={[
        { icon: 'bi-search', title: 'Local SEO Kanpur', desc: 'Dominate "near me" searches with expert optimization.' },
        { icon: 'bi-file-earmark-text', title: 'Content Marketing', desc: 'Keyword-rich content that converts visitors into customers.' },
        { icon: 'bi-link-45deg', title: 'Google Ads Service', desc: 'ROI-focused PPC services in Kanpur for instant traffic.' },
        { icon: 'bi-geo-alt', title: 'Business Profile', desc: 'Google My Business optimization for Kanpur businesses.' },
        { icon: 'bi-code-slash', title: 'Website Development', desc: 'We are a premier website development company in Kanpur.' },
        { icon: 'bi-bar-chart', title: 'Search Analytics', desc: 'Detailed tracking with GA4 and Google Search Console.' },
      ]}
      image="/2.jpg"
      stats={[
        { value: 'Top 3', label: 'Local Rankings' },
        { value: '500%', label: 'Leads Increase' },
      ]}
    />
  );
}
