import SubServicePage from '../../components/SubServicePage';

export default function ContentPage() {
  return (
    <SubServicePage
      title="Content Strategy"
      heroTitle="Content That <br>Builds Legacies"
      heroDesc="We craft high-impact content strategies that tell your brand's unique story. From blogs to video scripts, our content is designed to educate, entertain, and convert."
      image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000"
      features={[
        { icon: 'bi-pen', text: 'Expert Copywriting' },
        { icon: 'bi-film', text: 'Video Scriptwriting' },
        { icon: 'bi-book', text: 'Blog & Article Strategy' },
        { icon: 'bi-megaphone', text: 'Brand Tone Voice' },
      ]}
      results={[
        { title: '📖 Brand Story', desc: 'Developing a narrative that people connect with.' },
        { title: '🤝 Trust Building', desc: 'Establishing you as an authority in your field.' },
        { title: '📱 Platform Agnostic', desc: 'Perfect content for every digital touchpoint.' },
      ]}
      metrics={[
        { value: '1M+', label: 'Words Written', sub: 'High-quality brand assets.' },
        { value: '5x', label: 'Engagement', sub: 'Better interaction via better copy.' },
        { value: '10+', label: 'Platforms', sub: 'Cross-platform content reach.' },
      ]}
    />
  );
}
