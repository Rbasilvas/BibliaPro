import Link from "next/link";
import esbocosJson from "@/data/esbocos.json";

export default function EsbocosPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">
        Esboços Bíblicos
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Estruturas de mensagens, sermões e estudos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {esbocosJson.map((esboco) => (
          <Link
            href={`/esbocos/${esboco.slug}`}
            key={esboco.slug}
            className="
              bg-[#161d2d]
              border border-gray-800
              rounded-3xl
              p-8
              hover:border-blue-500
              transition
              block
            "
          >
            <div className="mb-4">
              <span
                className="
                  text-sm
                  bg-blue-500/20
                  text-blue-400
                  px-4 py-2
                  rounded-full
                "
              >
                {esboco.categoria}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {esboco.titulo}
            </h2>

            <p className="text-gray-400 text-lg">
              Texto Base: {esboco.texto}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}