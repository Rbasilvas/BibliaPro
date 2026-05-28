import Link from "next/link";
export default function EsbocoDetalhePage() {

  return (

    <div>

      <div className="mb-8">

        <span
          className="
            bg-blue-500/20
            text-blue-400
            px-4 py-2
            rounded-full
            text-sm
          "
        >

          Fé

        </span>

      </div>

      <h1 className="text-5xl font-bold mb-6">

        A Fé que Move Montanhas

      </h1>

      <p className="text-gray-400 text-xl mb-10">

        Texto Base: Mateus 17:20

      </p>

      {/* INTRODUÇÃO */}
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

          Introdução

        </h2>

        <p className="text-gray-300 text-lg leading-9">

          Jesus ensina que a fé verdadeira possui
          poder espiritual capaz de remover
          obstáculos impossíveis aos olhos humanos.

        </p>

      </div>

      {/* TÓPICOS */}
      <div
        className="
          bg-[#161d2d]
          border border-gray-800
          rounded-3xl
          p-8
          mb-8
        "
      >

        <h2 className="text-3xl font-bold mb-8">

          Desenvolvimento

        </h2>

        <div className="space-y-8">

          <div>

            <h3 className="text-2xl font-semibold mb-3">

              1. A Fé Precisa Ser Exercitada

            </h3>

            <p className="text-gray-300 text-lg leading-9">

              A fé cresce através da prática,
              confiança e relacionamento com Deus.

            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-3">

              2. A Fé Vence o Medo

            </h3>

            <p className="text-gray-300 text-lg leading-9">

              O medo paralisa, mas a fé impulsiona
              o cristão a confiar nas promessas
              divinas.

            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-3">

              3. A Fé Produz Milagres

            </h3>

            <p className="text-gray-300 text-lg leading-9">

              Deus honra aqueles que perseveram
              crendo mesmo em tempos difíceis.

            </p>

          </div>

        </div>

      </div>

      {/* CONCLUSÃO */}
      <div
        className="
          bg-[#161d2d]
          border border-gray-800
          rounded-3xl
          p-8
        "
      >

        <h2 className="text-3xl font-bold mb-6">

          Conclusão

        </h2>

        <p className="text-gray-300 text-lg leading-9">

          A fé bíblica não é apenas sentimento,
          mas confiança ativa no poder e na
          fidelidade de Deus.

        </p>

      </div>

    </div>

  );
}