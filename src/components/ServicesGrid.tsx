import { FileText, Layout, PieChart, Wallet, Megaphone, Smartphone, ArrowRight } from "lucide-react";
import { Card, SectionHeader } from "./ui/design-system";

export function ServicesGrid() {
  const services = [
    {
      icon: FileText,
      title: "Loan Origination System",
      description: "AI-powered loan origination with automated document processing, instant credit decisions, and seamless customer onboarding.",
      color: "from-blue-500 to-indigo-600",
      stats: "80% faster processing"
    },
    {
      icon: Layout,
      title: "Loan Management",
      description: "Complete lifecycle management from disbursement to closure with automated servicing, payment tracking, and portfolio analytics.",
      color: "from-purple-500 to-pink-600",
      stats: "Full automation"
    },
    {
      icon: PieChart,
      title: "Credit Scoring Engine",
      description: "Advanced AI/ML models for accurate risk assessment using traditional and alternative data sources with real-time decisioning.",
      color: "from-green-500 to-emerald-600",
      stats: "99.5% accuracy"
    },
    {
      icon: Wallet,
      title: "Collections & Recovery",
      description: "Intelligent collections platform with predictive analytics, automated workflows, and multi-channel customer engagement.",
      color: "from-orange-500 to-red-600",
      stats: "35% better recovery"
    },
    {
      icon: Megaphone,
      title: "Campaign Management",
      description: "Data-driven lending campaigns with customer segmentation, personalized offers, and performance tracking across channels.",
      color: "from-cyan-500 to-blue-600",
      stats: "3x conversion rate"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Native mobile apps and responsive interfaces for borrowers and loan officers with offline capabilities and real-time sync.",
      color: "from-violet-500 to-purple-600",
      stats: "90+ NPS score"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="lending services"
          subtitle="Comprehensive AI-powered solutions for modern financial institutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              hover 
              className="group overflow-hidden"
            >
              <div className="p-8">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-eterna-3" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 bg-eterna-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {service.stats}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-eterna-3 mb-3 group-hover:text-eterna-5 transition-colors">
                  {service.title}
                </h3>
                <p className="text-eterna-3/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button className="inline-flex items-center gap-2 text-eterna-3 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Decorative gradient bar at bottom */}
              <div className={`h-1 w-full bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-eterna-3/70 mb-6">
            Need a custom solution? We build tailored platforms for your unique requirements.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-eterna-3 text-white rounded-full font-semibold hover:bg-eterna-3/90 transition-all hover:-translate-y-1 shadow-lg shadow-eterna-3/20 hover:shadow-xl hover:shadow-eterna-3/30">
            Talk to Our Experts
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
