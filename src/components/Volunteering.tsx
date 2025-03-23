
import { useScrollAnimation } from '@/utils/animations';

interface VolunteerItem {
  id: string;
  organization: string;
  role: string;
  description: string;
  logo: string;
}

const volunteerItems: VolunteerItem[] = [
  {
    id: "food-bank",
    organization: "Montgomery County Food Bank",
    role: "Sorting and Packaging Volunteer",
    description: "Assisted in sorting and packaging food donations to support local families in need. Contributed to community food security initiatives.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHsNZMaP4Pi2g/company-logo_400_400/B56ZT2h7XXHoAg-/0/1739302877138?e=1748476800&v=beta&t=IaprqUWpYc4gK4nzE4CFOza2BS4H8JuLbADxGfEy-ZE"
  },
  {
    id: "interact",
    organization: "Interact: Rotary Sponsored Club",
    role: "Student Volunteer",
    description: "Participated in various community service projects as part of Rotary International's youth initiative. Focused on local and international service projects.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHTvOAgweI0sQ/company-logo_400_400/company-logo_400_400/0/1631355208173?e=1748476800&v=beta&t=iRw7H8Z5q3U15rYBchfNPT5LYNNPv6cAxacXpTjplwc"
  },
  {
    id: "harvey",
    organization: "Hurricane Harvey Relief",
    role: "Volunteer at ExxonMobil",
    description: "Contributed to Hurricane Harvey relief efforts through ExxonMobil, helping affected communities recover from the natural disaster.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE_IRWZ2qVHpw/company-logo_400_400/company-logo_400_400/0/1631303598129?e=1748476800&v=beta&t=zZL_szFMmq38gj5m2J92NgFBFKN7Olf95ZlIGPRjhOs"
  }
];

const Volunteering = () => {
  useScrollAnimation();

  return (
    <section id="community" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="scroll-trigger">
          <h2 className="section-title">Community Involvement</h2>
          <p className="section-subtitle">
            Connecting with communities through volunteer work and service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {volunteerItems.map((item, index) => (
            <div 
              key={item.id}
              className="glass-card rounded-xl p-6 scroll-trigger"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src={item.logo} 
                    alt={`${item.organization} logo`} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold">{item.organization}</h3>
              </div>
              
              <h4 className="text-primary font-medium mb-3">{item.role}</h4>
              
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-8 max-w-3xl mx-auto scroll-trigger">
          <h3 className="text-xl font-semibold mb-4 text-center">Leadership & Community Impact</h3>
          
          <p className="text-muted-foreground mb-4">
            My passion for community service extends beyond individual volunteering efforts. 
            As the incoming President of Theta Tau, I'm committed to fostering a culture of 
            service and professional development among peers.
          </p>
          
          <p className="text-muted-foreground">
            I believe in the power of technology to create positive social impact, and I'm 
            dedicated to bridging communities through both my technical expertise and 
            leadership roles. My involvement in various volunteer organizations has shaped 
            my perspective on collaborative problem-solving and community-oriented approaches 
            to challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
