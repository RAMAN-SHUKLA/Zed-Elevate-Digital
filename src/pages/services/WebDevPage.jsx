import SubServicePage from '../../components/SubServicePage';

export default function WebDevPage() {
  return (
    <SubServicePage
      title="Web Development"
      heroTitle="High-Performance <br>Custom Websites"
      heroDesc="We build modern, lightning-fast websites and web applications using React, Next.js, and other cutting-edge technologies. Optimized for speed, SEO, and conversions."
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000"
      features={[
        { icon: 'bi-code-slash', text: 'Custom React Development' },
        { icon: 'bi-phone', text: 'Mobile-First Design' },
        { icon: 'bi-speedometer', text: 'Performance Optimization' },
        { icon: 'bi-shield-check', text: 'Secure & Scalable Architecture' },
      ]}
      results={[
        { title: '⚡ Ultrafast Speed', desc: '90+ Lighthouse scores for maximum SEO benefit.' },
        { title: '📱 Perfect Responsive', desc: 'Flawless experience on every single device.' },
        { title: '🔧 Easy CMS', desc: 'Manage your content without touching code.' },
      ]}
      metrics={[
        { value: '99', label: 'Load Score', sub: 'Near-perfect performance.' },
        { value: '0', label: 'Downtime', sub: 'Robust and reliable hosting.' },
        { value: '100%', label: 'Responsive', sub: 'Mobile, Tablet, and Desktop.' },
      ]}
    />
  );
}
