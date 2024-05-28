import * as React from "react";
import { Logo } from "@/components/home/LogoHome";
import { FooterNav } from "@/components/home/FooterNav";

export const Footer: React.FC = () => (
    <footer className="bg-background-end-rgb text-gray-400">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <Logo />
                <FooterNav />
                <p className="text-sm">© 2024 L'Artelier. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
);