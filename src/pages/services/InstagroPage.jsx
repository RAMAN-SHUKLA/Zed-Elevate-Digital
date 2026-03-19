import SubServicePage from '../../components/SubServicePage';

export default function InstagroPage() {
  return (
    <SubServicePage
      title="InstaGrow"
      heroTitle="Organic Instagram <br>Explosive Growth"
      heroDesc="Our InstaGrow system uses advanced content psychology and algorithm-friendly strategies to build a massive, engaged following without bots or fake engagement. Real fans, real impact."
      image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000"
      features={[
        { icon: 'bi-lightning-fill', text: 'Viral Content Strategy' },
        { icon: 'bi-graph-up', text: 'Engagement Optimization' },
        { icon: 'bi-camera-video', text: 'High-Retention Reels' },
        { icon: 'bi-chat-heart', text: 'Community Building' },
      ]}
      results={[
        { title: '🚀 Viral Reach', desc: 'Pushing your content to the Explore page consistently.' },
        { title: '📈 10k+ Followers', desc: 'Average growth for active clients within 3-6 months.' },
        { title: '✨ Brand Authority', desc: 'Becoming a recognized voice in your niche.' },
      ]}
      metrics={[
        { value: '500k+', label: 'Monthly Reach', sub: 'Average organic visibility.' },
        { value: '15%', label: 'Avg Engagement', sub: 'Far above industry standards.' },
        { value: '3x', label: 'Share Rate', sub: 'Content people love to distribute.' },
      ]}
    />
  );
}
