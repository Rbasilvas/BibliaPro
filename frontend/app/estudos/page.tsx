export default function EstudosPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Estudos Bíblicos
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Explore conteúdos organizados por temas teológicos e estudos modernos.
      </p>

      <div className="grid grid-cols-2 gap-6">

        {/* CARD */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Escatologia
          </h2>

          <p className="text-gray-300">
            Estudos sobre os acontecimentos dos últimos tempos.
          </p>

        </div>

        {/* CARD */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Apologética
          </h2>

          <p className="text-gray-300">
            Defesa racional e histórica da fé cristã.
          </p>

        </div>

        {/* CARD */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Liderança Cristã
          </h2>

          <p className="text-gray-300">
            Desenvolvimento de liderança baseada em princípios bíblicos.
          </p>

        </div>

        {/* CARD */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Família Cristã
          </h2>

          <p className="text-gray-300">
            Estudos voltados ao fortalecimento da família segundo a Bíblia.
          </p>

        </div>

      </div>

    </main>
  );
}