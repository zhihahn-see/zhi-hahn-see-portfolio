
import { BriefcaseIcon } from 'lucide-react';
import { useScrollAnimation } from '@/utils/animations';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  logo: string;
  tags?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "amazon",
    title: "Software Development Engineer Intern",
    company: "Amazon",
    period: "Starting May 2025",
    description: "🔆 Summer 2025",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_400_400/company-logo_400_400/0/1630640869849/amazon_logo?e=1748476800&v=beta&t=V5QQJgngdbKMBP_VAh03OK_t4xWiYInHFjACa3dbtYw",
  },
  {
    id: "theta-tau",
    title: "President",
    company: "Theta Tau",
    period: "December 2024 — Present",
    description: "🌱 Cultivating community",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHBawy3et1r3w/company-logo_400_400/company-logo_400_400/0/1631302282211?e=1748476800&v=beta&t=2Vn5THG7eG2aJ7m1B8IpICRtfurOUvbdf1eqlKOv_Ls",
    tags: ["Leadership", "Community Building", "Professional Development"]
  },
  {
    id: "imsc",
    title: "Undergraduate Researcher",
    company: "Integrated Media Systems Center",
    period: "November 2024 — Present",
    description: "⚕️ Wearables for Health",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFaxBIIlqwtMg/company-logo_400_400/company-logo_400_400/0/1630591100195?e=1748476800&v=beta&t=2xRYE-IW2R6WF8GrRGJW59Qbezj1rgXX6rKEjHOPehk",
    tags: ["Research", "Technology Innovation"]
  },
  {
    id: "liberty-mutual",
    title: "Software Engineer Intern",
    company: "Liberty Mutual Insurance",
    period: "Summer 2024",
    description: "🎨 Redesigned employee device information cards",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFQ4BDi2WFLoA/company-logo_400_400/company-logo_400_400/0/1630623768743/liberty_mutual_insurance_logo?e=1748476800&v=beta&t=FsiO011p4IUefaNlEpa_MlkiO6hz-bwi2WY9A-4ItU4",
    tags: ["Software Development", "UI/UX", "Front-end"]
  },
  {
    id: "efta",
    title: "Information Technology Intern",
    company: "Education for Tomorrow Alliance",
    period: "Summer 2021",
    description: "👨‍💻 Strategized I.T. solutions and attended workshops",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEWGQy46kXYCg/company-logo_400_400/company-logo_400_400/0/1630565661618/educationfortomorrow_logo?e=1748476800&v=beta&t=C4XKrCDS3E7eL87ZdV0fxbS8zXEySCoHon-xjjzq9yQ",
    tags: ["IT Support", "Educational Technology"]
  }
];

const Experience = () => {
  useScrollAnimation();

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="scroll-trigger">
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="scroll-trigger mb-12 last:mb-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden bg-secondary flex items-center justify-center glass-card p-2">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-accent font-medium px-3 py-1 rounded-full bg-accent/10">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-primary font-medium mb-3">{exp.company}</h4>
                  
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="animated-badge"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-8 bg-muted/50 ml-8 md:ml-10 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Experience;
