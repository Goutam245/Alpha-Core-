import { Palette, Code, Smartphone, Rocket, Fingerprint, Zap } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces that users love and businesses profit from',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Lightning-fast, scalable websites built with modern tech',
    features: ['React/Next.js', 'Node.js', 'Cloud Infrastructure', 'API Development'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native iOS/Android apps that delight millions',
    features: ['React Native', 'Flutter', 'App Store Optimization', 'Push Notifications'],
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps from concept to launch',
    features: ['Market Research', 'Competitor Analysis', 'Growth Strategy', 'KPI Tracking'],
  },
  {
    icon: Fingerprint,
    title: 'Brand Identity',
    description: 'Memorable brands that stand out in crowded markets',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Speed + SEO that drives organic growth',
    features: ['Core Web Vitals', 'SEO Optimization', 'Analytics', 'A/B Testing'],
  },
];

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-section-mobile md:text-section font-heading font-bold text-foreground mb-4">
            Full-Spectrum Digital Excellence
          </h2>
          <p className="text-muted-foreground text-body-large">
            End-to-end solutions tailored to your unique business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service group ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
