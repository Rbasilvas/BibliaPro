"use client";

import { Bell, Search, Menu } from "lucide-react";

interface HeaderProps {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  setMobileMenuOpen,
}: HeaderProps) {

  return (

    <header className="flex items-center justify-between mb-10 gap-4">

      {/* ESQUERDA */}
      <div className="flex items-center gap-4">

        {/* MENU MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden bg-[#161d2d] border border-gray-800 p-3 rounded-2xl"
        >

          <Menu size={22} />

        </button>

        <div>

          <h1 className="text-3xl font-bold">
            BibliaPro
          </h1>

          <p className="text-gray-400">
            Plataforma ultra premium inteligente de estudos bíblicos
          </p>

        </div>

      </div>

      {/* DIREITA */}
      <div className="flex items-center gap-4">

        {/* PESQUISA */}
        <div className="hidden md:flex items-center gap-3 bg-[#161d2d] border border-gray-800 px-4 py-3 rounded-2xl">

          <Search size={18} />

          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-transparent outline-none"
          />

        </div>

        {/* NOTIFICAÇÃO */}
        <button className="bg-[#161d2d] border border-gray-800 p-3 rounded-2xl hover:border-blue-500 transition">

          <Bell size={20} />

        </button>

        {/* PERFIL */}
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold">

          RB
          
          TESTE GIT

        </div>

      </div>

    </header>

  );
}