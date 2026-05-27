"use client";

import { useState } from "react";

import {
  Book,
  Search,
  Clock3,
  Library,
  NotebookPen,
  AudioLines,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidebar() {

  const [openBible, setOpenBible] = useState(true);
  const [openStudy, setOpenStudy] = useState(false);

  return (

    <aside className="w-80 h-screen bg-[#121826] border-r border-gray-800 p-6">

      <h1 className="text-4xl font-bold mb-10">
        BibliaPro
      </h1>

      <nav className="space-y-3">

        {/* BÍBLIA */}
        <div>

          <div className="flex items-center justify-between w-full p-4 rounded-2xl hover:bg-[#1b2233] transition">

            <Link
              href="/biblia"
              className="flex items-center gap-3"
            >
              <Book size={22} />
              <span>Bíblia</span>
            </Link>

            <button onClick={() => setOpenBible(!openBible)}>
              {openBible ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

          </div>

          {openBible && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="ml-6 mt-2 space-y-2"
            >

              <button className="block text-gray-400 hover:text-white">
                Ler Bíblia
              </button>

              <button className="block text-gray-400 hover:text-white">
                Comparar Traduções
              </button>

              <button className="block text-gray-400 hover:text-white">
                Bíblia em Áudio
              </button>

              <button className="block text-gray-400 hover:text-white">
                Plano de Leitura
              </button>

            </motion.div>

          )}

        </div>

        {/* BUSCA */}
        <Link
          href="/busca"
          className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-[#1b2233] transition"
        >
          <Search size={22} />
          <span>Busca Inteligente</span>
        </Link>

        {/* LINHA DO TEMPO */}
        <Link
          href="/cronologia"
          className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-[#1b2233] transition"
        >
          <Clock3 size={22} />
          <span>Linha do Tempo</span>
        </Link>

        {/* ENCICLOPÉDIA */}
        <Link
          href="/enciclopedia"
          className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-[#1b2233] transition"
        >
          <Library size={22} />
          <span>Enciclopédia Bíblica</span>
        </Link>

        {/* ESTUDOS */}
        <div>

          <div className="flex items-center justify-between w-full p-4 rounded-2xl hover:bg-[#1b2233] transition">

            <Link
              href="/estudos"
              className="flex items-center gap-3"
            >
              <NotebookPen size={22} />
              <span>Estudos</span>
            </Link>

            <button onClick={() => setOpenStudy(!openStudy)}>
              {openStudy ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>

          </div>

          {openStudy && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="ml-6 mt-2 space-y-2"
            >

              <button className="block text-gray-400 hover:text-white">
                Escatologia
              </button>

              <button className="block text-gray-400 hover:text-white">
                Apologética
              </button>

              <button className="block text-gray-400 hover:text-white">
                Família
              </button>

              <button className="block text-gray-400 hover:text-white">
                Liderança
              </button>

            </motion.div>

          )}

        </div>

        {/* ÁUDIO */}
        <button className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-[#1b2233] transition">
          <AudioLines size={22} />
          <span>Player Bíblico</span>
        </button>

        {/* CONFIG */}
        <button className="flex items-center gap-3 w-full p-4 rounded-2xl hover:bg-[#1b2233] transition">
          <Settings size={22} />
          <span>Configurações</span>
        </button>

      </nav>

    </aside>

  );
}