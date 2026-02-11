import { ArrowRight, Sparkles, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import mobileDashboard from "@/assets/a16d402caad4aa2e925379c855d7bbbfb9dba658.png";
import desktopDashboard from "@/assets/07b254bc6d6217c6a0ac336ebc3da1a0fc6426b7.png";
import heroBgVideo from "@/assets/photonmatters-hero-bg.mp4";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-eterna-3 overflow-hidden">
      {/* Sophisticated background with subtle movement */}
      <div className="absolute inset-0">
        {/* Full-bleed video background - infinite loop */}
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        {/* Solid purple overlay over video - inline style to ensure it applies */}
        {/* <div
          className="absolute inset-0 z-[1] w-full h-full"
          style={{ backgroundColor: 'rgba(78, 75, 203, 0.5)' }}
          aria-hidden
        /> */}
        {/* Layered gradients - behind overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-eterna-4/10 via-transparent to-transparent"></div>
        
        {/* Ambient orbs - behind overlay */}
        <div className="absolute top-0 right-1/4 z-0 w-[1000px] h-[1000px] bg-eterna-2/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute -bottom-32 left-1/3 z-0 w-[800px] h-[800px] bg-eterna-1/5 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Refined grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            {/* Left: Content - More breathing room */}
            <div className="lg:col-span-7 xl:col-span-6">
              {/* Hero headline - Industry standard sizing */}
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-8 leading-[1.1] tracking-[-0.02em]">
                Launch lending products in weeks, not quarters.
              </h1>

              {/* Refined description with better line-height */}
              <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] text-white/60 mb-6 max-w-xl leading-[1.6]">
                The only platform you need for B2B, B2C, and embedded credit at scale.
              </p>

              

              {/* Premium CTAs with better hierarchy */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-eterna-amber text-eterna-3 rounded-2xl text-base font-semibold hover:bg-eterna-yellow transition-all flex items-center gap-3 shadow-2xl shadow-eterna-amber/30 hover:shadow-eterna-yellow/40 hover:-translate-y-1">
                  <span>See the platform</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 bg-transparent text-white rounded-2xl text-base font-semibold hover:bg-white/5 transition-all backdrop-blur-sm border border-white/10 hover:border-white/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                    <Play className="h-4 w-4 fill-white text-white ml-0.5" />
                  </div>
                  <span>Watch demo</span>
                </button>
              </div>
            </div>

            {/* Right: Premium Dashboard with better composition */}
            <div className="lg:col-span-5 xl:col-span-6">
              <div className="relative">
                {/* Main dashboard with sophisticated treatment */}
                <div className="relative group mb-16">
                  {/* Multi-layer glow for depth */}
                  <div className="absolute -inset-12 bg-gradient-to-r from-eterna-2/20 via-eterna-5/10 to-eterna-2/20 blur-[80px] opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="absolute -inset-8 bg-eterna-5/20 blur-[60px] opacity-40"></div>
                  
                  {/* Dashboard container with refined border */}
                  <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-2 group-hover:border-white/30 transition-all duration-500">
                    <div className="rounded-2xl overflow-hidden">
                      {/* Using actual Photon Matters Dashboard */}
                      <ImageWithFallback
                        src={desktopDashboard}
                        alt="Photon Matters - Loan Management Dashboard with Real-Time Analytics"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Floating badge - Refined positioning and design */}
                  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                        <div className="text-white font-bold text-lg">98</div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="text-white text-[10px] font-bold">%</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Accuracy</div>
                        <div className="text-base font-bold text-eterna-3">Credit Scoring</div>
                      </div>
                    </div>
                  </div>

                  {/* Activity indicator - Top right */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl border border-slate-100 px-5 py-4 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2.5">
                        {[
                          "from-blue-400 to-blue-600",
                          "from-purple-400 to-purple-600",
                          "from-pink-400 to-pink-600"
                        ].map((gradient, i) => (
                          <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${gradient} border-2 border-white shadow-sm`}></div>
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-eterna-3">+2,847</div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wide font-medium">Today</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Dashboard - Floating on the right */}
                  <div className="hidden xl:block absolute -right-32 bottom-12 w-[280px] transform hover:scale-105 transition-transform duration-300">
                    {/* Glow effect for mobile */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-eterna-1/20 via-eterna-4/20 to-eterna-2/20 blur-[40px] opacity-60"></div>
                    
                    {/* Mobile device container */}
                    <div className="relative">
                      
                    </div>
                  </div>
                </div>

                {/* Refined metrics - Evenly spread below dashboard */}
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "$2.1B+", label: "Loans Processed" },
                    { value: "58", label: "Institutions" },
                    { value: "99.9%", label: "Uptime SLA" },
                    { value: "<1.8s", label: "Avg Decision" }
                  ].map((stat, i) => (
                    <div key={i} className="relative text-center">
                      <div className="text-[2.75rem] font-bold text-white mb-1.5 tracking-tight leading-none">
                        {stat.value}
                      </div>
                      <div className="text-[13px] text-white/40 uppercase tracking-[0.1em] font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}