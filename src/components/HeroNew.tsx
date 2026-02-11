import { ArrowRight, TrendingUp, Users, Award, Sparkles } from "lucide-react";
import { CTAButton, Badge } from "./ui/design-system";

export function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-eterna-3">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzM5MzIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Business Cityscape"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-eterna-3 via-eterna-3/95 to-eterna-3/90"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Top Badges */}
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
              <Badge variant="glass">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered
              </Badge>
              <Badge variant="glass">
                <Award className="h-4 w-4 mr-2" />
                Industry Leading
              </Badge>
              <Badge variant="glass">
                <TrendingUp className="h-4 w-4 mr-2" />
                Fast Growing
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Give your business the lending platform it{" "}
              <span className="text-white/80 italic">deserves</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              PhotonMatters delivers intelligent, scalable lending infrastructure that transforms how financial institutions serve their customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <CTAButton variant="white" size="lg" icon={ArrowRight}>
                Get Started
              </CTAButton>
              <CTAButton variant="ghost" size="lg" className="text-white border border-white/30 hover:bg-white/10">
                View Demo
              </CTAButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  ].map((src, i) => (
                    <div key={i} className="w-11 h-11 rounded-full border-3 border-eterna-3 overflow-hidden ring-2 ring-eterna-3">
                      <img src={src} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <p className="text-lg font-bold">2,500+ Users</p>
                  <p className="text-sm text-white/70">Trusted by industry leaders</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-white">
                <div>
                  <p className="text-3xl font-bold">99.9%</p>
                  <p className="text-sm text-white/70">Uptime</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <p className="text-3xl font-bold">$2B+</p>
                  <p className="text-sm text-white/70">Processed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 transform lg:translate-y-8">
              {/* Main Feature Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGFzaGJvYXJkJTIwZGF0YSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzA3OTMwODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Lending Platform Dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-semibold text-eterna-3">Live Platform</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-eterna-3 mb-2">
                        Complete Lending Suite
                      </h3>
                      <p className="text-eterna-3/70 leading-relaxed">
                        End-to-end platform with AI-powered decisioning, automated workflows, and real-time analytics.
                      </p>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 rounded-full bg-eterna-3/5 text-eterna-3 text-xs font-medium border border-eterna-3/10">
                      AI Credit Scoring
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-eterna-3/5 text-eterna-3 text-xs font-medium border border-eterna-3/10">
                      Automated KYC
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-eterna-3/5 text-eterna-3 text-xs font-medium border border-eterna-3/10">
                      Risk Management
                    </span>
                  </div>

                  {/* CTA */}
                  <CTAButton variant="primary" size="md" icon={ArrowRight} className="w-full">
                    Explore Platform
                  </CTAButton>
                </div>
              </div>

              {/* Small Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 z-20 bg-white rounded-2xl p-6 shadow-xl shadow-black/10 border border-slate-100 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-eterna-3">98%</p>
                  </div>
                </div>
                <p className="text-sm text-eterna-3/70 font-medium">Approval Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
