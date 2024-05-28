import * as React from "react";
import { ArtworkList } from "../home/ArtworkList";
import RootLayout from "@/app/layout";
import { Button } from "@/components/home/ButtonHome";

const artworks = [
  {
    title: 'Eclat sauvage',
    description: 'Description de Eclat sauvage.',
    artist: 'Bertre Flandrin Marie-Liesse',
    price: 1000,
    imageUrl: '/tableau1.jpeg',
  },
  {
    title: 'Les songes de l\'aube',
    description: 'Description de Les songes de l\'aube.',
    artist: 'Romanelli Karine',
    price: 1200,
    imageUrl: '/tableau4.jpg',
  },
  {
    title: 'Holland landscape',
    description: 'Description de Holland landscape.',
    artist: 'Pigni Diana',
    price: 900,
    imageUrl: '/tableau3.jpg',
  },
];

const HomePage: React.FC = () => (
  <RootLayout>
    <section className="relative h-[80vh] w-full overflow-hidden">
      <img alt="mettre giga background bien bg pour donner envie" className="h-full w-full object-cover" height={1080} src="/bgbgbg.png" style={{ aspectRatio: "1920/1080", objectFit: "cover" }} width={1920} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00010e] to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8 sm:px-6 lg:gap-10">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">L'Artelier, S’offrir de l’art devient simple</h1>
        <p className="max-w-xl text-lg text-gray-200 sm:text-xl">Plus de 30 000 œuvres de tous styles</p>
        <Button>Voir les oeuvres</Button>
      </div>
    </section>
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ArtworkList artworks={artworks} />
      </div>
    </section>
  </RootLayout>
);

export default HomePage;