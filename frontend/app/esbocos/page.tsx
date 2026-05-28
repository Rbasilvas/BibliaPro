import Link from "next/link";

export default function EsbocosPage() {

  const esbocos = [

    {
      titulo: "A Fé que Move Montanhas",
      texto: "Mateus 17:20",
      categoria: "Fé",
      link: "/esbocos/fe",
    },

    {
      titulo: "O Poder da Oração",
      texto: "Tiago 5:16",
      categoria: "Oração",
      link: "/esbocos/oracao",
    },

    {
      titulo: "Chamado de Moisés",
      texto: "Êxodo 3",
      categoria: "Chamado",
      link: "/esbocos/chamado",
    },

    {
      titulo: "O Bom Pastor",
      texto: "João 10:11",
      categoria: "Jesus",
      link: "/esbocos/pastor",
    },

  ];

  return (

    <div>

      <h1 className="text-5xl font-bold mb-6">

        Esboços Bíblicos

      </h1>

      <p className="text-gray-400 text-lg mb-10">

        Estruturas de mensagens, sermões e estudos.

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {esbocos.map((esboco, index) => (

          <Link
            href={esboco.link}
            key={index}
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

              Texto Base:
              {" "}
              {esboco.texto}

            </p>

          </Link>

        ))}

      </div>

    </div>

  );
}