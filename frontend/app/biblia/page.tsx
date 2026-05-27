"use client";

import { useState } from "react";
import bible from "@/data/bible.json";

export default function BibliaPage() {

  const [translation, setTranslation] = useState("ARC");
  const [book, setBook] = useState("Genesis");

  const verse =
    book === "Genesis"
      ? bible.Genesis["1"]["1"]
      : bible.Joao["3"]["16"];

  return (
    <div>

      <h1 className="text-5xl font-bold mb-6">
        Bíblia Inteligente
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Explore diferentes livros e traduções bíblicas.
      </p>

      {/* CONTROLES */}
      <div className="flex gap-4 mb-8">

        {/* LIVRO */}
        <select
          value={book}
          onChange={(e) => setBook(e.target.value)}
          className="bg-[#161d2d] border border-gray-700 rounded-2xl px-5 py-3 outline-none"
        >

          <option value="Genesis">
            Gênesis
          </option>

          <option value="Joao">
            João
          </option>

        </select>

        {/* TRADUÇÃO */}
        <select
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
          className="bg-[#161d2d] border border-gray-700 rounded-2xl px-5 py-3 outline-none"
        >

          <option value="ARC">ARC</option>
          <option value="NVI">NVI</option>
          <option value="NTLH">NTLH</option>

        </select>

      </div>

      {/* CARD */}
      <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-3xl font-semibold mb-6">

          {book === "Genesis"
            ? "Gênesis 1:1"
            : "João 3:16"}

        </h2>

        <p className="text-2xl text-gray-200 leading-10">

          {verse[translation as keyof typeof verse]}

        </p>

      </div>

    </div>
  );
}