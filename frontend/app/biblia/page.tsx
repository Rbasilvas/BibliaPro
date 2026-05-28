"use client";

import { useState } from "react";
import bible from "@/data/bible.json";

export default function BibliaPage() {

  const [translation, setTranslation] = useState("ARC");

  const [book, setBook] = useState("Genesis");

  const [chapter, setChapter] = useState("1");

  const currentBook =
    bible[book as keyof typeof bible];

  const currentChapter =
    currentBook[chapter as keyof typeof currentBook];

  return (

    <div>

      {/* TÍTULO */}
      <h1 className="text-5xl font-bold mb-6">

        Bíblia Inteligente

      </h1>

      <p className="text-gray-400 text-lg mb-10">

        Explore livros, capítulos e traduções.

      </p>

      {/* CONTROLES */}
      <div className="flex flex-wrap gap-4 mb-10">

        {/* LIVRO */}
        <select
          value={book}
          onChange={(e) => {
            setBook(e.target.value);
            setChapter("1");
          }}
          className="
            bg-[#161d2d]
            border border-gray-700
            rounded-2xl
            px-5 py-3
            outline-none
          "
        >

          {Object.keys(bible).map((bookName) => (

            <option
              key={bookName}
              value={bookName}
            >

              {bookName}

            </option>

          ))}

        </select>

        {/* CAPÍTULO */}
        <select
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          className="
            bg-[#161d2d]
            border border-gray-700
            rounded-2xl
            px-5 py-3
            outline-none
          "
        >

          {Object.keys(currentBook).map((chapterNumber) => (

            <option
              key={chapterNumber}
              value={chapterNumber}
            >

              Capítulo {chapterNumber}

            </option>

          ))}

        </select>

        {/* TRADUÇÃO */}
        <select
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
          className="
            bg-[#161d2d]
            border border-gray-700
            rounded-2xl
            px-5 py-3
            outline-none
          "
        >

          <option value="ARC">ARC</option>
          <option value="NVI">NVI</option>
          <option value="NTLH">NTLH</option>

        </select>

      </div>

      {/* CONTEÚDO */}
      <div className="
        bg-[#161d2d]
        border border-gray-800
        rounded-3xl
        p-8
      ">

        <h2 className="text-3xl font-semibold mb-8">

          {book} {chapter}

        </h2>

        <div className="space-y-6">

          {Object.entries(currentChapter).map(

            ([verseNumber, verse]) => (

              <div
                key={verseNumber}
                className="border-b border-gray-800 pb-4"
              >

                <span className="text-blue-400 font-bold mr-3">

                  {verseNumber}

                </span>

                <span className="text-gray-200 text-lg leading-9">

                  {
                    (verse as any)[translation]
                  
                  }

                </span>

              </div>

            )

          )}

        </div>

      </div>

    </div>

  );
}