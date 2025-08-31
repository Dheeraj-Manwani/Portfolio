import { useState } from "react";
import {
  Mail,
  MessageSquare,
  User,
  Send,
  CheckCircle,
  MapPin,
  Phone,
  Clock,
  Copy,
  ExternalLink,
  PhoneCall,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Contact modal states
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Contact action functions
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const openEmailClient = () => {
    const email = "dkmanwani2000@gmail.com";
    const subject = "Let's Connect";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, "_blank");
    toast.success("Opening email client...");
  };

  const makePhoneCall = () => {
    const phoneNumber = "+919340291210";
    window.open(`tel:${phoneNumber}`, "_blank");
    toast.success("Initiating phone call...");
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // setIsSuccess(true);

      const mailBackend = import.meta.env.VITE_MAIL_BACKEND;

      const response = await fetch(mailBackend, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Failed to send message");
        setIsSuccess(false);
        return;
      } else {
        toast.success("Message sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSuccess(true);
        // const handleClick = async () => {
        // await onTrigger();
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#8F8DFF", "#3B47B8"];

        const frame = () => {
          if (Date.now() > end) return;

          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
          });

          requestAnimationFrame(frame);
        };

        frame();
        // };
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4 md:mb-6">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Want to chat? I'd love to hear from you! Fill out the form below and
            I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing interesting projects, or just
                having a friendly chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsEmailModalOpen(true)}
                className="flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    dkmanwani2000@gmail.com
                  </p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-4 w-4 text-primary" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsPhoneModalOpen(true)}
                className="flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground group-hover:text-secondary transition-colors duration-300">
                    +91 934-029-1210
                  </p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PhoneCall className="h-4 w-4 text-secondary" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Response Time
                  </h4>
                  <p className="text-muted-foreground">Within 24 hours</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-accent/30 rounded-xl p-6 border border-accent/20"
            >
              <h4 className="font-semibold text-foreground mb-4">
                What I can help you with:
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Web application development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Technical consulting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Project collaboration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Code review and optimization
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={formVariants} className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
              {isSuccess ? (
                // Success State
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="h-8 w-8 text-success" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSuccess(false)}
                    className="btn-hero"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                // Form
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-foreground mb-2 block"
                    >
                      Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={`pl-10 transition-all duration-200 ${
                          errors.name
                            ? "border-destructive ring-destructive/20"
                            : "focus:ring-primary/20"
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-foreground mb-2 block"
                    >
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`pl-10 transition-all duration-200 ${
                          errors.email
                            ? "border-destructive ring-destructive/20"
                            : "focus:ring-primary/20"
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Label
                      htmlFor="contact-subject"
                      className="text-sm font-medium text-foreground mb-2 block"
                    >
                      Subject *
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        className={`pl-10 transition-all duration-200 ${
                          errors.subject
                            ? "border-destructive ring-destructive/20"
                            : "focus:ring-primary/20"
                        }`}
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive mt-1"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-medium text-foreground mb-2 block"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className={`min-h-[120px] resize-none transition-all duration-200 ${
                        errors.message
                          ? "border-destructive ring-destructive/20"
                          : "focus:ring-primary/20"
                      }`}
                      placeholder="Tell me about your project or how I can help..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      type="submit"
                      className="w-full btn-hero group"
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="rounded-full h-4 w-4 border-b-2 border-current mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              )}

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-6 p-4 bg-accent/30 rounded-xl text-center border border-accent/20"
              >
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />⚡ I typically respond within 24
                  hours
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Email Contact Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsEmailModalOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative bg-background border border-border rounded-xl shadow-2xl w-full max-w-md z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Email Contact
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEmailModalOpen(false)}
                className="hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-2">
                  dkmanwani2000@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">
                  Choose an action below
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={openEmailClient}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>

                <Button
                  onClick={() =>
                    copyToClipboard("dkmanwani2000@gmail.com", "Email")
                  }
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <Copy className="mr-2 h-5 w-5" />
                  Copy Email
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Phone Contact Modal */}
      {isPhoneModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsPhoneModalOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative bg-background border border-border rounded-xl shadow-2xl w-full max-w-md z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Phone Contact
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPhoneModalOpen(false)}
                className="hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-2">
                  +91 934-029-1210
                </p>
                <p className="text-sm text-muted-foreground">
                  Choose an action below
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={makePhoneCall}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  size="lg"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Make Call
                </Button>

                <Button
                  onClick={() =>
                    copyToClipboard("+919340291210", "Phone number")
                  }
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <Copy className="mr-2 h-5 w-5" />
                  Copy Number
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
