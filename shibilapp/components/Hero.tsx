import React from "react";

export default function Hero() {
  return (
    <section className="relative px-gutter py-20 flex flex-col items-center text-center overflow-hidden">
      {/* Animated Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>
      {/* Floating Stats Cards */}
      <div className="absolute top-10 left-4 md:left-20 animate-bounce-slow z-10">
        <div className="bg-surface-container/60 backdrop-blur-xl p-4 rounded-xl border-t border-l border-white/10 shadow-xl">
          <span className="font-label-mono text-label-mono text-primary block mb-1">ACCURACY</span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">99.9%</span>
        </div>
      </div>
      <div className="absolute top-40 right-4 md:right-20 animate-bounce-delayed z-10">
        <div className="bg-surface-container/60 backdrop-blur-xl p-4 rounded-xl border-t border-l border-white/10 shadow-xl text-left">
          <span className="font-label-mono text-label-mono text-tertiary block mb-1">LATENCY</span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">2.4<span className="text-xl">ms</span></span>
        </div>
      </div>
      <div className="relative z-20 max-w-2xl">
        <h1 className="font-display-xl-mobile text-display-xl-mobile text-on-surface mb-6 tracking-tight">
          Intelligence, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Refined.</span>
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
          Experience the next evolution of conversational architecture. Built for developers who demand surgical precision and enterprise-grade security in every interaction.
        </p>
        <div className="flex flex-col xs:flex-row gap-4 justify-center">
          <button className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-pointer">
            Start Building
          </button>
          <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold border border-outline-variant/30 hover:bg-surface-bright transition-colors cursor-pointer">
            View Documentation
          </button>
        </div>
      </div>
      <div className="mt-20 animate-bounce">
        <span className="material-symbols-outlined text-on-surface-variant/40">expand_more</span>
      </div>
    </section>
  );
}
