interface Props {
  params: {
    slug: string;
  };
}

const esbocos = {
  fe: {
    categoria: "Fé",
    titulo: "A Fé que Move Montanhas",
    texto: "Mateus 17:20",
    introducao:
      "Jesus ensina que a fé verdadeira possui poder espiritual capaz de remover obstáculos impossíveis aos olhos humanos.",
    topicos: [
      "A Fé Precisa Ser Exercitada",
      "A Fé Vence o Medo",
      "A Fé Produz Milagres",
    ],
    conclusao:
      "A fé bíblica não é apenas sentimento, mas confiança ativa no poder e na fidelidade de Deus.",
  },

  oracao: {
    categoria: "Oração",
    titulo: "O Poder da Oração",
    texto: "Tiago 5:16",
    introducao:
      "A oração é uma das maiores armas espirituais entregues ao cristão.",
    topicos: [
      "A oração aproxima de Deus",
      "A oração fortalece a fé",
      "A oração produz resultados",
    ],
    conclusao:
      "Uma vida de oração constante transforma o relacionamento com Deus.",
  },

  chamado: {
    categoria: "Chamado",
    titulo: "Chamado de Moisés",
    texto: "Êxodo 3",
    introducao:
      "Deus chama pessoas comuns para missões extraordinárias.",
    topicos: [
      "Deus vê o potencial",
      "Deus capacita os escolhidos",
      "A obediência libera propósito",
    ],
    conclusao:
      "O chamado de Deus sempre vem acompanhado de Sua capacitação.",
  },

  pastor: {
    categoria: "Jesus",
    titulo: "O Bom Pastor",
    texto: "João 10:11",
    introducao:
      "Jesus apresenta-se como o pastor que cuida e protege suas ovelhas.",
    topicos: [
      "O pastor conhece suas ovelhas",
      "O pastor protege o rebanho",
      "O pastor entrega sua vida",
    ],
    conclusao:
      "Cristo continua guiando seu povo com amor e fidelidade.",
  },
};

export default async function EsbocoPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  const esboco =
    esbocos[
      slug as keyof typeof esbocos
    ];

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