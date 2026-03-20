import ServicePage from '../../components/ServicePage';

export default function WebsiteSeoPage() {
  return (
    <ServicePage
      title="Website SEO"
      subtitle="DIGITAL VISIBILITY & RANKING"
      badgeText="SEO Excellence"
      description="We build high-performance websites and optimize them for search engines to ensure your brand dominates Google rankings. From technical SEO to content strategy, we cover it all."
      features={[
        { icon: 'bi-search', title: 'Technical SEO', desc: 'Site speed, structure & crawlability' },
        { icon: 'bi-file-earmark-text', title: 'Content Strategy', desc: 'SEO-optimized content creation' },
        { icon: 'bi-link-45deg', title: 'Link Building', desc: 'High-authority backlink strategies' },
        { icon: 'bi-geo-alt', title: 'Local SEO', desc: 'Google My Business optimization' },
        { icon: 'bi-code-slash', title: 'Web Development', desc: 'Custom responsive websites' },
        { icon: 'bi-bar-chart', title: 'Analytics Setup', desc: 'GA4, Search Console & tracking' },
      ]}
      image="/2.jpg"
      stats={[
        { value: '1st Page', label: 'Google Rankings' },
        { value: '300%', label: 'Traffic Growth' },
      ]}
    />
  );
}
