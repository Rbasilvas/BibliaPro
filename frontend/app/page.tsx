"use client";
import Sidebar from "../components/Sidebar";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <section className="flex-1 p-10">

        <div className="mb-10">
          <h2 className="text-5xl font-bold">
            Dashboard
          </h2>

          <p className="text-gray-400 mt-3 text-lg">
            Plataforma Inteligente de Estudos Bíblicos
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-6">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#161d2d] border border-gray-800 p-6 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Bíblia Inteligente
            </h3>

            <p className="text-gray-400">
              Pesquise palavras, temas e referências cruzadas entre traduções.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#161d2d] border border-gray-800 p-6 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Linha Cronológica
            </h3>

            <p className="text-gray-400">
              Explore acontecimentos bíblicos organizados por período histórico.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#161d2d] border border-gray-800 p-6 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Estudos Avançados
            </h3>

            <p className="text-gray-400">
              Conteúdos organizados por temas teológicos e estudos modernos.
            </p>
          </motion.div>

        </div>

        {/* RODAPÉ */}
        <div className="mt-20 text-xs text-gray-600">
          created by : @rbasilva2026 . MIADMBJD
        </div>

      </section>

    </div>
  );
}