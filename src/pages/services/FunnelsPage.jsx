import SubServicePage from '../../components/SubServicePage';

export default function FunnelsPage() {
  return (
    <SubServicePage
      title="Sales Funnels"
      heroTitle="Automated Sales <br>Conversion Funnels"
      heroDesc="We build high-converting landing pages and automated email sequences that turn cold traffic into loyal customers while you sleep. Maximum efficiency, zero waste."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000"
      features={[
        { icon: 'bi-layout-text-window', text: 'Custom Landing Pages' },
        { icon: 'bi-envelope-check', text: 'Email Marketing Automation' },
        { icon: 'bi-cart-check', text: 'Upsell & Cross-sell Flows' },
        { icon: 'bi-bar-chart-line', text: 'A/B Split Testing' },
      ]}
      results={[
        { title: '🎯 Higher AOV', desc: 'Increasing average order value through strategic upsells.' },
        { title: '🔄 Auto-Pilot Revenue', desc: 'Systems that work 24/7 without manual intervention.' },
        { title: '📊 Actionable Data', desc: 'Clear insights into where your customers drop off.' },
      ]}
      metrics={[
        { value: '25%', label: 'Conv. Rate', sub: 'Average for optimized landing pages.' },
        { value: '3x', label: 'ROI Increase', sub: 'Compared to direct traffic sales.' },
        { value: '1min', label: 'Load Speed', sub: 'Ultrafast pages for low bounce.' },
      ]}
    />
  );
}
