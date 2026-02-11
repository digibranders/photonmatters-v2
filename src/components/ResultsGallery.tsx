import { TrendingUp, Users, DollarSign, Zap, Award, Target } from "lucide-react";
import { Card, SectionHeader, StatsItem } from "./ui/design-system";

export function ResultsGallery() {
  const results = [
    {
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHRlYW18ZW58MXx8fHwxNzM5MzIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "85% Faster Loan Processing",
      subtitle: "Commercial Bank",
      description: "Reduced loan approval time from 7 days to 1 day with automated decisioning",
      metric: "85%",
      metricLabel: "Faster"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTczOTMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "$500M Portfolio Scaled",
      subtitle: "Fintech Lender",
      description: "Scaled lending portfolio 5x in 18 months with zero additional operational staff",
      metric: "5x",
      metricLabel: "Growth"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaW50ZWNoJTIwZGFzaGJvYXJkfGVufDF8fHx8MTczOTMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "40% Lower NPL Rate",
      subtitle: "Microfinance Institution",
      description: "Improved credit quality with AI-powered risk models and alternative data",
      metric: "40%",
      metricLabel: "Reduction"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3MzkzMjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "10M+ Loans Disbursed",
      subtitle: "Digital Lender",
      description: "Processed over 10 million micro-loans with 99.9% platform uptime",
      metric: "10M+",
      metricLabel: "Loans"
    },
  ];

  const stats = [
    { icon: DollarSign, value: "$2B+", label: "Total Loans Processed" },
    { icon: Users, value: "50+", label: "Financial Institutions" },
    { icon: TrendingUp, value: "99.9%", label: "Platform Uptime" },
    { icon: Zap, value: "<2s", label: "Average Decision Time" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="lending results"
          subtitle="Real outcomes from financial institutions transforming their lending operations"
        />

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {results.map((result, index) => (
            <Card key={index} hover className="group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eterna-3 via-eterna-3/60 to-transparent opacity-90"></div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-3xl font-bold text-eterna-3">{result.metric}</p>
                  <p className="text-xs text-eterna-3/70 font-semibold uppercase">{result.metricLabel}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-5 w-5 text-eterna-3" />
                  <span className="text-sm font-semibold text-eterna-3/70 uppercase tracking-wide">
                    {result.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-eterna-3 mb-3 group-hover:text-eterna-5 transition-colors">
                  {result.title}
                </h3>
                <p className="text-eterna-3/70 leading-relaxed">
                  {result.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          {/* Background Card */}
          <div className="bg-gradient-to-br from-eterna-3 to-eterna-5 rounded-3xl p-12 md:p-16 shadow-2xl shadow-eterna-3/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 border border-white/20">
                    <stat.icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-base text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-eterna-3/80 mb-6 max-w-2xl mx-auto">
            Join leading financial institutions that are transforming lending with PhotonMatters
          </p>
          <button className="inline-flex items-center gap-2 text-eterna-3 font-semibold text-lg hover:gap-4 transition-all group">
            View All Case Studies
            <div className="w-10 h-10 rounded-full bg-eterna-3 text-white flex items-center justify-center group-hover:bg-eterna-5 transition-colors">
              <Target className="h-5 w-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
