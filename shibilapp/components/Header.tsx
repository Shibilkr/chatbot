import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-gutter flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-10 h-10 -ml-2 text-on-surface-variant cursor-pointer">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Aetherial Logic Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT4HNM_2W7b2RGHG0zfaiXoHsq0SdMivubAzLRayWgKmiAyn7RT7H5tZEfAdyZpACWjbeoXw8hlVSN6-OGhZm3m2H8Y9-UdvCwyCINHJVaE4LX7-kKV4MIILE-htjL-n2CixlGG9cPoZdimLGjNNUxJxZYseDGDZkqiASeKIunxOPUkto-JaXZy2rja-S7yfUYss6Y91E142IaFuS3xBJk6dPapxS9rQWrKKbYsgbID_IkluhADcgJsRaf53Jkam1wBwEVYjfIIaE"
            />
            <span className="hidden xs:block font-headline-lg-mobile text-body-md font-bold tracking-tight text-on-surface">
              Aetherial Logic
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-4 py-2 rounded-xl text-sm font-bold shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)] cursor-pointer">
            Launch Chat
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-outline/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQyWIMW0IeeNj19J9fupMH_77q7ZAth-NW-z7nOworuDAZi5Np2r6AglATQPYV5RYRPL9Pfq2j77p-xapGAlryR-6gaCiVSuNFGYto5gCjCgsb0H8Ww6Ny_eCh9chLfaHVBSSiEEUZRITT30WFV23vTz6KkBf2SnXbtZ9sfo8h6PxUzZOvY3RlAdpNfD-WLM4rDSJ4H9WPFyp1fu9R7Bz8HxDdwAUi6D7VBPxcwMVvYkagtAEztgZCY5-zRqS_BdKpp_MmRpfx8Q"
          />
        </div>
      </div>
    </header>
  );
}
