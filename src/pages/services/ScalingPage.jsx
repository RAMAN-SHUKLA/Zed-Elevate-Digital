import SubServicePage from '../../components/SubServicePage';

export default function ScalingPage() {
  return (
    <SubServicePage
      title="Business Scaling"
      heroTitle="Scale Your <br>Brand Revenue"
      heroDesc="We don't just provide services; we provide growth partners. Our scaling strategies focus on operational efficiency and aggressive market expansion to take your brand from 7 to 8 figures."
      image="https://images.unsplash.com/photo-1543286386-713bdd54867e?auto=format&fit=crop&w=1000"
      features={[
        { icon: 'bi-diagram-3', text: 'Systematization & Automation' },
        { icon: 'bi-building-up', text: 'Market Share Expansion' },
        { icon: 'bi-cash-coin', text: 'Profit Margin Optimization' },
        { icon: 'bi-people', text: 'Team Growth Strategy' },
      ]}
      results={[
        { title: '🚀 Aggressive Growth', desc: 'Pushing past revenue plateaus with proven systems.' },
        { title: '🛠 Operational Freedom', desc: 'Building systems that run without the founder.' },
        { title: '🌎 Global Presence', desc: 'Expanding your reach into new territories.' },
      ]}
      metrics={[
        { value: '3x', label: 'Revenue Goal', sub: 'Our target for scaling partners.' },
        { value: '50%', label: 'Profit Bump', sub: 'Through efficient automation.' },
        { value: '24/7', label: 'Auto-Systems', sub: 'Business that never sleeps.' },
      ]}
    />
  );
}
