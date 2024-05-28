'use client';

import { ArtworkList } from "../components/home/ArtworkList";
import ArtSection from "@/components/home/ArtSection";
import ArtGallery from "@/components/home/ArtGallery";
import { useState } from "react";
import ArtistSection from "@/components/home/ArtistSection";
import Navbar from "@/components/home/NavbarHome";
import { Footer } from "@/components/home/FooterHome";

const HomePage: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);
  const handleSubmit = () => {
    // Define your submit logic here
  };

  const artworks = [
    {
      title: 'Surreal Harmony',
      description: "Cette peinture vibrante et surréaliste représente une figure abstraite ornée d'une pléthore de couleurs et de motifs. La figure centrale a un œil énorme et un visage fantaisiste, caractérisé par des pois et des rayures. La combinaison de couleurs vives telles que le rose, le jaune et le bleu, ainsi que les formes excentriques, évoquent un sentiment d'absurdité ludique. La tenue vestimentaire du personnage comprend un grand nœud papillon rayé, ce qui ajoute à la nature fantaisiste de l'œuvre d'art.",
      price: 4500,
      imageUrl: '/tableau1.jpeg',
      artist: 'René Liesse',
      onSubmit: handleSubmit,
    },
    {
      title: 'Ethereal Ehcoes',
      description: "Ce tableau d'une beauté envoûtante représente trois figures fantomatiques émergeant d'un fond bleu riche et profond. Les personnages, rendus dans un mélange de blanc et de tons sourds, semblent avancer avec un sentiment de détermination et d'unité. Les coups de pinceau expressifs et le contraste dramatique entre la lumière et l'obscurité créent une atmosphère éthérée et presque spectrale, qui capte l'imagination du spectateur.",
      price: 3800,
      imageUrl: '/tableau4.jpg',
      artist: 'Aiden Abstract',
      onSubmit: handleSubmit,
    },
    {
      title: 'Fragmented Reality',
      description: "Dans cette œuvre abstraite, diverses formes géométriques sont empilées, créant une structure à la fois chaotique et harmonieuse. L'utilisation de rouges, de verts et de bleus audacieux sur un fond brun atténué donne l'impression d'une réalité dynamique et fragmentée. La texture et la profondeur obtenues par les coups de pinceau ajoutent une qualité tangible aux formes abstraites, ce qui en fait une œuvre intrigante à méditer.",
      price: 3700,
      imageUrl: '/tableau3.jpg',
      artist: 'Fleeting Faces',
      onSubmit: handleSubmit,
    },
  ];

  const artworks2 = [
    {
      title: 'Fleeting Faces',
      description: "Cette peinture évocatrice représente un visage partiellement obscurci par des coups de pinceau tourbillonnants et fragmentés...",
      price: 2700,
      imageUrl: '/tableau2.jpg',
      artist: 'Fleeting Faces',
      onSubmit: handleSubmit,
    },
    {
      title: 'Celestial Whispers',
      description: "Portrait envoûtant baigné de nuances de bleu, ce tableau présente un visage qui semble se dissoudre dans les tourbillons qui l'entourent...",
      price: 5200,
      imageUrl: '/tableau5.jpg',
      artist: 'Ophelia Serene',
      onSubmit: handleSubmit,
    },
    {
      title: 'Radiant Reverie',
      description: "Ce tableau représente le profil serein d'une jeune femme éclairée par une douce lumière dorée...",
      price: 6000,
      imageUrl: '/tableau6.jpg',
      artist: 'Juliette Lumineuse',
      onSubmit: handleSubmit,
    },
    {
      title: 'Chromatic Contemplation',
      description: "Ce portrait abstrait présente des coups de pinceau audacieux et expressifs dans une émeute de couleurs...",
      price: 3500,
      imageUrl: '/tableau7.jpg',
      artist: 'Marcel Vibrant',
      onSubmit: handleSubmit,
    },
    {
      title: 'Feast of the Abyss',
      description: "Une nature morte saisissante qui combine des éléments macabres et banals...",
      price: 4200,
      imageUrl: '/tableau8.jpg',
      artist: 'Beatrice Noir',
      onSubmit: handleSubmit,
    },
    {
      title: 'Inferno',
      description: "Composition abstraite dominée par des rouges et des noirs ardents, cette peinture évoque un sentiment de chaos et d'intensité...",
      price: 3800,
      imageUrl: '/tableau9.jpg',
      artist: 'Dante Fiery',
      onSubmit: handleSubmit,
    },
    {
      title: 'Mystic Dance',
      description: "Cette peinture présente une scène surréaliste, presque onirique, avec des personnages qui semblent danser ou s'adonner à des mouvements rituels...",
      price: 3200,
      imageUrl: '/tableau10.jpg',
      artist: 'Lucien Twilight',
      onSubmit: handleSubmit,
    },
    {
      title: 'The Odd Quartet',
      description: "Cette peinture fantaisiste et surréaliste met en scène quatre personnages aux traits exagérés et aux motifs vibrants...",
      price: 4500,
      imageUrl: '/tableau11.jpeg',
      artist: 'Kenji Whimsy',
      onSubmit: handleSubmit,
    },
    {
      title: 'Whispers of Spring',
      description: "Une peinture sereine et délicate qui capture l'essence du printemps...",
      price: 5000,
      imageUrl: '/tableau12.png',
      artist: 'Celeste Harmony',
      onSubmit: handleSubmit,
    },
  ];

  return (

    <div>
      <Navbar />
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img alt="mettre giga background bien bg pour donner envie" className="h-full w-full object-cover" height={1080} src="/bgbgbg.png" style={{ aspectRatio: "1920/1080", objectFit: "cover" }} width={1920} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00010e] to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8 sm:px-6 lg:gap-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">L'Artelier, S’offrir de l’art devient simple</h1>
          <p className="max-w-xl text-lg text-gray-200 sm:text-xl">Plus de 30 000 œuvres de tous styles</p>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ArtworkList artworks={artworks} />
        </div>
      </section>
      <ArtSection />
      <ArtGallery artworks={artworks2} />
      <ArtistSection />
      <Footer />
    </div>
  );
};

export default HomePage;
