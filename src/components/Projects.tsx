import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const projects = [
  {
    id: 1,
    title: 'Luxe - E-Commerce Revolution',
    category: 'E-Commerce • UI/UX • Development',
    description: 'Premium fashion marketplace with AI-powered personalization, 3D product visualization, and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'Three.js', 'Stripe'],
    results: ['156% increase in conversions', '2.3M+ monthly visitors', '4.8/5 average rating'],
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'FinFlow - Banking Dashboard',
    category: 'FinTech • Web App • Data Visualization',
    description: 'Next-generation financial management platform with real-time analytics and multi-currency support.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
    results: ['50K+ active users', '$2.5M daily transactions', '99.9% uptime'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 3,
    title: 'MediConnect - Telemedicine',
    category: 'Healthcare • Mobile App • Web',
    description: 'HIPAA-compliant telemedicine platform connecting patients with specialists worldwide.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tech: ['React Native', 'Firebase', 'WebRTC', 'AWS'],
    results: ['10K+ consultations monthly', '4.9★ app rating', '89% retention rate'],
    color: 'from-green-500/20 to-teal-500/20',
  },
  {
    id: 4,
    title: 'Skyline Estates - Real Estate',
    category: 'Real Estate • 3D/VR • Website',
    description: 'Luxury property platform with virtual tours, AI matching, and immersive 3D walkthroughs.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tech: ['Next.js', 'Three.js', 'Mapbox', 'Sanity'],
    results: ['300+ properties', '45% faster sales', 'Award: Best Site 2024'],
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 5,
    title: 'FoodHub - Delivery App',
    category: 'Food Tech • Mobile App • Backend',
    description: 'Lightning-fast food delivery with real-time tracking and gamified loyalty program.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
    results: ['100K+ downloads', '15-min avg delivery', '92% satisfaction'],
    color: 'from-red-500/20 to-rose-500/20',
  },
  {
    id: 6,
    title: 'TaskFlow - Project SaaS',
    category: 'SaaS • Productivity • Dashboard',
    description: 'Intuitive project management with Kanban boards, time tracking, and automated workflows.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tech: ['React', 'Python', 'PostgreSQL', 'Redis'],
    results: ['5K+ teams', '$50K MRR year one', 'ProductHunt #1'],
    color: 'from-violet-500/20 to-purple-500/20',
  },
];

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-section-mobile md:text-section font-heading font-bold text-foreground mb-4">
            Projects That Speak for Themselves
          </h2>
          <p className="text-muted-foreground text-body-large">
            Explore our portfolio of award-winning digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-project group cursor-pointer ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Overlay Content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.results.map((result) => (
                      <p key={result} className="text-xs text-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-success-green" />
                        {result}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            <span>Discuss Your Project</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
