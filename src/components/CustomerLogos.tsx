export function CustomerLogos() {
  // Mock customer logos - in production these would be actual logo images
  const customers = [
    "First National Bank",
    "Digital Finance Corp",
    "Metro Credit Union",
    "Pacific Trust",
    "Alliance Capital",
    "Summit Lending",
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-slate-200/60">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em]">
            Trusted by 50+ leading institutions
          </p>
        </div>

        {/* Logo grid with better visual treatment */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="text-center px-6 py-3 rounded-lg transition-all duration-300 group-hover:bg-slate-50">
                <div className="text-base font-bold text-slate-400 group-hover:text-eterna-3 transition-colors tracking-tight">
                  {customer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}