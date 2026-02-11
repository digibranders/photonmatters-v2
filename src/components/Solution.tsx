import { ArrowRight, CheckCircle2, Zap, Shield, Layers } from "lucide-react";
import { Button } from "./ui/button";
import iphoneMockup from "figma:asset/a16d402caad4aa2e925379c855d7bbbfb9dba658.png";

export function Solution() {
  return (
    <section className="py-24 bg-white overflow-x-visible overflow-y-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Dark Container - overflow-visible so phone can animate out on hover; explicit corners */}
        <div className="relative rounded-tl-[3rem] rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-[3rem] bg-gradient-to-br from-eterna-3 via-eterna-gradient-end to-eterna-3 min-h-[600px] flex flex-col lg:flex-row items-center overflow-visible shadow-2xl shadow-eterna-3/20">
            
            {/* Background Gradients - clip to container corners */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-tl-[3rem] rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-[3rem]">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-eterna-2/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-eterna-1/10 rounded-full blur-[80px]" />
            </div>

            {/* Text Content - Left */}
            <div className="w-full lg:w-1/2 p-10 md:p-20 relative z-10">

                
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 font-sans leading-[1.15]">
                  One platform. Infinite lending models.
                </h2>
                
                <p className="text-base text-white/60 mb-10 leading-relaxed max-w-md">
                    Stop stitching together legacy systems. Launch new products in weeks with unified infrastructure that actually scales.
                </p>

                <button className="bg-eterna-amber hover:bg-eterna-yellow text-eterna-3 rounded-2xl px-8 py-4 text-base font-semibold shadow-lg shadow-eterna-amber/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3">
                    Talk to us <ArrowRight className="h-5 w-5" />
                </button>
            </div>

            {/* Visual Composition - Right - extra right padding so phone sits inside container by default */}
            <div className="group w-full lg:w-1/2 h-full relative flex justify-center items-center min-h-[400px] lg:min-h-full pl-10 pr-14 md:pr-16 pt-10 pb-10 overflow-visible">
                <div className="relative w-full max-w-[420px] aspect-square overflow-visible">
                    
                    {/* Floating Card: Analytics (Back Left) */}
                    <div className="absolute top-[10%] left-[-5%] w-48 h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 transform -rotate-6 z-10 animate-pulse-slow hidden md:block">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span className="text-xs text-white/60">Approval Rate</span>
                        </div>
                        <div className="text-2xl font-bold text-white">85.4%</div>
                        <div className="w-full h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-green-400" />
                        </div>
                    </div>

                    {/* Floating Card: Security (Back Right) */}
                    <div className="absolute bottom-[20%] right-[-5%] w-48 h-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 transform rotate-3 z-10 hidden md:block">
                         <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-eterna-2/20 rounded-lg">
                                <Shield className="w-4 h-4 text-eterna-2" />
                            </div>
                            <div className="text-xs text-white/80">
                                Risk Assessment<br/>
                                <span className="text-green-400 font-bold">Passed</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Visual: Phone (Center) - inside container by default; comes out on hover */}
                    <div className="absolute inset-0 flex justify-center items-center z-20 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[-20px] group-hover:scale-110 group-hover:drop-shadow-[0_32px_48px_rgba(0,0,0,0.35)]">
                         <img 
                            src={iphoneMockup} 
                            alt="SME-Corporate Loans Interface" 
                            className="w-[240px] md:w-[280px] drop-shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        />
                    </div>

                    {/* Glow Effect behind phone */}
                    <div className="absolute inset-0 bg-gradient-to-t from-eterna-2/40 to-transparent blur-[60px] opacity-60 z-0 rounded-full transform translate-y-10" />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}

function FeatureRow({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-eterna-2" />
            <span className="text-white/80 font-medium">{text}</span>
        </div>
    )
}