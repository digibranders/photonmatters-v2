import { AlertTriangle, X } from "lucide-react";

export function Problems() {
  const problems = [
    "Your legacy core can't keep up. Every new product takes months to launch.",
    "Half your applicants drop off before approval. Revenue walks out the door.",
    "You're blind to portfolio risk until it's too late. NPAs spike. Recovery is reactive.",
    "Fixed EMIs, rigid terms, zero flexibility. Your borrowers want more. Your system can't deliver.",
    "Multi-country compliance is a manual nightmare. Audit trails break. Regulators ask questions.",
    "Borrowers toggle between apps, agents, and portals. The experience is fragmented.",
    "Collections workflows haven't evolved in a decade. Recovery rates suffer. Customer trust erodes."
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-eterna-2/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-eterna-3 mb-6 leading-[1.2]">
              You know these problems. We built the solution.
            </h2>
          </div>

          {/* Problems Grid - Bento style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200 rounded-3xl p-8 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/50 transition-all duration-300"
              >
                {/* Stripe accent */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-red-400/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <X className="h-5 w-5 text-red-600" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-eterna-3/80 leading-relaxed pt-1.5">
                    {problem}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}