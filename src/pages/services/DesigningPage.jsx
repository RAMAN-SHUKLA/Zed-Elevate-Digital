import ServicePage from '../../components/ServicePage';

export default function DesigningPage() {
  return (
    <ServicePage
      title="Graphic Designing"
      subtitle="CREATIVE VISUAL DESIGN"
      badgeText="Design Excellence"
      description="We create stunning visual designs that elevate your brand identity. From social media graphics to complete brand overhauls, our design team delivers pixel-perfect creations that captivate your audience."
      features={[
        { icon: 'bi-palette', title: 'Brand Identity Design', desc: 'Complete visual branding systems' },
        { icon: 'bi-image', title: 'Social Media Graphics', desc: 'Scroll-stopping visual content' },
        { icon: 'bi-layout-text-window', title: 'UI/UX Design', desc: 'User-centered digital experiences' },
        { icon: 'bi-brush', title: 'Illustration', desc: 'Custom artwork & illustrations' },
        { icon: 'bi-file-earmark-richtext', title: 'Print Design', desc: 'Business cards, brochures & more' },
        { icon: 'bi-star', title: 'Logo Design', desc: 'Memorable brand marks' },
      ]}
      image="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop"
      stats={[
        { value: '500+', label: 'Designs Created' },
        { value: '100+', label: 'Happy Clients' },
      ]}
    />
  );
}
