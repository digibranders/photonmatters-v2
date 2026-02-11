import { MapPin, ArrowRight, TrendingUp, Building2, DollarSign, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function GlobalPresence() {
  const regions = [
    {
      name: "India",
      city: "Ahmedabad",
      timezone: "IST (UTC+5:30)",
      institutions: 18,
      volume: "$847M",
      growth: "+127%",
      status: "Peak Hours",
      statusColor: "bg-green-400"
    },
    {
      name: "UAE",
      city: "Dubai",
      timezone: "GST (UTC+4)",
      institutions: 12,
      volume: "$421M",
      growth: "+94%",
      status: "Operational",
      statusColor: "bg-blue-400"
    },
    {
      name: "South Africa",
      city: "Johannesburg",
      timezone: "SAST (UTC+2)",
      institutions: 8,
      volume: "$156M",
      growth: "+68%",
      status: "Operational",
      statusColor: "bg-blue-400"
    },
    {
      name: "USA",
      city: "New York",
      timezone: "EST (UTC-5)",
      institutions: 20,
      volume: "$698M",
      growth: "+112%",
      status: "Peak Hours",
      statusColor: "bg-green-400"
    }
  ];

  return (
    <section id="global-presence-section" className="py-32 bg-eterna-3 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-eterna-3 via-eterna-4/50 to-eterna-3 opacity-90" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-[1.2]">
            Global Reach. Local Impact.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Operating 24/7 across four continents with real-time processing and localized compliance
          </p>
        </div>

        {/* Bento Grid - Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
            >
              {/* Status indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${region.statusColor} animate-pulse`}></div>
                  <span className="text-xs text-white/50 font-medium">{region.status}</span>
                </div>
                <Clock className="h-4 w-4 text-white/30" />
              </div>

              {/* Region info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">{region.name}</h3>
                <p className="text-sm text-white/50">{region.city}</p>
                <p className="text-xs text-white/30 mt-1">{region.timezone}</p>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {/* Institutions */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-4 w-4 text-white/60" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{region.institutions}</div>
                    <div className="text-xs text-white/40">Active Institutions</div>
                  </div>
                </div>

                {/* Volume */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <DollarSign className="h-4 w-4 text-white/60" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{region.volume}</div>
                    <div className="text-xs text-white/40">Loans Processed</div>
                  </div>
                </div>

                {/* Growth */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-4 w-4 text-white/60" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-400">{region.growth}</div>
                    <div className="text-xs text-white/40">YoY Growth</div>
                  </div>
                </div>
              </div>

              {/* Hover effect accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Global Summary Bar */}
        
      </div>
    </section>
  );
}