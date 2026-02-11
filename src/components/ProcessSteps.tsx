import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "./ui/design-system";

export function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your lending workflows, pain points, and growth objectives to design the perfect solution.",
      details: ["Requirements gathering", "Process mapping", "Technical assessment"],
    },
    {
      number: "02",
      title: "Platform Configuration",
      description: "Custom configuration of our AI-powered platform to match your unique business rules and credit policies.",
      details: ["Workflow design", "Rule engine setup", "Integration planning"],
    },
    {
      number: "03",
      title: "Data Migration & Integration",
      description: "Seamless migration of existing loan data and integration with your core banking and third-party systems.",
      details: ["Data migration", "API integration", "System testing"],
    },
    {
      number: "04",
      title: "Training & Go-Live",
      description: "Comprehensive training for your team followed by a phased rollout to ensure smooth adoption.",
      details: ["User training", "Pilot launch", "Production deployment"],
    },
    {
      number: "05",
      title: "Ongoing Support & Optimization",
      description: "Continuous platform optimization, feature updates, and dedicated support to maximize your ROI.",
      details: ["24/7 support", "Performance monitoring", "Feature enhancements"],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="sticky top-24">
              <Card className="overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMG9mZmljZXxlbnwxfHx8fDE3MzkzMjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="PhotonMatters Implementation Process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eterna-3/40 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-eterna-3">6-12 weeks</p>
                          <p className="text-sm text-eterna-3/70 font-medium">Average Implementation</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-eterna-3/60">
                        <Sparkles className="h-4 w-4" />
                        <span className="font-medium">Faster than traditional systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { value: "100+", label: "Implementations" },
                  { value: "95%", label: "On-time delivery" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-eterna-3">{stat.value}</p>
                    <p className="text-xs text-eterna-3/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-eterna-3 mb-4">
                lending process
              </h2>
              <p className="text-xl text-eterna-3/70 leading-relaxed">
                A proven methodology to get you up and running quickly with minimal disruption
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card 
                  key={index} 
                  hover
                  className="group"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eterna-3 to-eterna-5 flex items-center justify-center shadow-lg shadow-eterna-3/20 group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-eterna-3 mb-3 group-hover:text-eterna-5 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-eterna-3/70 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-eterna-3/80 font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Arrow for larger screens */}
                      <div className="hidden xl:block">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-eterna-3 transition-colors">
                          <ArrowRight className="h-5 w-5 text-eterna-3 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="ml-16 h-8 w-0.5 bg-gradient-to-b from-slate-200 to-transparent"></div>
                  )}
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-eterna-3 to-eterna-5 rounded-2xl shadow-xl shadow-eterna-3/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">Ready to get started?</h4>
                  <p className="text-white/80">Schedule a consultation with our implementation team</p>
                </div>
                <button className="flex-shrink-0 px-8 py-4 bg-white text-eterna-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg flex items-center gap-3">
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
