export default function EnciclopediaPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Enciclopédia Bíblica
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Explore personagens, cidades, impérios e acontecimentos bíblicos.
      </p>

      <div className="grid grid-cols-3 gap-6">

        {/* CARD */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Moisés
          </h2>

          <p className="text-gray-300">
            Profeta e líder responsável pela libertação de Israel do Egito.
          </p>

        </div>

        {/* CARD */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Jerusalém
          </h2>

          <p className="text-gray-300">
            Cidade central na história bíblica e espiritual de Israel.
          </p>

        </div>

        {/* CARD */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Império Romano
          </h2>

          <p className="text-gray-300">
            Potência mundial durante o período do Novo Testamento.
          </p>

        </div>

      </div>

    </main>
  );
}