import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(220 78% 10%) 0%, hsl(220 60% 18%) 40%, hsl(244 50% 25%) 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(189 100% 50% / 0.4) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(244 98% 69% / 0.4) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-10%',
            animationDelay: '3s',
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(189 100% 50%) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(189 100% 50%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Award-Winning Digital Agency</span>
            <Star className="w-4 h-4 text-gold-accent fill-gold-accent" />
          </div>

          {/* Main Headline */}
          <h1 className="text-hero-mobile md:text-hero font-heading font-bold text-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            We Transform Ambitious Ideas Into{' '}
            <span className="text-gradient-cyan">Digital Masterpieces</span>{' '}
            That Drive Real Results
          </h1>

          {/* Subheadline */}
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
            Elite digital agency crafting award-winning experiences for forward-thinking brands worldwide
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="btn-primary">
              Explore Our Work
            </a>
            <a href="#contact" className="btn-secondary">
              Start Your Project
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '1s' }}>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
              Trusted by 50+ global brands
            </span>
            <span className="hidden md:block">•</span>
            <span>98% client satisfaction</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold-accent fill-gold-accent" />
              Featured on Awwwards
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
