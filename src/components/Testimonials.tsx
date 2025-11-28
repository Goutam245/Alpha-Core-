import { Star, Quote } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at TechVista',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    quote: 'Working with Alpha Core Solution transformed our digital presence completely. Their attention to detail and creative problem-solving is unmatched. Our user engagement increased by 240%.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder of FinFlow',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote: "The team delivered beyond expectations. They didn't just build an app—they became our strategic partners, offering insights that shaped our entire product roadmap.",
    rating: 5,
  },
  {
    name: 'Emily Thompson',
    role: 'CMO at Luxe Fashion',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: 'Alpha Core Solution brought our vision to life with stunning execution. The website they built is regularly praised by customers and has won multiple design awards.',
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="testimonials" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-section-mobile md:text-section font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-body-large">
            Don't just take our word for it—hear from the brands we've helped succeed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border group hover:border-primary/30 transition-all duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-accent fill-gold-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
