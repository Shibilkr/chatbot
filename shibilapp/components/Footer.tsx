import React from "react";

export default function Footer() {
  return (
    <footer className="mt-section-gap-mobile px-gutter py-12 bg-surface-container-lowest flex flex-col gap-8 w-full border-t border-outline-variant/10">
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Product</span>
          <nav className="flex flex-col gap-2 text-sm text-on-surface/60">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Company</span>
          <nav className="flex flex-col gap-2 text-sm text-on-surface/60">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Legal</a>
          </nav>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-t border-outline-variant/10 max-w-4xl mx-auto w-full">
        <span className="text-xs text-on-surface-variant">© 2024 Aetherial Logic</span>
        <div className="flex gap-4 text-on-surface-variant">
          <span className="material-symbols-outlined text-xl cursor-pointer hover:text-primary transition-colors">share</span>
          <span className="material-symbols-outlined text-xl cursor-pointer hover:text-primary transition-colors">public</span>
        </div>
      </div>
      <div className="h-20"></div>
    </footer>
  );
}
