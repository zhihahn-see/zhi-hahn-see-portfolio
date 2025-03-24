
import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '@/utils/animations';

const Contact = () => {
  useScrollAnimation();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="scroll-trigger">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          <div className="scroll-trigger">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:zsee@usc.edu" 
                  className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-secondary/50"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">zsee@usc.edu</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/zhi-hahn-see/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-secondary/50"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-muted-foreground">Connect on LinkedIn</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/zhihahn-see" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-secondary/50"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-muted-foreground">Check out my projects</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="scroll-trigger">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              {formSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h4 className="text-green-800 font-medium text-lg mb-2">Message Sent!</h4>
                  <p className="text-green-700">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
