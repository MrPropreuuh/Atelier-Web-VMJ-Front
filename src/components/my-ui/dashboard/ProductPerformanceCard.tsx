import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ProductPerformanceCard: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Performance des Produits</CardTitle>
                <CardDescription>Produits les plus performants</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produit</TableHead>
                            <TableHead className="hidden xl:table-cell">Catégorie</TableHead>
                            <TableHead className="hidden xl:table-cell">Ventes</TableHead>
                            <TableHead className="text-right">Revenu</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Produit 1</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Catégorie 1</TableCell>
                            <TableCell className="hidden xl:table-cell">1 200</TableCell>
                            <TableCell className="text-right">12 000,00 €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Produit 1</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Catégorie 1</TableCell>
                            <TableCell className="hidden xl:table-cell">1 200</TableCell>
                            <TableCell className="text-right">12 000,00 €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Produit 1</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Catégorie 1</TableCell>
                            <TableCell className="hidden xl:table-cell">1 200</TableCell>
                            <TableCell className="text-right">12 000,00 €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Produit 1</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Catégorie 1</TableCell>
                            <TableCell className="hidden xl:table-cell">1 200</TableCell>
                            <TableCell className="text-right">12 000,00 €</TableCell>
                        </TableRow>
                        {/* Ajouter plus de lignes au besoin */}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default ProductPerformanceCard;
