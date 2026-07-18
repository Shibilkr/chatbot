import React from "react";

const steps = [
  {
    icon: "link",
    title: "1. Connect Data",
    description: "Sync your documentation, databases, and logs in seconds with our native connectors.",
  },
  {
    icon: "model_training",
    title: "2. Fine-Tune",
    description: "Our automated trainer optimizes the model for your brand voice and specific logic requirements.",
  },
  {
    icon: "rocket_launch",
    title: "3. Go Live",
    description: "Deploy to web, iOS, Android, or Slack with a single line of code. Scale as you grow.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-gutter mb-section-gap-mobile bg-surface-container-low py-16">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">From Idea to Deployment</h2>
      </div>
      <div className="relative max-w-4xl mx-auto flex flex-col gap-12">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent"></div>
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-8 relative">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-primary/20 flex items-center justify-center z-10 shrink-0">
              <span className="material-symbols-outlined text-primary">{step.icon}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-headline-lg-mobile text-xl text-on-surface mb-2">{step.title}</h4>
              <p className="text-on-surface-variant text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
