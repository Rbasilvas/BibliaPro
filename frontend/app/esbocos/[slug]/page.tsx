import esbocosJson from "@/data/esbocos.json";

interface Props {
  params: {
    slug: string;
  };
}

export default async function EsbocoPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

const esboco = esbocosJson.find(
  (item) => item.slug === slug
);
  if (!esboco) {

    return (

      <div>

        <h1 className="text-4xl font-bold">

          Esboço não encontrado

        </h1>

      </div>

    );

  }

  return (

    <div>

      <div className="mb-8">

        <span
          className="
            bg-blue-500/20
            text-blue-400
            px-4 py-2
            rounded-full
          "
        >

          {esboco.categoria}

        </span>

      </div>

      <h1 className="text-5xl font-bold mb-6">

        {esboco.titulo}

      </h1>

      <p className="text-gray-400 text-xl mb-10">

        Texto Base: {esboco.texto}

      </p>

      <div
        className="
          bg-[#161d2d]
          border border-gray-800
          rounded-3xl
          p-8
          mb-8
        "
      >

        <h2 className="text-3xl font-bold mb-4">

          Introdução

        </h2>

        <p>

          {esboco.introducao}

        </p>

      </div>

      <div
        className="
          bg-[#161d2d]
          border border-gray-800
          rounded-3xl
          p-8
          mb-8
        "
      >

        <h2 className="text-3xl font-bold mb-6">

          Desenvolvimento

        </h2>

        <div className="space-y-4">

          {esboco.topicos.map(
            (topico, index) => (

              <div key={index}>

                <h3 className="text-xl font-semibold">

                  {index + 1}. {topico}

                </h3>

              </div>

            )
          )}

        </div>

      </div>

      <div
        className="
          bg-[#161d2d]
          border border-gray-800
          rounded-3xl
          p-8
        "
      >

        <h2 className="text-3xl font-bold mb-4">

          Conclusão

        </h2>

        <p>

          {esboco.conclusao}

        </p>

      </div>

    </div>

  );
}