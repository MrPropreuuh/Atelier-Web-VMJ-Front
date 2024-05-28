'use client'
import React, { useState } from 'react';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ImageUpload from '@/components/my-ui/dashboard/ImageUpload';
import { useToast } from '@/components/ui/use-toast';

import { Plus, Minus } from 'lucide-react';

interface ProductControlDrawerProps {
    type: 'add' | 'remove';
}

const ProductControlDrawer: React.FC<ProductControlDrawerProps> = ({ type }) => {
    const isAdd = type === 'add';
    const { toast } = useToast();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = () => setIsDrawerOpen(true);
    const handleCloseDrawer = () => setIsDrawerOpen(false);

    return (
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
                <Button onClick={handleOpenDrawer} className="flex flex-row w-full bg-background border border-borders text-foreground hover:text-background">
                    {isAdd ? <Plus /> : <Minus />}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>{isAdd ? 'Ajout Produit' : 'Suppression Produit'}</DrawerTitle>
                        <DrawerDescription>{isAdd ? 'Veuillez ajouter le produit souhaité.' : 'Veuillez supprimer le produit souhaité.'}</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col p-4 justify-between gap-4 h-full">
                        {isAdd ? (
                            <>
                                <div>
                                    <Label htmlFor="name"></Label>
                                    <Input id="name" placeholder="Nom de l'œuvre" />
                                </div>
                                <ImageUpload />
                                <div>
                                    <Label htmlFor="description"></Label>
                                    <Textarea id="description" placeholder="Description" />
                                </div>
                                <div>
                                    <Label htmlFor="price"></Label>
                                    <Input id="price" type="number" placeholder="Prix" className="" />
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                    <Button className='w-full mb-1' onClick={() => {
                                        toast({
                                            variant: "valid2",
                                            title: "Produit ajouté",
                                            description: "Le produit a été ajouté avec succès.",
                                        });
                                        handleCloseDrawer(); // Fermer le tiroir
                                    }}>Ajouter Produit</Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline" className='w-full'>Retour</Button>
                                    </DrawerClose>
                                </div>
                            </>
                        ) : (
                            <div>
                                <Label htmlFor="name"></Label>
                                <Input id="name" placeholder="Nom de l'œuvre" />
                                <div className='flex flex-col gap-0.5 mt-5'>
                                    <Button className='w-full mb-1' onClick={() => {
                                        toast({
                                            variant: "valid2",
                                            title: "Produit supprimé",
                                            description: "Le produit a été supprimé avec succès.",
                                        });
                                        handleCloseDrawer(); // Fermer le tiroir
                                    }}>Supprimer Produit</Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline" className='w-full'>Retour</Button>
                                    </DrawerClose>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default ProductControlDrawer;
