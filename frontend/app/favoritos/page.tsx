"use client";

import { useEffect, useState } from "react";

export default function FavoritosPage() {

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {

    const savedFavorites =
      localStorage.getItem("biblia-favorites");

    if (savedFavorites) {

      setFavorites(JSON.parse(savedFavorites));

    }

  }, []);

  return (

    <div>

      <h1 className="text-5xl font-bold mb-6">

        Versículos Favoritos

      </h1>

      <p className="text-gray-400 text-lg mb-10">

        Seus versículos salvos aparecerão aqui.

      </p>

      <div className="space-y-4">

        {favorites.length === 0 ? (

          <div
            className="
              bg-[#161d2d]
              border border-gray-800
              rounded-3xl
              p-8
            "
          >

            Nenhum favorito salvo.

          </div>

        ) : (

          favorites.map((favorite, index) => (

            <div
              key={index}
              className="
                bg-[#161d2d]
                border border-gray-800
                rounded-3xl
                p-6
              "
            >

              <span className="text-yellow-400 text-xl">

                ⭐

              </span>

              <span className="ml-4 text-lg">

                {favorite}

              </span>

            </div>

          ))

        )}

      </div>

    </div>

  );
}