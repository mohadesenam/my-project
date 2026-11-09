import PageHero from '@/components/PageHero';
import ContactContent from '@/components/ContactContent';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with STRATECH for your engineering and construction projects. Request a free quote or consultation.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Ready to build something extraordinary? Let's start a conversation."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />
      <ContactContent />
    </>
  );
}
