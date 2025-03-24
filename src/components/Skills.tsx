
import { useScrollAnimation } from '@/utils/animations';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "C", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "HTML", "CSS", "Figma", "Bootstrap"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "PostgreSQL", "MySQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "pgAdmin", "Docker", "Jira", "Bamboo", "CloudForge"]
  }
];

const specialties = [
  "Software Development",
  "Full Stack Development",
  "Version Control",
  "Agile and Scrum Methodologies",
  "UI/UX Design",
  "Documentation Writing",
  "Team Leadership",
  "Problem Solving",
  "Collaboration",
  "Mentorship"
];

const Skills = () => {
  useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="scroll-trigger">
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="scroll-trigger">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="mb-10 last:mb-0"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="skill-chip scroll-trigger"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <div className="glass-card rounded-xl p-6 md:p-8 mb-8 scroll-trigger">
              <h3 className="text-xl font-semibold mb-6">Areas of Specialization</h3>
              
              <div className="flex flex-wrap gap-3">
                {specialties.map((specialty, index) => (
                  <span 
                    key={specialty} 
                    className="skill-chip scroll-trigger"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
