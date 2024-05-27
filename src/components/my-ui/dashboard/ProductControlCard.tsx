import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProductControlDrawer from '@/components/my-ui/dashboard/ProductControlDrawer';

const ProductControlCard: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Controle produit</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-4 flex-wrap">
                    <Card className="flex flex-col flex-1 justify-between">
                        <CardTitle className="flex p-4 justify-center">
                            Ajout produit
                        </CardTitle>
                        <CardContent>
                            {/* ProductControlDrawer @/components/my-ui-ProductControlDrawer */}
                            <ProductControlDrawer type="add" />
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col flex-1 justify-between">
                        <CardTitle className="flex p-4 justify-center">
                            Supprimer produit
                        </CardTitle>
                        <CardContent>
                            {/* ProductControlDrawer @/components/my-ui-ProductControlDrawer */}
                            <ProductControlDrawer type="remove" />
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductControlCard;
