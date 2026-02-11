import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  const testimonials = [
    {
      quote: "PhotonMatters reduced our loan processing time from 7 days to under 1 day. The platform is incredibly intuitive and our team was productive immediately.",
      author: "Sarah Chen",
      role: "Chief Digital Officer",
      company: "First National Bank",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDcyNzI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      quote: "The AI credit scoring has been transformative. We've improved our approval accuracy while reducing defaults by 40%. Best decision we made.",
      author: "Michael Rodriguez",
      role: "Head of Risk",
      company: "Digital Finance Corp",
      image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA3OTQ3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-4xl mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-eterna-3 mb-6 tracking-tight leading-[1.2]">
              Trusted by industry leaders
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              See what our customers have to say
            </p>
          </div>
        </ScrollReveal>

        {/* Premium testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group relative">
                {/* Large decorative quote mark */}
                <div className="absolute -top-8 -left-4 text-[150px] font-extralight text-eterna-3/5 leading-none pointer-events-none">"</div>
                
                <div className="relative rounded-3xl border border-slate-200 hover:border-eterna-3/30 transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-slate-200/50 p-12">
                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-eterna-3 mb-12 leading-relaxed relative z-10">
                    {testimonial.quote}
                  </blockquote>

                  {/* Author info - Minimal design */}
                  <div className="flex items-center gap-5">
                    {/* Headshot - Simple circle */}
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Info */}
                    <div>
                      <div className="font-bold text-lg text-eterna-3 mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-[15px] text-slate-500">
                        {testimonial.role}
                      </div>
                      <div className="text-[13px] text-slate-400 uppercase tracking-wide font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}