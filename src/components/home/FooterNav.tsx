import * as React from "react";
import { TextLink } from "@/components/home/TextLinkHome";

export const FooterNav: React.FC = () => (
    <nav className="flex gap-4">
        <TextLink href="#">Mentions légales</TextLink>
        <TextLink href="#">Conditions générales d'utilisation</TextLink>
        <TextLink href="#">Vie privée et cookies</TextLink>
        <TextLink href="#">Paiements sécurisés</TextLink>
        <TextLink href="#">Contact</TextLink>
    </nav>
);