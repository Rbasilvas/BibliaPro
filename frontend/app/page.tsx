"use client";

import {
  BookOpen,
  Brain,
  Clock3,
  AudioLines,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Home() {

  const cards = [
    {
      title: "Bíblia Inteligente",
      description: "Leitura dinâmica e comparador de traduções.",
      icon: <BookOpen size={30} />,
    },
    {
      title: "Estudos Bíblicos",
      description: "Conteúdos organizados por temas e doutrinas.",
      icon: <Brain size={30} />,
    },
    {
      title: "Linha do Tempo",
      description: "Explore eventos bíblicos cronologicamente.",
      icon: <Clock3 size={30} />,
    },
    {
      title: "Player Bíblico",
      description: "Escute a Bíblia em áudio futuramente.",
      icon: <AudioLines size={30} />,
    },
  ];

  return (

    <div>

      {/* HERO */}
      <section className="mb-14">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold leading-tight mb-6"
        >

          Plataforma Bíblica
          <br />
          Inteligente e Moderna

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-xl max-w-3xl"
        >

          Estude a Bíblia com recursos avançados,
          interface premium e tecnologia moderna.

        </motion.p>

      </section>

      {/* CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => (

          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
            }}
            className="
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              rounded-3xl
              p-8
              shadow-xl
            "
          >

            <div className="mb-6 text-blue-400">

              {card.icon}

            </div>

            <h2 className="text-2xl font-semibold mb-4">

              {card.title}

            </h2>

            <p className="text-gray-400 leading-7">

              {card.description}

            </p>

          </motion.div>

        ))}

      </section>

    </div>

  );
}