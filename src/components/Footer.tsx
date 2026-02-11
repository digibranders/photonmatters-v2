import logo from "figma:asset/a9b0b4597a60ecdb1a3540859afebd0c027bdbf5.png";
import { Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Platform: [
      { name: "Loan Origination", href: "#los" },
      { name: "Loan Management", href: "#lms" },
      { name: "Credit Scoring", href: "#credit" },
      { name: "Collections", href: "#collections" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Partners", href: "#partners" },
      { name: "Press", href: "#press" }
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Case Studies", href: "#cases" },
      { name: "Blog", href: "#blog" }
    ],
    Legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Compliance", href: "#compliance" }
    ],
  };

  const social = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <img src={logo} alt="PhotonMatters" className="h-10 mb-6" />
            <p className="text-[15px] text-slate-600 leading-relaxed max-w-xs mb-6">
              Enterprise-grade lending infrastructure for the digital economy.
            </p>
            
            {/* Social icons with premium styling */}
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group w-10 h-10 rounded-lg border border-slate-200 hover:border-eterna-3 flex items-center justify-center transition-all hover:shadow-lg hover:-translate-y-0.5 bg-white"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4 text-slate-600 group-hover:text-eterna-3 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links with improved styling */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-eterna-3 mb-5 text-[13px] uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group text-[15px] text-slate-600 hover:text-eterna-3 transition-colors flex items-center gap-1"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-eterna-5/5 to-purple-500/5 border border-slate-200">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-eterna-3 mb-2">Stay updated</h3>
            <p className="text-[15px] text-slate-600 mb-6">Get the latest updates on features, industry insights, and company news.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-eterna-3 focus:outline-none focus:ring-2 focus:ring-eterna-5/20 bg-white text-[15px]"
              />
              <button className="px-6 py-3 bg-eterna-3 text-white rounded-lg font-semibold hover:bg-eterna-4 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar with premium styling */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[15px] text-slate-500">
            © {currentYear} PhotonMatters. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-[13px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}