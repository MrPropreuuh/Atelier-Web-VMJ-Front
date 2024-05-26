import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const TransactionsCard: React.FC = () => {
    return (
        <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>Transactions récentes de votre magasin.</CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                    <Link href="#">
                        <span>Voir tout</span>
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client</TableHead>
                            <TableHead className="hidden xl:table-cell">Type</TableHead>
                            <TableHead className="hidden xl:table-cell">Statut</TableHead>
                            <TableHead className="hidden xl:table-cell">Date</TableHead>
                            <TableHead className="text-right">Montant</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Liam Johnson</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Vente</TableCell>
                            <TableCell className="hidden xl:table-cell">
                                <Badge className="text-xs" variant="outline">
                                    Approuvé
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">2023-06-23</TableCell>
                            <TableCell className="text-right">250,00 €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Olivia Smith</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Remboursement</TableCell>
                            <TableCell className="hidden xl:table-cell">
                                <Badge className="text-xs" variant="outline">
                                    Refusé
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">2023-06-24</TableCell>
                            <TableCell className="text-right">150,00 €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Noah Williams</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">noah@example.com</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Remboursement</TableCell>
                            <TableCell className="hidden xl:table-cell">
                                <Badge className="text-xs" variant="outline">
                                    Approuvé
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">2023-06-25</TableCell>
                            <TableCell className="text-right">350,00 €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Emma Brown</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Vente</TableCell>
                            <TableCell className="hidden xl:table-cell">
                                <Badge className="text-xs" variant="outline">
                                    Approuvé
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">2023-06-26</TableCell>
                            <TableCell className="text-right">450,00 €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Liam Johnson</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">Vente</TableCell>
                            <TableCell className="hidden xl:table-cell">
                                <Badge className="text-xs" variant="outline">
                                    Approuvé
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">2023-06-27</TableCell>
                            <TableCell className="text-right">550,00 €</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TransactionsCard;
