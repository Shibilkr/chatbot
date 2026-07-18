import React from "react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 bg-surface/80 backdrop-blur-xl pb-safe shadow-[0_-1px_8px_rgba(0,0,0,0.04)] border-t border-outline-variant/10">
      <div className="h-16 flex items-center justify-around px-4 max-w-lg mx-auto">
        <a className="flex flex-col items-center justify-center gap-1 transition-colors text-primary" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="#">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="text-[10px] font-medium">Explore</span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="#">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="text-[10px] font-medium">Chats</span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </a>
      </div>
    </nav>
  );
}
