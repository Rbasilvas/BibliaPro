"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <div className="flex min-h-screen bg-[#0b0f19] text-white">

      {/* SIDEBAR DESKTOP */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* SIDEBAR MOBILE */}
      {mobileMenuOpen && (

        <div className="fixed inset-0 z-50 flex">

          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* MENU */}
          <div className="relative z-50">

            <Sidebar />

          </div>

        </div>

      )}

      {/* CONTEÚDO */}
      <main className="flex-1 p-10 overflow-auto">

        <Header setMobileMenuOpen={setMobileMenuOpen} />

        {children}

      </main>

    </div>

  );
}