import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service not configured. Set VITE_EMAILJS_* env vars.");
      return;
    }

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        // Common keys many templates use
        name,
        Email: email,
        Subject: subject || "New message from portfolio",
        message,

        // EmailJS best practice: use reply_to for user replies
        reply_to: email,

        // Alternate keys some templates may expect
        from_name: name,
        from_email: email,
        subject: subject || "New message from portfolio",

        // Recipient (your inbox)
        to_email: import.meta.env.VITE_CONTACT_TO_EMAIL as string | undefined,
      } as Record<string, unknown>;

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      toast.error("Failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="glass mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss new projects 
              and opportunities to create exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Quick Contact */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">lengadionis1@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                    <p className="font-medium">Usually within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start glass" 
                    size="sm"
                    onClick={() => window.open('https://github.com/diolenga', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start glass" 
                    size="sm"
                    onClick={() => window.open('https://www.linkedin.com/in/dionislenga', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start glass" 
                    size="sm"
                    onClick={() => window.open('https://www.instagram.com/howto_techie?igshMzNINGNkZWQ4Mg==', '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="name">Name</label>
                        <Input id="name" placeholder="Your name" className="glass" value={name} onChange={(e) => setName(e.target.value)} required disabled={isSubmitting} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="email">Email</label>
                        <Input id="email" type="email" placeholder="your.email@example.com" className="glass" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isSubmitting} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                      <Input id="subject" placeholder="Project inquiry, collaboration, etc." className="glass" value={subject} onChange={(e) => setSubject(e.target.value)} disabled={isSubmitting} />
                  </div>
                  
                  <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="message">Message</label>
                      <Textarea id="message" placeholder="Tell me about your project, timeline, budget, or any questions you have..." className="glass min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)} required disabled={isSubmitting} />
                  </div>
                  
                    <Button type="submit" variant="hero" size="hero" className="w-full sm:w-auto" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Download my resume or schedule a quick call to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download Resume
                </Button>
                <Button 
                  variant="hero-secondary" 
                  size="lg"
                  onClick={() => window.open('mailto:lengadionis1@gmail.com?subject=Schedule a Call&body=Hi Dior, I would like to schedule a call to discuss a potential project. Please let me know your availability.', '_blank')}
                >
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};