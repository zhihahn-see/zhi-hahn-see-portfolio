
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '@/utils/animations';

const Hero = () => {
  const { displayText } = useTypewriter('Hello, I\'m Zhi-Hahn See');
  const { displayText: subtitle } = useTypewriter('Software Engineer & Community Leader', { startDelay: 1000 });

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in">
            Incoming SDE Intern at Amazon
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {displayText}
            <span className="inline-block ml-1 animate-pulse">|</span>
          </h1>
          
          <p className="text-muted-foreground mb-8 max-w-lg">
            Passionate about software development and building meaningful applications. 
            Currently studying Computer Science at USC.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#experience" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Experience <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden animate-float">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQEkZ0whuKeJ_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699296548476?e=1748476800&v=beta&t=JANkIAI-Kc97o25ur3Qg96jZMYF7Ogd3f_GooY04h_c" 
              alt="Zhi-Hahn See"
              className="object-cover w-full h-full" 
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-soft"></div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute top-0 -right-4 glass-card rounded-lg px-4 py-2 animate-float shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Software Engineer</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 glass-card rounded-lg px-4 py-2 animate-float shadow-sm" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">USC Computer Science</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#experience" 
          className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
          aria-label="Scroll Down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-secondary-foreground"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
