import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

const SalesCard: React.FC = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ventes</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">+12 234</div>
                <p className="text-xs text-muted-foreground">+19% par rapport au mois dernier</p>
            </CardContent>
        </Card>
    );
};

export default SalesCard;
