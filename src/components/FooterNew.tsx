import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, ArrowRight, Sparkles } from "lucide-react";
import logo from "figma:asset/a9b0b4597a60ecdb1a3540859afebd0c027bdbf5.png";

export function FooterNew() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { label: "Loan Origination", href: "#" },
      { label: "Loan Management", href: "#" },
      { label: "Credit Scoring", href: "#" },
      { label: "Collections", href: "#" },
      { label: "Campaign Management", href: "#" },
    ],
    Products: [
      { label: "Micro Lending", href: "#" },
      { label: "Consumer Lending", href: "#" },
      { label: "Commercial Lending", href: "#" },
      { label: "Supply Chain Finance", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-eterna-3 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Stay Updated</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Get the latest insights on lending innovation
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Join 5,000+ financial professionals receiving our monthly newsletter
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-eterna-3 rounded-full font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg whitespace-nowrap flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img src={logo} alt="PhotonMatters" className="h-16 w-auto" />
            </a>
            <p className="text-white/80 leading-relaxed mb-6 max-w-sm">
              Intelligent lending infrastructure for the digital economy. Empowering financial institutions to scale fearlessly.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@photonmatters.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">hello@photonmatters.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">+1 (234) 567-890</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">San Francisco, CA<br />New York, NY</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} PhotonMatters. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:-translate-y-1 group"
                >
                  <social.icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-white/10 bg-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-green-500"></div>
              </div>
              <span className="font-medium">SOC 2 Type II Certified</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-blue-500"></div>
              </div>
              <span className="font-medium">ISO 27001 Compliant</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-purple-500"></div>
              </div>
              <span className="font-medium">GDPR Ready</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-yellow-500"></div>
              </div>
              <span className="font-medium">PCI DSS Level 1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
