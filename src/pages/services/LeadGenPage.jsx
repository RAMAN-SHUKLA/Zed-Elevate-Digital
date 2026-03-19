import SubServicePage from '../../components/SubServicePage';

export default function LeadGenPage() {
  return (
    <SubServicePage
      title="Lead Generation"
      heroTitle="High-Intent <br>Leads That Convert"
      heroDesc="We design and execute performance-focused ad systems that attract serious buyers. From targeting to landing page optimization, every step is built to maximize conversions and reduce acquisition cost."
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000"
      features={[
        { icon: 'bi-bullseye', text: 'Meta & Google Ads Campaigns' },
        { icon: 'bi-people-fill', text: 'Audience targeting & retargeting' },
        { icon: 'bi-funnel-fill', text: 'Landing funnel optimization' },
        { icon: 'bi-envelope-heart-fill', text: 'Lead nurturing strategy' },
      ]}
      results={[
        { title: '📊 Quality Leads', desc: 'Attracting serious buyers, not just clicks.' },
        { title: '💰 Improved Conversion Rate', desc: 'Turning prospects into paying customers.' },
        { title: '📉 Lower Cost Per Lead', desc: 'Optimized spending for maximum ROI.' },
      ]}
      metrics={[
        { value: '120+', label: 'Quality Leads', sub: 'Average per campaign run.' },
        { value: '40%', label: 'Lower CPL', sub: 'Through smart targeting.' },
        { value: '2x', label: 'Sales Velocity', sub: 'Faster closing with high-intent leads.' },
      ]}
    />
  );
}
