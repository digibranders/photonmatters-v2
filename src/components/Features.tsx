import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

export function Features() {
  const features = [
    {
      title: "Loan Origination System",
      description: "Go from application to approval in seconds. Configurable workflows, smart decisioning, zero bottlenecks.",
    },
    {
      title: "Loan Management System",
      description: "Complete lifecycle automation—disbursement, servicing, paydowns, and collections—with real-time portfolio visibility.",
    },
    {
      title: "Credit Scoring Engine",
      description: "Build trust with explainable scores. Blend bureau data, alternative signals, and custom models for smarter, fairer decisions.",
    },
    {
      title: "Collections & Recovery",
      description: "Intelligent segmentation and automated workflows that recover faster while keeping customer relationships intact.",
    },
    {
      title: "Campaign Orchestration",
      description: "Target the right borrowers at the right time. Design, launch, and optimize campaigns across every channel.",
    },
    {
      title: "Supply Chain Finance",
      description: "Enable anchor-led, buyer-led, and deep-tier financing with multi-party workflows and instant visibility for all stakeholders.",
    },
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-eterna-3 mb-4 font-sans leading-[1.2]">
            Everything you need to run lending at scale
          </h2>
        </div>

        {/* Features - Clean grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="group relative bg-white border border-slate-200 rounded-3xl p-10 hover:border-eterna-1/30 hover:shadow-xl hover:shadow-eterna-1/10 transition-all duration-300">
                {/* Accent line */}
                <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-eterna-1/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-eterna-3 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-[17px] text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-eterna-1" strokeWidth={2} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}