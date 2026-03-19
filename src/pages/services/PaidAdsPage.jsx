import ServicePage from '../../components/ServicePage';

export default function PaidAdsPage() {
  return (
    <ServicePage
      title="Paid Ads"
      subtitle="PERFORMANCE MARKETING"
      badgeText="Maximum ROI"
      description="We design and manage high-converting ad campaigns across Google, Facebook, Instagram, and more. Our data-driven approach ensures every rupee spent drives measurable business results."
      features={[
        { icon: 'bi-bullseye', title: 'Targeted Campaigns', desc: 'Precision audience targeting' },
        { icon: 'bi-graph-up-arrow', title: 'Performance Tracking', desc: 'Real-time analytics & reporting' },
        { icon: 'bi-facebook', title: 'Social Ads', desc: 'Facebook & Instagram advertising' },
        { icon: 'bi-google', title: 'Google Ads', desc: 'Search & display campaigns' },
        { icon: 'bi-funnel', title: 'Conversion Funnels', desc: 'Optimized sales funnels' },
        { icon: 'bi-arrow-repeat', title: 'Retargeting', desc: 'Re-engage potential customers' },
      ]}
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      stats={[
        { value: '5X', label: 'Average ROAS' },
        { value: '₹10Cr+', label: 'Ad Spend Managed' },
      ]}
    />
  );
}
