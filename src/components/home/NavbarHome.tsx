import * as React from "react";
import Link from "next/link";
import { Input } from "@/components/home/InputHome";
import { SearchIcon, UserIcon } from "@/components/home/IconHome";
import { Image } from "@/components/home/ImageHome";

export const Navbar: React.FC = () => (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link className="flex items-center gap-2" href="#">
                <Image src="/logo_nav.png" alt="L'artelier Logo" className="h-10 w-10 object-cover" />
                <span className="text-xl font-bold tracking-tight text-[#030712] dark:text-gray-50">L'artelier</span>
            </Link>
            <div className="flex items-center gap-4">
                <nav className="hidden lg:flex lg:gap-4">
                    <Link className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Acceuil
                    </Link>
                    <Link className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Peintures
                    </Link>
                    <Link className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Artistes
                    </Link>
                    <Link className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Collections
                    </Link>
                    <Link className="text-sm font-medium text-gray-700 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        Contact
                    </Link>
                </nav>
                <div className="relative w-full max-w-md lg:max-w-xs">
                    <Input className="dark:border-gray-700 dark:bg-[#030712] dark:text-gray-50 dark:focus:border-gray-500 dark:focus:ring-gray-500" placeholder="Rechercher..." type="search" />
                    <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                </div>
                <Link href="/login" className="flex items-center gap-2 hover:text-white">
                    <UserIcon className="h-6 w-6 text-[#030712] dark:text-gray-50" />
                    <span className="hidden lg:block text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-white">Connexion</span>
                </Link>
            </div>
        </div>
    </header>
);
export default Navbar;
