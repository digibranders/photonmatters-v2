import { TrendingUp, TrendingDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Stats() {
  const stats = [
    { label: "Processing time reduction", value: "85%", suffix: "faster", trend: "up", color: "text-green-500" },
    { label: "Operational cost savings", value: "60%", suffix: "reduction", trend: "down", color: "text-blue-500" },
    { label: "Approval rate increase", value: "3x", suffix: "improvement", trend: "up", color: "text-purple-500" },
    { label: "Customer satisfaction", value: "98%", suffix: "NPS score", trend: "up", color: "text-orange-500" },
  ];

  return (
    <section className="relative py-40 bg-eterna-3 overflow-hidden">
      {/* Sophisticated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-eterna-2/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-eterna-5/5 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-28">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold text-white mb-8 tracking-[-0.03em] leading-[1.1]">
              Proven results at scale
            </h2>
            <p className="text-2xl text-white/50 leading-relaxed">
              See the measurable impact our customers achieve
            </p>
          </div>
        </ScrollReveal>

        {/* Premium stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative text-center">
                {/* Value - Massive and bold */}
                <div className="text-[clamp(4rem,8vw,7rem)] font-bold text-white mb-4 tracking-tight leading-none tabular-nums">
                  {stat.value}
                </div>

                {/* Suffix with icon */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-white/40" strokeWidth={2} />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-white/40" strokeWidth={2} />
                  )}
                  <span className="text-sm text-white/40 uppercase tracking-[0.15em] font-semibold">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="text-white/60 leading-relaxed text-[17px] max-w-[200px] mx-auto">
                  {stat.label}
                </div>

                {/* Subtle separator line */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-32 bg-white/10 -translate-y-1/2"></div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust line */}
        <ScrollReveal delay={400}>
          <div className="mt-20 pt-12 border-t border-white/10 text-center">
            <p className="text-white/40 text-[15px]">
              Based on average results from 50+ financial institutions
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}