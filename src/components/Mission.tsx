import { Zap, TrendingUp, ShieldCheck, Layers, AlertCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import dashboardImg from "figma:asset/bb374578f940686c4a956f945253d99db8ee00db.png";

export function Mission() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Mission Header - Merged */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">Why We Exist</h4>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-eterna-3 leading-[1.15] mb-6 font-sans">
            Lending is still too slow, too rigid, too broken.
          </h2>
          <p className="text-lg text-eterna-3/70 leading-relaxed max-w-3xl mx-auto mb-10">
            We're building the infrastructure that lets you move fast, stay flexible, and put borrowers first—without compromise.
          </p>
          
          <div className="flex justify-center">
            <button className="bg-eterna-amber hover:bg-eterna-yellow text-eterna-3 rounded-2xl px-8 py-4 text-base font-semibold shadow-lg shadow-eterna-amber/20 transition-all hover:-translate-y-0.5 flex items-center gap-3">
                See how it works <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slim MacBook Mockup */}
        <div className="flex justify-center mb-24 relative z-10">
           <div className="relative transform transition-transform duration-700 hover:scale-[1.02]">
              {/* Screen Lid */}
              <div className="relative mx-auto bg-[#0d0d0d] rounded-[1.5rem] h-[280px] w-[440px] md:h-[450px] md:w-[720px] shadow-2xl flex items-center justify-center p-[10px] ring-1 ring-white/10">
                  {/* Inner Bezel / Screen Area */}
                  <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden relative">
                       <img 
                        src={dashboardImg} 
                        alt="PhotonMatters Dashboard" 
                        className="w-full h-full object-cover object-top"
                      />
                  </div>
                  {/* Camera Notch */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0d0d0d] rounded-b-lg z-20"></div>
              </div>
              
              {/* Base Body */}
              <div className="relative mx-auto bg-[#1a1a1a] rounded-b-2xl h-[14px] w-[480px] md:h-[20px] md:w-[780px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)] flex justify-center items-start mt-[-2px]">
                   {/* Groove */}
                  <div className="w-24 h-1.5 bg-[#333] rounded-b-md opacity-50"></div>
              </div>
           </div>
        </div>

        {/* 3 Bullet Pointers (Feature Grid) - Moved to Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-20">
          <FeatureItem 
            icon={Zap}
            title="Velocity Denied"
            description="Legacy Silos and Product Paralysis mean missed windows and lost revenue."
          />
          <FeatureItem 
            icon={Clock}
            title="Manual Loops"
            description="Static credit scoring and manual processes create inefficiencies."
          />
          <FeatureItem 
            icon={AlertCircle}
            title="Compliance Chaos"
            description="Rigid product logic leads to maximum burnout and compliance risks."
          />
        </div>

      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, description }: any) {
  return (
    <div className="flex flex-col items-start gap-4 group">
      <div className="flex items-center justify-center transition-colors">
        <Icon className="h-8 w-8 text-eterna-3" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-eterna-3 mb-2">{title}</h3>
        <p className="text-eterna-3/60 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}