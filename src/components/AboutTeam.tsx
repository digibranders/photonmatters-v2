import { Award, Target, Heart, Zap, Users, TrendingUp } from "lucide-react";
import { Card } from "./ui/design-system";

export function AboutTeam() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class solutions"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering AI-driven lending technology"
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Creating financial inclusion at scale"
    },
  ];

  const achievements = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Financial Institutions" },
    { value: "$2B+", label: "Loans Processed" },
    { value: "20+", label: "Countries" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-eterna-3/10 rounded-full border border-eterna-3/20 mb-6">
              <Users className="h-4 w-4 text-eterna-3" />
              <span className="text-sm font-semibold text-eterna-3">About PhotonMatters</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-eterna-3 mb-6">
              Our experienced, trained, and visionary team
            </h2>
            
            <p className="text-xl text-eterna-3/70 leading-relaxed mb-8">
              PhotonMatters powers fast, intelligent, and scalable lending for the digital economy. We empower financial institutions to scale fearlessly, innovate at speed, and deliver human-centered credit experiences that transform lives.
            </p>

            <p className="text-lg text-eterna-3/70 leading-relaxed mb-10">
              Founded by fintech veterans and AI experts, our team combines deep domain expertise with cutting-edge technology to solve the industry's most complex challenges.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-eterna-3/10 flex items-center justify-center flex-shrink-0 group-hover:bg-eterna-3 transition-colors">
                    <value.icon className="h-6 w-6 text-eterna-3 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-eterna-3 text-lg mb-1">{value.title}</h4>
                    <p className="text-eterna-3/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Stats */}
          <div className="relative">
            {/* Main Image Card */}
            <Card className="overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzM5MzIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="PhotonMatters Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eterna-3/60 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-eterna-3 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-eterna-3">98%</p>
                      <p className="text-xs text-eterna-3/70 font-medium">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {achievements.map((achievement, index) => (
                <Card key={index} hover className="text-center p-6">
                  <p className="text-3xl md:text-4xl font-bold text-eterna-3 mb-2">
                    {achievement.value}
                  </p>
                  <p className="text-sm text-eterna-3/70 font-medium">
                    {achievement.label}
                  </p>
                </Card>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-eterna-3/5 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-20 bg-gradient-to-r from-eterna-3 to-eterna-5 rounded-3xl p-10 md:p-12 shadow-2xl shadow-eterna-3/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">Ready to transform your lending?</h3>
              <p className="text-white/90 text-lg">Let's discuss how PhotonMatters can help you scale</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-eterna-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg whitespace-nowrap">
                Meet Our Team
              </button>
              <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all whitespace-nowrap">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
