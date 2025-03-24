
import { useScrollAnimation } from '@/utils/animations';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Java", "SQL"]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "CSS", "Figma"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "PostgreSQL", "MySQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "GitHub"]
  },
  {
    title: "Methodologies",
    skills: ["Agile Development", "Leadership"]
  }
];

const specialties = [
  "Software Development",
  "Cloud Computing",
  "Application Design",
  "Web Development",
  "Database Management",
  "Version Control",
  "Project Management",
  "UI/UX Design",
  "Responsive Design",
  "API Development",
  "Team Leadership",
  "Problem Solving"
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
            
            <div className="glass-card rounded-xl p-6 md:p-8 scroll-trigger">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              
              <p className="text-muted-foreground mb-4">
                As a dedicated software engineer with a focus on full-stack development,
                I combine technical expertise with leadership abilities to deliver
                impactful solutions. My experience spans from frontend design to 
                backend implementation, with a particular interest in cloud computing
                and application design.
              </p>
              
              <p className="text-muted-foreground">
                I thrive in collaborative environments where I can apply my 
                problem-solving skills and technical knowledge to create efficient, 
                user-friendly applications. My background in both academic research 
                and industry internships has equipped me with a versatile skill set 
                and a holistic approach to software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
