export default function CronologiaPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Linha do Tempo Bíblica
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Explore os acontecimentos bíblicos organizados cronologicamente.
      </p>

      <div className="space-y-6">

        {/* EVENTO 1 */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-semibold">
              Abraão
            </h2>

            <span className="text-gray-400">
              Aproximadamente 2000 a.C.
            </span>

          </div>

          <p className="text-gray-300">
            Período patriarcal e início da formação do povo hebreu.
          </p>

        </div>

        {/* EVENTO 2 */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-semibold">
              Êxodo do Egito
            </h2>

            <span className="text-gray-400">
              Aproximadamente 1446 a.C.
            </span>

          </div>

          <p className="text-gray-300">
            Moisés conduz Israel para fora do Egito rumo à Terra Prometida.
          </p>

        </div>

        {/* EVENTO 3 */}
        <div className="bg-[#161d2d] border border-gray-800 rounded-3xl p-6">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-semibold">
              Reinado de Davi
            </h2>

            <span className="text-gray-400">
              Aproximadamente 1010 a.C.
            </span>

          </div>

          <p className="text-gray-300">
            Consolidação do reino de Israel e estabelecimento de Jerusalém.
          </p>

        </div>

      </div>

    </main>
  );
}