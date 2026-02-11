import { Quote, Star, ArrowRight } from "lucide-react";
import { Card, SectionHeader } from "./ui/design-system";

export function TestimonialsNew() {
  const testimonials = [
    {
      quote: "We went from idea to live product in five weeks. The platform adapted to our model without custom dev work. Their team actually understood lending.",
      author: "Head of Digital Lending",
      role: "Regional Fintech",
      company: "UAE",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      metric: "5 weeks to launch"
    },
    {
      quote: "We're running B2B, B2C, and supply chain products on one platform. The flexibility is unmatched. Support is fast when we need it.",
      author: "Chief Technology Officer",
      role: "Digital Banking Platform",
      company: "India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      metric: "Multi-product scale"
    },
    {
      quote: "Growth was aggressive. The platform kept up. When we needed changes for new products, turnaround was measured in days, not sprints.",
      author: "VP of Product",
      role: "Commercial Lender",
      company: "Africa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      metric: "Days, not months"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="they say"
          subtitle="Hear from financial institutions using PhotonMatters to transform their lending"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              hover
              className="group relative"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="h-24 w-24 text-eterna-3" />
              </div>

              <div className="p-8 relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-eterna-3 leading-relaxed mb-6 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-eterna-3">{testimonial.author}</p>
                    <p className="text-sm text-eterna-3/70">{testimonial.role}</p>
                    <p className="text-xs text-eterna-3/50 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-eterna-3/5 rounded-full border border-eterna-3/10">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-semibold text-eterna-3">{testimonial.metric}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Featured Testimonial */}
        <Card className="overflow-hidden bg-gradient-to-br from-eterna-3 to-eterna-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium">
                "In just 6 months, we processed over $500M in loans with zero downtime. PhotonMatters is the backbone of our digital lending strategy."
              </blockquote>

              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
                  alt="James Wilson"
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-white/20"
                />
                <div>
                  <p className="font-bold text-white text-lg">James Wilson</p>
                  <p className="text-white/80">CEO, NextGen Financial</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white font-semibold">$500M+ Processed</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white font-semibold">99.9% Uptime</span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-square lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTczOTMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Success Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-eterna-3/50"></div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-eterna-3/70 mb-6">
            Join 50+ financial institutions transforming their lending operations
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-eterna-amber text-eterna-3 rounded-2xl font-semibold hover:bg-eterna-yellow transition-all hover:-translate-y-0.5 shadow-lg shadow-eterna-amber/20 hover:shadow-xl hover:shadow-eterna-amber/30 group">
            Read More Success Stories
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}