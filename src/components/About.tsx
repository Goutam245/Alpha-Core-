import { Rocket, Zap, Target, Handshake } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge solutions',
  },
  {
    icon: Zap,
    title: 'Speed & Quality',
    description: 'Fast delivery without compromising excellence',
  },
  {
    icon: Target,
    title: 'Result-Driven',
    description: 'Every decision backed by data and user needs',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'Your success is our success',
  },
];

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-primary to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <span className="text-primary font-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-section-mobile md:text-section font-heading font-bold text-foreground mb-6">
              Where Innovation Meets Execution
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Alpha Core Solution is a cutting-edge digital studio where creativity and technology converge. We don't just build websites and apps—we craft digital experiences that captivate, convert, and leave lasting impressions.
              </p>
              <p>
                Our team of designers, developers, and strategists combines years of expertise with an obsession for detail. Every project is treated as our portfolio piece, ensuring nothing less than exceptional quality.
              </p>
              <p>
                From startups to enterprise brands, we've helped businesses across 15+ countries achieve their digital ambitions. Your vision deserves world-class execution—let's make it happen together.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className={`grid grid-cols-2 gap-6 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-service group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
