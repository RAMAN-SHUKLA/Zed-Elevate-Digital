import SubServicePage from '../../components/SubServicePage';

export default function AdsPage() {
  return (
    <SubServicePage
      title="Ad Management"
      heroTitle="Precision Paid <br>Ad Management"
      heroDesc="Stop wasting money on ads that don't work. We manage your entire ad ecosystem across Meta, Google, and LinkedIn to ensure maximum reach and the lowest possible acquisition costs."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000"
      features={[
        { icon: 'bi-facebook', text: 'Meta Ads (FB & IG)' },
        { icon: 'bi-google', text: 'Google Search & Display' },
        { icon: 'bi-linkedin', text: 'B2B LinkedIn Campaigns' },
        { icon: 'bi-graph-up-arrow', text: 'ROAS Optimization' },
      ]}
      results={[
        { title: '📈 High ROAS', desc: 'Ensuring your ad spend translates into massive revenue.' },
        { title: '🎯 Laser Targeting', desc: 'Reaching only the people who are ready to buy.' },
        { title: '🔍 Transparent Data', desc: 'Detailed reporting on every dollar spent.' },
      ]}
      metrics={[
        { value: '₹5Cr+', label: 'Spend Managed', sub: 'Experience with high-scale ads.' },
        { value: '6x', label: 'Avg ROAS', sub: 'Our standard for ad performance.' },
        { value: '0.5%', label: 'CPL Reduction', sub: 'Continuous cost optimization.' },
      ]}
    />
  );
}
