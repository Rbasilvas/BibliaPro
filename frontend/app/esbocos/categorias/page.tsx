import Link from "next/link";

export default function CategoriasPage() {

  const categorias = [

    {
      nome: "Fé",
      descricao: "Mensagens sobre confiança e dependência de Deus.",
      link: "/esbocos/fe",
    },

    {
      nome: "Oração",
      descricao: "Estudos sobre oração e comunhão com Deus.",
      link: "/esbocos/oracao",
    },

    {
      nome: "Chamado",
      descricao: "Mensagens sobre propósito e vocação.",
      link: "/esbocos/chamado",
    },

    {
      nome: "Jesus",
      descricao: "Esboços focados na vida e ministério de Cristo.",
      link: "/esbocos/pastor",
    },

  ];

  return (

    <div>

      <h1 className="text-5xl font-bold mb-6">

        Categorias de Esboços

      </h1>

      <p className="text-gray-400 text-lg mb-10">

        Escolha uma categoria para explorar.

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {categorias.map((categoria, index) => (

          <Link
            key={index}
            href={categoria.link}
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

            <h2 className="text-2xl font-bold mb-4">

              {categoria.nome}

            </h2>

            <p className="text-gray-400">

              {categoria.descricao}

            </p>

          </Link>

        ))}

      </div>

    </div>

  );

}