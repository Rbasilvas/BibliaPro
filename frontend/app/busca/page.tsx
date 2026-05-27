"use client";

import { useState } from "react";
import bible from "@/data/bible.json";

export default function BuscaPage() {

  const [search, setSearch] = useState("");

  const verses = [
    {
      reference: "Gênesis 1:1",
      text: bible.Genesis["1"]["1"].ARC,
    },
    {
      reference: "João 3:16",
      text: bible.Joao["3"]["16"].ARC,
    },
  ];

  const filteredVerses = verses.filter((verse) =>
    verse.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Busca Inteligente
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Pesquise palavras e temas bíblicos dinamicamente.
      </p>
      <div className="mb-6 text-gray-400">
        Resultados encontrados: {filteredVerses.length}
      </div>

      {/* INPUT */}
      <div className="mb-10">

        <input
          type="text"
          placeholder="Digite uma palavra..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#161d2d] border border-gray-700 rounded-2xl p-5 outline-none text-lg"
        />

      </div>

      {/* RESULTADOS */}
      <div className="space-y-6">

        {filteredVerses.map((verse, index) => (

          <div
            key={index}
            className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6 hover:border-blue-500 hover:scale-[1.01] transition duration-300"
          >

            <h2 className="text-2xl font-semibold mb-4">
              {verse.reference}
            </h2>

            <p className="text-gray-300 leading-8">
              {verse.text}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}