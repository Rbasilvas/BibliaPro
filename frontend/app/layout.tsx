import "./globals.css";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "BibliaPro",
  description: "Plataforma inteligente de estudos bíblicos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">

      <body>

        <MainLayout>
          {children}
        </MainLayout>

      </body>

    </html>
  );
}