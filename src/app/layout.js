import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "Rimal Immobilier Maroc",
  description:
    "Rimal Immobilier Maroc accompagne particuliers et investisseurs dans leurs projets immobiliers au Maroc.",
  openGraph: {
    title: "Rimal Immobilier Maroc",
    description:
      "Rimal Immobilier Maroc accompagne particuliers et investisseurs dans leurs projets immobiliers au Maroc.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
