
import { useScrollAnimation } from '@/utils/animations';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 80 },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Figma", level: 75 },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "GitHub", level: 85 },
    ]
  },
  {
    title: "Methodologies",
    skills: [
      { name: "Agile Development", level: 90 },
      { name: "Leadership", level: 85 },
    ]
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
          <p className="section-subtitle">
            A comprehensive view of my technical abilities and specializations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="scroll-trigger">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="mb-10 last:mb-0"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="scroll-trigger"
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`,
                            transition: 'width 1s ease-in-out',
                            backgroundColor: `hsl(${210 + categoryIndex * 30}, 80%, 60%)`
                          }}
                        ></div>
                      </div>
                    </div>
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
