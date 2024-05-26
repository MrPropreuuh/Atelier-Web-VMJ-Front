import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';

const ProductControlCard: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Controle produit</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-4">
                    <Card className="flex flex-col flex-1 justify-between">
                        <CardTitle className="flex p-4 justify-center">
                            Ajout produit
                        </CardTitle>
                        <CardContent>
                            <Button className="flex flex-row w-full bg-background border border-borders text-foreground hover:text-background">
                                <Plus />
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col flex-1 justify-between">
                        <CardTitle className="flex p-4 justify-center">
                            Supprimer produit
                        </CardTitle>
                        <CardContent>
                            <Button className="flex flex-row w-full bg-background border border-borders text-foreground hover:text-background">
                                <Minus />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductControlCard;
