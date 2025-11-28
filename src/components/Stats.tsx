import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

const stats = [
  { number: 150, suffix: '+', label: 'Projects Delivered' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
  { number: 50, suffix: '+', label: 'Global Partners' },
  { number: 15, suffix: '+', label: 'Countries Served' },
  { number: 5, suffix: '+', label: 'Years Excellence' },
  { number: 24, suffix: '/7', label: 'Support Available' },
];

const AnimatedCounter = ({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <span className="font-accent text-5xl md:text-6xl font-bold text-gradient-cyan">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${isInView ? 'animate-counter' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter target={stat.number} suffix={stat.suffix} isInView={isInView} />
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
