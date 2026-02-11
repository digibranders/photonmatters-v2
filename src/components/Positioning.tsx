export function Positioning() {
  return (
    <section className="py-16 bg-gradient-to-r from-eterna-3 via-eterna-gradient-end to-eterna-3 relative overflow-hidden">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <p className="text-center text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-medium">
          Purpose-built for neo-banks, digital lenders, and platforms embedding credit.
        </p>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}