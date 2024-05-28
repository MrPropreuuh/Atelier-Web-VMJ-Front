import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

type DrawerHomeProps = {
    title: string;
    description: string;
    artiste: string;
    prix: number;
    triggerText: string;
    onSubmit: () => void;
};

export const DrawerHome: React.FC<DrawerHomeProps> = ({ title, description, artiste, prix, triggerText, onSubmit }) => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button>{triggerText}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Artiste: {artiste}</p>
                        <p className="text-lg font-medium text-gray-900 dark:text-gray-50">Prix: {prix}€</p>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button onClick={onSubmit}>Ajouter au panier</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Annuler</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
