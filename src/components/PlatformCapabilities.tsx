import { Check } from "lucide-react";

export function PlatformCapabilities() {
  const sections = [
    {
      title: "Modular. Configured your way.",
      items: [
        "Launch multiple lending products from one system. No rebuilds.",
        "Unified stack—LOS, LMS, scoring, business rules, and GL—all talking to each other.",
        "Digital-first journeys from sign-up to disbursement. Paperless. Compliant. Fast."
      ]
    },
    {
      title: "Open APIs. Built to integrate.",
      items: [
        "Plug into bureaus, core banking, fraud engines, and analytics tools in days.",
        "White-label web and mobile apps that match your brand.",
        "Automated messaging via SMS, WhatsApp, email—triggered by lifecycle events."
      ]
    },
    {
      title: "Deploy fast. Scale forever.",
      items: [
        "Cloud or on-prem. Your choice. Go live in weeks, not months.",
        "Enterprise-grade performance that handles millions of transactions.",
        "Built-in collections with AI-driven recovery strategies."
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-eterna-3 mb-4 font-sans leading-[1.2]">
            Built for scale. Designed for speed.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-medium tracking-tighter text-slate-900 border-l-4 border-violet-500 pl-4 font-sans">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-slate-600">
                    <div className="mt-1 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-violet-600" />
                    </div>
                    <span className="leading-relaxed text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}