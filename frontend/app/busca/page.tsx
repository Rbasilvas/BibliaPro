"use client";

import { useState } from "react";

import bible from "@/data/bible.json";

export default function BuscaPage() {

  const [query, setQuery] = useState("");

  const results: any[] = [];

  Object.entries(bible).forEach(

    ([bookName, chapters]: any) => {

      Object.entries(chapters).forEach(

        ([chapterNumber, verses]: any) => {

          Object.entries(verses).forEach(

            ([verseNumber, verseData]: any) => {

              const text = verseData.ARC;

              if (
                query &&
                text
                  .toLowerCase()
                  .includes(query.toLowerCase())
              ) {

                results.push({
                  bookName,
                  chapterNumber,
                  verseNumber,
                  text,
                });

              }

            }

          );

        }

      );

    }

  );

  return (

    <div>

      {/* TÍTULO */}
      <h1 className="text-5xl font-bold mb-6">

        Busca Inteligente

      </h1>

      <p className="text-gray-400 text-lg mb-10">

        Pesquise palavras e encontre versículos rapidamente.

      </p>

      {/* INPUT */}
      <div className="mb-10">

        <input
          type="text"
          placeholder="Digite uma palavra..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            bg-[#161d2d]
            border border-gray-700
            rounded-3xl
            px-6 py-5
            outline-none
            text-lg
          "
        />

      </div>

      {/* RESULTADOS */}
      <div className="space-y-6">

        {results.map((result, index) => (

          <div
            key={index}
            className="
              bg-[#161d2d]
              border border-gray-800
              rounded-3xl
              p-6
            "
          >

            <h2 className="text-blue-400 font-bold mb-4">

              {result.bookName}
              {" "}
              {result.chapterNumber}
              :
              {result.verseNumber}

            </h2>

            <p className="text-gray-200 text-lg leading-9">

              {result.text}

            </p>

          </div>

        ))}

      </div>

    </div>

  );
}