import { Mail } from 'lucide-react';

interface ContactFloatProps {
  onClick: () => void;
}

const ContactFloat = ({ onClick }: ContactFloatProps) => {
  return (
    <button
      onClick={onClick}
      className="contact-float group"
      aria-label="Open contact form"
    >
      <Mail className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
    </button>
  );
};

export default ContactFloat;