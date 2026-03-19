import ServicePage from '../../components/ServicePage';

export default function VideoEditingPage() {
  return (
    <ServicePage
      title="Video Editing"
      subtitle="PROFESSIONAL VIDEO PRODUCTION"
      badgeText="Motion Mastery"
      description="From raw footage to cinematic masterpieces, we transform your video content into compelling stories that captivate audiences and drive engagement across all platforms."
      features={[
        { icon: 'bi-camera-video', title: 'Professional Editing', desc: 'Cinematic quality post-production' },
        { icon: 'bi-film', title: 'Short-Form Content', desc: 'Reels, TikToks & YouTube Shorts' },
        { icon: 'bi-music-note-beamed', title: 'Sound Design', desc: 'Professional audio mixing' },
        { icon: 'bi-badge-3d', title: 'Motion Graphics', desc: 'Animated visual elements' },
        { icon: 'bi-lightning', title: 'Fast Turnaround', desc: '24-48 hour delivery' },
        { icon: 'bi-aspect-ratio', title: 'Multi-Platform', desc: 'Optimized for every platform' },
      ]}
      image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
      stats={[
        { value: '1000+', label: 'Videos Edited' },
        { value: '50M+', label: 'Views Generated' },
      ]}
    />
  );
}
