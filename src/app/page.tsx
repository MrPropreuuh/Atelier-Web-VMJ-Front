"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps, useState } from "react"
import { UserIcon } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import React from "react"
import { DrawerHome } from "@/components/home/DrawerHome";

export default function Component() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);
  const [matches, setMatches] = useState(false);
  const handleSubmit = () => setIsDrawerOpen(true);

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-2" href="#">
            <img
              src="/logo_nav.png"
              alt="L'artelier Logo"
              className="h-10 w-10 object-cover"
            />
            <span className="text-xl font-bold tracking-tight text-[#030712] dark:text-gray-50">L'artelier</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex lg:gap-4">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Accueil
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Peintures
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Artistes
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Collections
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </nav>
            <div className="relative w-full max-w-md lg:max-w-xs">
              <Input
                className="h-9 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-[#030712] focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-700 dark:bg-[#030712] dark:text-gray-50 dark:focus:border-gray-500 dark:focus:ring-gray-500"
                placeholder="Rechercher..."
                type="search"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>
            <Link href="/login" className="flex items-center gap-2 hover:text-white">
              <UserIcon className="h-6 w-6 text-[#030712] dark:text-gray-50" />
              <span className="hidden lg:block text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-white">Connexion</span>
            </Link>
          </div>
        </div>
      </header>


      <main>
        <section className="relative h-[80vh] w-full overflow-hidden">
          <img
            alt="mettre giga background bien bg pour donner envie"
            className="h-full w-full object-cover"
            height={1080}
            src="/bgbgbg.png"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00010e] to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8 sm:px-6 lg:gap-10">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              L'Artelier, S’offrir de l’art devient simple
            </h1>
            <p className="max-w-xl text-lg text-gray-200 sm:text-xl">
              Plus de 30 000 œuvres de tous styles
            </p>
            <Button>Voir les oeuvres</Button>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau1.jpeg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Surreal Harmony</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">4 500€</p>
                    </div>
                    <DrawerHome
                      title="Surreal Harmony"
                      description="Cette peinture vibrante et surréaliste représente une figure abstraite ornée d'une pléthore de couleurs et de motifs. 
                      La figure centrale a un œil énorme et un visage fantaisiste, caractérisé par des pois et des rayures. 
                      La combinaison de couleurs vives telles que le rose, le jaune et le bleu, ainsi que les formes excentriques, évoquent un sentiment d'absurdité ludique. 
                      La tenue vestimentaire du personnage comprend un grand nœud papillon rayé, ce qui ajoute à la nature fantaisiste de l'œuvre d'art."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={4500} artiste={"René Liesse"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau4.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Ethereal Echoes</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 800€</p>
                    </div>
                    <DrawerHome
                      title="Ethereal Echoes"
                      description="Ce tableau d'une beauté envoûtante représente trois figures fantomatiques émergeant d'un fond bleu riche et profond. 
                      Les personnages, rendus dans un mélange de blanc et de tons sourds, semblent avancer avec un sentiment de détermination et d'unité. 
                      Les coups de pinceau expressifs et le contraste dramatique entre la lumière et l'obscurité créent une atmosphère éthérée et presque spectrale, qui capte l'imagination du spectateur."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={3800} artiste={"Valéry Mystique"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau3.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Fragmented Reality</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 200€</p>
                    </div>
                    <DrawerHome
                      title="Fragmented Reality"
                      description="Dans cette œuvre abstraite, diverses formes géométriques sont empilées, créant une structure à la fois chaotique et harmonieuse. 
                      L'utilisation de rouges, de verts et de bleus audacieux sur un fond brun atténué donne l'impression d'une réalité dynamique et fragmentée. 
                      La texture et la profondeur obtenues par les coups de pinceau ajoutent une qualité tangible aux formes abstraites, ce qui en fait une œuvre intrigante à méditer."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={3200} artiste={"Aiden Abstract"} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#030712] dark:text-gray-50 sm:text-4xl">
                  Avec L'Artelier, vivez l’art contemporain avec émotion.
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                  L'artelier est le plus grand réseau de galeries d’art contemporain avec plus de 600 artistes et une collection de 30 000 œuvres uniques.
                  Précurseur depuis 2024, L'artelier a ouvert la voie pour rendre l'art plus accessible et à des prix justes.
                  L'Artelier, c’est aussi une communauté de spécialistes et de passionnés d’art contemporain en France.
                  Rejoignez-nous et vivez l’Art au quotidien avec un grand « A » !

                </p>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                  Nôtre curateur d’art Jules HERRERO déniche des artistes émergents, de nouveaux talents qui font la beauté d’aujourd’hui et qui compteront demain.
                  Ces équipes accompagnent ainsi plus de 600 artistes à travers le monde afin d’accroître leur visibilité et soutenir leur démarche artistique.
                </p>
              </div>
              <img
                alt="mettre img d'une galerie"
                className="h-80 w-full rounded-lg object-cover sm:h-80 lg:h-full"
                height={600}
                src="/gallery.png"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={800}
              />
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau2.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Fleeting Faces</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2 700€</p>
                    </div>
                    <DrawerHome
                      title="Fleeting Faces"
                      description="Cette peinture évocatrice représente un visage partiellement obscurci par des coups de pinceau tourbillonnants et fragmentés. 
                      L'utilisation de tons sombres sur un fond noir crée un effet dramatique, soulignant les traits du visage avec un sentiment de mystère et d'introspection. 
                      Le jeu d'ombre et de lumière, ainsi que les fragments déformés, suggèrent un aperçu fugace de l'agitation et des émotions intérieures du sujet."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={2700} artiste={"Fleeting Faces"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau5.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Celestial Whispers</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">5 200€</p>
                    </div>
                    <DrawerHome
                      title="Celestial Whispers"
                      description="Portrait envoûtant baigné de nuances de bleu, ce tableau présente un visage qui semble se dissoudre dans les tourbillons qui l'entourent. 
                      Les lignes délicates et la fluidité des coups de pinceau donnent l'impression d'un être céleste pris entre la réalité et le rêve. 
                      Le halo subtil au-dessus de la tête du personnage ajoute une qualité éthérée, ce qui en fait une œuvre captivante et d'un autre monde."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={5200} artiste={"Ophelia Serene"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau6.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Radiant Reverie</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">6 000€</p>
                    </div>
                    <DrawerHome
                      title="Radiant Reverie"
                      description="Ce tableau représente le profil serein d'une jeune femme éclairée par une douce lumière dorée. 
                      Le pinceau délicat et la palette de couleurs chaudes créent une atmosphère de tranquillité et de contemplation. 
                      Le voile drapé sur la tête de la femme ajoute un sentiment de mysticisme et de beauté intemporelle, rappelant le portrait classique mais avec une touche de modernité."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={6000} artiste={"Juliette Lumineuse"} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau7.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Chromatic Contemplation</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 500€</p>
                    </div>
                    <DrawerHome
                      title="Chromatic Contemplation"
                      description="Ce portrait abstrait présente des coups de pinceau audacieux et expressifs dans une émeute de couleurs. 
                      Le visage émerge d'un arrière-plan de teintes rouges, bleues et vertes, l'accent étant mis sur les yeux intenses, presque obsédants. 
                      L'application épaisse de peinture ajoute de la texture et de la profondeur, transmettant un sentiment d'émotion brute et d'introspection."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={3500} artiste={"Marcel Vibrant"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau8.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Feast of the Abyss</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">4 200€</p>
                    </div>
                    <DrawerHome
                      title="Feast of the Abyss"
                      description="Une nature morte saisissante qui combine des éléments macabres et banals. 
                      La pièce maîtresse est une tête de poisson, entourée d'une série de fruits et d'autres objets, rendus dans des rouges et des oranges vifs. 
                      x²L'éclairage dramatique et l'arrière-plan sombre créent un sentiment d'inquiétude et de mystère, ce qui en fait une œuvre convaincante qui incite à la réflexion."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={4200} artiste={"Beatrice Noir"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau9.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Inferno</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 800€</p>
                    </div>
                    <DrawerHome
                      title="Inferno"
                      description="Composition abstraite dominée par des rouges et des noirs ardents, cette peinture évoque un sentiment de chaos et d'intensité. 
                      Les formes tourbillonnantes et les contrastes marqués suggèrent le mouvement et l'énergie, rappelant les flammes et la destruction. 
                      Il s'agit d'une œuvre puissante qui attire l'attention et suscite des émotions fortes."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={3800} artiste={"Dante Fiery"} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau10.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Mystic Dance</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3 200€</p>
                    </div>
                    <DrawerHome
                      title="Mystic Dance"
                      description="Cette peinture présente une scène surréaliste, presque onirique, avec des personnages qui semblent danser ou s'adonner à des mouvements rituels. 
                      Les couleurs sombres et sourdes et les formes fluides et organiques créent un sentiment d'étrangeté et d'intrigue. 
                      Le spectateur est attiré par l'atmosphère mystérieuse et mystique de l'œuvre."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={3200} artiste={"Lucien Twilight"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau11.jpeg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">The Odd Quartet</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">4 500€</p>
                    </div>
                    <DrawerHome
                      title="The Odd Quartet"
                      description="Cette peinture fantaisiste et surréaliste met en scène quatre personnages aux traits exagérés et aux motifs vibrants. 
                      L'utilisation ludique de la couleur et le style excentrique, presque caricatural, confèrent à l'œuvre un caractère léger et humoristique. 
                      Les expressions des personnages centraux et les détails complexes invitent le spectateur à explorer la narration du tableau."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={4500} artiste={"Kenji Whimsy"} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src="/tableau12.png"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">Whispers of Spring</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">5 000€</p>
                    </div>
                    <DrawerHome
                      title="Whispers of Spring"
                      description="Une peinture sereine et délicate qui capture l'essence du printemps. 
                      La figure centrale, une femme vêtue d'une robe fluide, est entourée d'un arrière-plan de fleurs épanouies et de douces couleurs pastel. 
                      Les détails complexes et la qualité éthérée de la lumière créent une atmosphère paisible et stimulante, ce qui en fait une œuvre visuellement apaisante."
                      triggerText="Voir"
                      onSubmit={handleSubmit} prix={5000} artiste={"Celeste Harmony"} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#030712] dark:text-gray-50 sm:text-4xl">
              Nos artistes partenaires
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <img
                  alt="Artiste 1"
                  className="h-24 w-24 rounded-full object-cover"
                  height={96}
                  src="/artiste3.png"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-[#030712] dark:text-gray-50">Jane Doe</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Découvrir l'artiste
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <img
                  alt="Artiste 2"
                  className="h-24 w-24 rounded-full object-cover"
                  height={96}
                  src="/artiste3.png"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-[#030712] dark:text-gray-50">John Smith</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Découvrir l'artiste
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <img
                  alt="Artiste 3"
                  className="h-24 w-24 rounded-full object-cover"
                  height={96}
                  src="/artiste3.png"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-[#030712] dark:text-gray-50">Sarah Lee</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Découvrir l'artiste
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <img
                  alt="Artiste 4"
                  className="h-24 w-24 rounded-full object-cover"
                  height={96}
                  src="/artiste3.png"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-[#030712] dark:text-gray-50">Michael Chen</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Découvrir l'artiste
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background-end-rgb text-gray-400">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <img
                src="/logo_nav.png"
                alt="L'artelier Logo"
                className="h-10 w-10 object-cover"
              />
              <span className="text-lg font-bold text-gray-50">L'Artelier</span>
            </div>
            <nav className="flex gap-4">
              <Link className="text-sm font-medium text-gray-400 hover:text-gray-50" href="#">
                Mentions légales
              </Link>
              <Link className="text-sm font-medium text-gray-400 hover:text-gray-50" href="#">
                Conditions générales d'utilisation
              </Link>
              <Link className="text-sm font-medium text-gray-400 hover:text-gray-50" href="#">
                Vie privée et cookies
              </Link>
              <Link className="text-sm font-medium text-gray-400 hover:text-gray-50" href="#">
                Paiements sécurisés
              </Link>
              <Link className="text-sm font-medium text-gray-400 hover:text-gray-50" href="#">
                Contact
              </Link>
            </nav>
            <p className="text-sm">© 2024 L'Artelier. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}