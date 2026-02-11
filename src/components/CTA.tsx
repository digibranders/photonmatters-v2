import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-40 bg-gradient-to-br from-eterna-3 via-eterna-gradient-end to-eterna-3 overflow-hidden">
      {/* Sophisticated gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-eterna-2/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-eterna-1/10 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.15]">
              Ready to move faster?
              <br />
              <span className="text-white/80">
                Let's talk.
              </span>
            </h2>
            
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              See what Photon Matters can do for your lending business
            </p>
            
            {/* Premium CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <button className="group px-8 py-4 bg-eterna-amber text-eterna-3 rounded-2xl font-semibold hover:bg-eterna-yellow transition-all flex items-center gap-3 shadow-2xl shadow-eterna-amber/30 hover:shadow-eterna-yellow/40 hover:-translate-y-0.5">
                <span>Book a demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all backdrop-blur-md border border-white/10">
                Talk to sales
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Operating across India, UAE, USA, and Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <span>58+ institutions launched</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}