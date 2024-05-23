import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm dark:bg-gray-950/90">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-2" href="#">
            <PaletteIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">L'artelier</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex lg:gap-4">
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Acceuil
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Peintures
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Artistes
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Collections
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </nav>
            <div className="relative w-full max-w-md lg:max-w-xs">
              <Input
                className="h-9 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-500 dark:focus:ring-gray-500"
                placeholder="Rechercher..."
                type="search"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="relative h-[80vh] w-full overflow-hidden">
          <img
            alt="mettre giga background bien bg pour donner envie"
            className="h-full w-full object-cover"
            height={1080}
            src="./bgbg.jpg"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8 sm:px-6 lg:gap-10">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              L'artelier, S’offrir de l’art devient simple
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
                    alt="chat gpt grand peintre wllh*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-64 w-full rounded-lg object-cover"
                    height={300}
                    src=""
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Eclat sauvage</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Bertre Flandrin Marie-Liesse</p>
                    </div>
                    <Button size="sm">Voir</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-64 w-full rounded-lg object-cover"
                    height={300}
                    src=""
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Les songes de l'aube</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Romanelli Karine</p>
                    </div>
                    <Button size="sm">Voir</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    alt="*en attente de génération d'oeuvres par une ia artiste incompris :(*"
                    className="h-64 w-full rounded-lg object-cover"
                    height={300}
                    src=""
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Holland landscape</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Pigni Diana</p>
                    </div>
                    <Button size="sm">Voir</Button>
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
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
                className="h-64 w-full rounded-lg object-cover sm:h-80 lg:h-full"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "800/600",
                  objectFit: "cover",
                }}
                width={800}
              />
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              Nos artistes partenaires
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <img
                  alt="Artiste 1"
                  className="h-24 w-24 rounded-full object-cover"
                  height={96}
                  src="./lee.jpg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-50">Jane Doe</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
                  src="./lee.jpg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-50">John Smith</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
                  src="./lee.jpg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-50">Sarah Lee</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
                  src="./lee.jpg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-50">Michael Chen</h3>
                <Link
                  className="mt-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Découvrir l'artiste
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 py-8 text-gray-400">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <PaletteIcon className="h-6 w-6" />
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