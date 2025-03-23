
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/50 py-12 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold font-display tracking-tight">Zhi-Hahn See</h2>
            <p className="text-muted-foreground mt-1">Software Engineer & Community Leader</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#experience" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a 
              href="#education" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Education
            </a>
            <a 
              href="#community" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Zhi-Hahn See. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
