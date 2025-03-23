
import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/utils/animations';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
  logo: string;
}

const educationItems: EducationItem[] = [
  {
    id: "usc",
    institution: "University of Southern California",
    degree: "Bachelor of Science in Computer Science",
    period: "Expected May 2026",
    description: "Pursuing a comprehensive computer science education with a focus on software development and cloud computing technologies.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHatTfEv4Af6w/company-logo_400_400/company-logo_400_400/0/1631312619853?e=1748476800&v=beta&t=uyoszhjWfIcKkMYsqUt2_9-H-yjLnbGX2pcbN8ynN9w"
  },
  {
    id: "ucdavis",
    institution: "University of California, Davis",
    degree: "Computer Engineering",
    period: "2022-2023",
    description: "Initial studies in computer engineering, establishing a solid foundation in both hardware and software principles.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEBG25KNBwuCQ/company-logo_400_400/company-logo_400_400/0/1630629297217/uc_davis_logo?e=1748476800&v=beta&t=9z1dvp0bPB1grBjitWdmifKy0U8-e7a3vPliXN-Qeqg"
  },
  {
    id: "jcs",
    institution: "The John Cooper School",
    degree: "High School Diploma",
    period: "2017-2022",
    description: "Comprehensive high school education with foundation courses in computer science and STEM fields.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGKBECNQGC3tQ/company-logo_400_400/company-logo_400_400/0/1630582221834/john_cooper_school_logo?e=1748476800&v=beta&t=QkAlShATAqcj-JwgdZ7z7enCIJVYvdgVfXx0S2_SDUs"
  }
];

const Education = () => {
  useScrollAnimation();
  
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="scroll-trigger">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and educational background
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {educationItems.map((item, index) => (
            <div 
              key={item.id} 
              className="glass-card rounded-xl overflow-hidden scroll-trigger"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-40 bg-secondary/30 flex items-center justify-center p-6">
                <img 
                  src={item.logo} 
                  alt={`${item.institution} logo`} 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold">{item.institution}</h3>
                  <span className="text-sm text-accent font-medium px-3 py-1 rounded-full bg-accent/10 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                
                <h4 className="text-primary font-medium mb-4">{item.degree}</h4>
                
                {item.description && (
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Education;
