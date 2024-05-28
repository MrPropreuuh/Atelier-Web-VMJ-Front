import { Inter } from "next/font/google";
import "@/app/styles.css";
import Navbar from "@/components/home/NavbarHome"; // Import Navbar component
import { Footer } from "@/components/home/FooterHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "L'Artelier",
  description: "S’offrir de l’art devient simple",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar /> {/* Use Navbar here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
