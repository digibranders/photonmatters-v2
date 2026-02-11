import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, FileText, Cog, TrendingUp, Users, DollarSign, CreditCard, Building2, Smartphone, Package, Zap, Database, BarChart3, MessageSquare, Sparkles, Shield, Clock } from "lucide-react";
import logo from "figma:asset/a9b0b4597a60ecdb1a3540859afebd0c027bdbf5.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center relative z-10">
            <img src={logo} alt="PhotonMatters" className="h-11" />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a 
              href="#home" 
              className={`px-5 py-2.5 text-[13px] font-medium tracking-tight transition-all duration-200 rounded-lg ${
                scrolled 
                  ? "text-eterna-3 hover:text-eterna-4 hover:bg-slate-100/80" 
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              Home
            </a>
            
            {/* Platform Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("platform")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className={`flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-medium tracking-tight transition-all duration-200 rounded-lg ${
                  scrolled 
                    ? "text-eterna-3 hover:text-eterna-4 hover:bg-slate-100/80" 
                    : "text-white hover:text-white/90 hover:bg-white/10"
                } ${activeMenu === "platform" ? (scrolled ? "bg-slate-100/80" : "bg-white/10") : ""}`}
              >
                Platform
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeMenu === "platform" ? "rotate-180" : ""}`} />
              </button>
              
              {/* Mega Menu Dropdown */}
              {activeMenu === "platform" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 p-8 backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Core Systems</div>
                        
                        <a href="#los" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                          <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                            <FileText className="h-5 w-5 text-eterna-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Loan Origination System</div>
                            <div className="text-[13px] text-slate-500 leading-relaxed">Digital loan origination with automated decisioning</div>
                          </div>
                        </a>
                        
                        <a href="#lms" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                          <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                            <Database className="h-5 w-5 text-eterna-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Loan Management System</div>
                            <div className="text-[13px] text-slate-500 leading-relaxed">Comprehensive portfolio and servicing management</div>
                          </div>
                        </a>

                        <a href="#credit-scoring" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                          <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                            <TrendingUp className="h-5 w-5 text-eterna-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Credit Scoring Engine</div>
                            <div className="text-[13px] text-slate-500 leading-relaxed">AI-powered risk assessment and underwriting</div>
                          </div>
                        </a>
                      </div>
                      
                      {/* Right Column */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Management Tools</div>
                        
                        <a href="#collections" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                          <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                            <Users className="h-5 w-5 text-eterna-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Collections Management</div>
                            <div className="text-[13px] text-slate-500 leading-relaxed">Intelligent recovery and delinquency workflows</div>
                          </div>
                        </a>

                        <a href="#campaign" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                          <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                            <BarChart3 className="h-5 w-5 text-eterna-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Campaign Management</div>
                            <div className="text-[13px] text-slate-500 leading-relaxed">Targeted marketing and customer engagement</div>
                          </div>
                        </a>

                        {/* Feature Highlight */}
                        <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-eterna-4/5 to-eterna-5/10 border border-eterna-5/20">
                          <div className="flex items-start gap-3">
                            <Sparkles className="h-4 w-4 text-eterna-4 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-[13px] font-semibold text-eterna-3 mb-1">Platform Integration</div>
                              <div className="text-[12px] text-slate-600 leading-relaxed">All systems work seamlessly together with unified data and workflows</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Products Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className={`flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-medium tracking-tight transition-all duration-200 rounded-lg ${
                  scrolled 
                    ? "text-eterna-3 hover:text-eterna-4 hover:bg-slate-100/80" 
                    : "text-white hover:text-white/90 hover:bg-white/10"
                } ${activeMenu === "products" ? (scrolled ? "bg-slate-100/80" : "bg-white/10") : ""}`}
              >
                Products
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeMenu === "products" ? "rotate-180" : ""}`} />
              </button>
              
              {activeMenu === "products" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 p-8 backdrop-blur-xl">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Lending Solutions</div>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="#micro-lending" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <DollarSign className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Micro Lending</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Small-ticket loans for emerging markets</div>
                        </div>
                      </a>

                      <a href="#consumer-retail" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <CreditCard className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Consumer & Retail</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Personal loans and retail financing</div>
                        </div>
                      </a>

                      <a href="#core-commercial" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Building2 className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Commercial Lending</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Business and corporate financing</div>
                        </div>
                      </a>

                      <a href="#supply-chain" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Package className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Supply Chain Finance</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Working capital and invoice financing</div>
                        </div>
                      </a>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-6 border-t border-slate-200/60">
                      <a href="#compare" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group">
                        <div className="flex items-center gap-3">
                          <Shield className="h-4 w-4 text-eterna-4" />
                          <span className="text-[13px] font-medium text-eterna-3">Compare all products</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-eterna-4 group-hover:translate-x-1 transition-all duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("industries")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className={`flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-medium tracking-tight transition-all duration-200 rounded-lg ${
                  scrolled 
                    ? "text-eterna-3 hover:text-eterna-4 hover:bg-slate-100/80" 
                    : "text-white hover:text-white/90 hover:bg-white/10"
                } ${activeMenu === "industries" ? (scrolled ? "bg-slate-100/80" : "bg-white/10") : ""}`}
              >
                Industries
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`} />
              </button>
              
              {activeMenu === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 p-8 backdrop-blur-xl">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Industry Expertise</div>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="#banks-lenders" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Building2 className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Banks & Alt Lenders</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Digital transformation for financial institutions</div>
                        </div>
                      </a>

                      <a href="#mnos" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Smartphone className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Mobile Networks</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Telecom financial services platforms</div>
                        </div>
                      </a>

                      <a href="#manufacturers" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Package className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Manufacturing</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Supply chain and distributor financing</div>
                        </div>
                      </a>

                      <a href="#power-utility" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Zap className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Power & Utilities</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Energy sector payment solutions</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modules Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("modules")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className={`flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-medium tracking-tight transition-all duration-200 rounded-lg ${
                  scrolled 
                    ? "text-eterna-3 hover:text-eterna-4 hover:bg-slate-100/80" 
                    : "text-white hover:text-white/90 hover:bg-white/10"
                } ${activeMenu === "modules" ? (scrolled ? "bg-slate-100/80" : "bg-white/10") : ""}`}
              >
                Modules
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeMenu === "modules" ? "rotate-180" : ""}`} />
              </button>
              
              {activeMenu === "modules" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 p-8 backdrop-blur-xl">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Modular Components</div>
                    <div className="space-y-1">
                      <a href="#los-module" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <FileText className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Loan Origination</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Complete origination workflows</div>
                        </div>
                      </a>

                      <a href="#lms-module" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Database className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Loan Management</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Servicing and portfolio tools</div>
                        </div>
                      </a>

                      <a href="#crm" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <MessageSquare className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">CRM Module</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Customer relationship management</div>
                        </div>
                      </a>

                      <a href="#cse" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <TrendingUp className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Credit Scoring</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Risk assessment engine</div>
                        </div>
                      </a>

                      <a href="#collections-module" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-200/60">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-gradient-to-br from-eterna-5/20 to-eterna-4/10 group-hover:from-eterna-5/30 group-hover:to-eterna-4/20 transition-all duration-200">
                          <Clock className="h-5 w-5 text-eterna-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[15px] text-eterna-3 group-hover:text-eterna-4 transition-colors mb-1">Collections</div>
                          <div className="text-[13px] text-slate-500 leading-relaxed">Automated recovery processes</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a 
              href="#about" 
              className={`px-5 py-2.5 text-[13px] font-medium tracking-tight transition-all duration-200 rounded-lg ${
                scrolled 
                  ? "text-eterna-3 hover:text-eterna-4 hover:bg-slate-100/80" 
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className={`px-5 py-2.5 text-[13px] font-medium tracking-tight transition-all duration-200 rounded-lg ${
                scrolled 
                  ? "text-eterna-3 hover:text-eterna-4 hover:bg-slate-100/80" 
                  : "text-white hover:text-white/90 hover:bg-white/10"
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="group relative px-7 py-3 bg-eterna-amber text-eterna-3 rounded-xl text-[13px] font-semibold hover:bg-eterna-yellow transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-eterna-amber/20 hover:shadow-xl hover:shadow-eterna-yellow/30 hover:-translate-y-0.5">
              <span>Download Brochure</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}