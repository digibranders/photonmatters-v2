import { FileText, BarChart3, Cpu, Wallet, Megaphone, Smartphone } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Loan Origination",
      description: "Automated application processing with AI-powered decisioning",
      metric: "<2s",
      metricLabel: "Decision time"
    },
    {
      icon: BarChart3,
      title: "Loan Management",
      description: "Complete lifecycle management from disbursement to closure",
      metric: "100%",
      metricLabel: "Visibility"
    },
    {
      icon: Cpu,
      title: "Credit Scoring",
      description: "Advanced ML models for accurate risk assessment",
      metric: "98%",
      metricLabel: "Accuracy"
    },
    {
      icon: Wallet,
      title: "Collections",
      description: "Intelligent recovery with predictive analytics",
      metric: "40%",
      metricLabel: "Better recovery"
    },
    {
      icon: Megaphone,
      title: "Campaigns",
      description: "Data-driven lending campaigns with segmentation",
      metric: "3x",
      metricLabel: "Conversion"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native experiences for borrowers and loan officers",
      metric: "4.9",
      metricLabel: "App rating"
    },
  ];

  return (
    <section className="relative py-40 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eterna-5/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-4xl mb-28">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold text-eterna-3 mb-8 tracking-[-0.03em] leading-[1.1]">
              Everything you need
              <br />
              in one platform
            </h2>
            <p className="text-2xl text-slate-500 leading-relaxed max-w-2xl">
              A complete lending infrastructure that scales with your business
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={`group relative rounded-3xl border border-slate-200 hover:border-eterna-3/30 transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-eterna-5/0 to-eterna-5/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className={`relative ${index === 0 ? 'p-12' : 'p-10'}`}>
                  {/* Icon - Large, minimal, integrated with title */}
                  <div className="mb-12">
                    <service.icon className="h-16 w-16 text-eterna-3/20 group-hover:text-eterna-3/40 transition-all duration-500 group-hover:scale-110" strokeWidth={1} />
                  </div>
                  
                  {/* Title with integrated number */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className={`font-bold text-eterna-3 leading-none ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>
                        {service.title}
                      </h3>
                      <div className="text-5xl font-bold text-eterna-3/10 leading-none tabular-nums">
                        {service.metric}
                      </div>
                    </div>
                    <div className="text-[11px] text-eterna-3/30 uppercase tracking-[0.15em] font-semibold">
                      {service.metricLabel}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-[17px]">
                    {service.description}
                  </p>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-eterna-3/10 rounded-br-3xl"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}