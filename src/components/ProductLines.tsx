import { Button } from "./ui/button";
import { ArrowRight, Smartphone, ShoppingBag, Building2 } from "lucide-react";

export function ProductLines() {
  // Bento Grid Style - Light
  return (
    <section className="py-32 bg-eterna-3/[0.02]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-eterna-3 mb-6 font-sans leading-[1.2]">
            Any lending product. One platform.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Micro Lending */}
          <div className="p-10 rounded-[2.5rem] bg-white border border-eterna-1/10 shadow-xl shadow-eterna-3/5 flex flex-col justify-between h-full min-h-[400px] relative overflow-hidden group">
            <div className="relative z-10">
               <div className="flex items-center justify-start mb-6">
                <Smartphone className="h-10 w-10 text-eterna-1" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-eterna-3 mb-3 font-sans">Micro-lending</h3>
              <p className="text-eterna-3/60 leading-relaxed max-w-md">
                Fast, flexible small-ticket loans for underserved markets. Built for speed, designed for inclusion.
              </p>
            </div>
            
            {/* Visual Abstract */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-eterna-1/20 to-eterna-1/5 rounded-tl-[4rem] -mb-10 -mr-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 mt-8">
               <Button variant="link" className="p-0 text-eterna-1 font-semibold hover:no-underline group-hover:translate-x-2 transition-transform">
                 Learn more <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
            </div>
          </div>

          {/* Card 2: Consumer & Retail */}
          <div className="p-10 rounded-[2.5rem] bg-white border border-eterna-amber/10 shadow-xl shadow-eterna-3/5 flex flex-col justify-between h-full min-h-[400px] relative overflow-hidden group">
             <div className="relative z-10">
               <div className="flex items-center justify-start mb-6">
                <ShoppingBag className="h-10 w-10 text-eterna-amber" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-eterna-3 mb-3 font-sans">Consumer & Retail</h3>
              <p className="text-eterna-3/60 leading-relaxed max-w-md">
                Personal loans, BNPL, lines of credit—delivered instantly with borrower experiences that convert.
              </p>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-eterna-amber/20 to-eterna-amber/5 rounded-tl-[4rem] -mb-10 -mr-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
             <div className="relative z-10 mt-8">
               <Button variant="link" className="p-0 text-eterna-amber font-semibold hover:no-underline group-hover:translate-x-2 transition-transform">
                 Learn more <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
            </div>
          </div>

          {/* Card 3: Commercial */}
          <div className="p-10 rounded-[2.5rem] bg-white border border-eterna-4/10 shadow-xl shadow-eterna-3/5 flex flex-col justify-between h-full min-h-[400px] relative overflow-hidden group">
             <div className="relative z-10">
               <div className="flex items-center justify-start mb-6">
                <Building2 className="h-10 w-10 text-eterna-4" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-eterna-3 mb-3 font-sans">Commercial Lending</h3>
              <p className="text-eterna-3/60 leading-relaxed max-w-md">
                From startups to enterprises—configurable term loans, working capital, and equipment finance that grows with your portfolio.
              </p>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-eterna-4/20 to-eterna-4/5 rounded-tl-[4rem] -mb-10 -mr-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
             <div className="relative z-10 mt-8">
               <Button variant="link" className="p-0 text-eterna-4 font-semibold hover:no-underline group-hover:translate-x-2 transition-transform">
                 Learn more <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
            </div>
          </div>

          {/* Card 4: Supply Chain Finance */}
          <div className="p-10 rounded-[2.5rem] bg-white border border-eterna-5/10 shadow-xl shadow-eterna-3/5 flex flex-col justify-between h-full min-h-[400px] relative overflow-hidden group">
             <div className="relative z-10">
               <div className="flex items-center justify-start mb-6">
                <ArrowRight className="h-10 w-10 text-eterna-5 rotate-180" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-eterna-3 mb-3 font-sans">Supply Chain Finance</h3>
              <p className="text-eterna-3/60 leading-relaxed max-w-md">
                Multi-party workflows, deep-tier visibility, and real-time capital flows for complex supply chains.
              </p>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-eterna-5/20 to-eterna-5/5 rounded-tl-[4rem] -mb-10 -mr-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
             <div className="relative z-10 mt-8">
               <Button variant="link" className="p-0 text-eterna-5 font-semibold hover:no-underline group-hover:translate-x-2 transition-transform">
                 Learn more <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}