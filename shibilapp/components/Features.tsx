import React from "react";

const featuresData = [
  {
    icon: "neurology",
    title: "Neural Network",
    description: "Multi-layered cognitive processing that adapts to your specific industry nomenclature and context.",
  },
  {
    icon: "public",
    title: "Global Scale",
    description: "Distributed node network ensuring sub-millisecond responses regardless of user location.",
  },
  {
    icon: "shield_lock",
    title: "Security First",
    description: "End-to-end encryption and SOC2 compliance to protect sensitive proprietary data.",
  },
  {
    icon: "api",
    title: "Robust API",
    description: "Seamless integration with your existing stack via REST, GraphQL, or direct Webhooks.",
  },
  {
    icon: "bolt",
    title: "Automation",
    description: "Execute complex workflows and trigger system actions directly from chat inputs.",
  },
  {
    icon: "monitoring",
    title: "Advanced Analytics",
    description: "Real-time sentiment analysis and conversation mapping for deep behavioral insights.",
  },
];

export default function Features() {
  return (
    <section className="px-gutter mb-section-gap-mobile">
      <div className="text-center mb-12">
        <span className="font-label-mono text-primary uppercase tracking-[0.2em] text-xs">Capabilities</span>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mt-2">Engineered for Scale</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-surface-container p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary mb-6 text-4xl block">
              {feature.icon}
            </span>
            <h3 className="font-headline-lg-mobile text-lg text-on-surface mb-3">
              {feature.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
