import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

const TotalRevenueCard: React.FC = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenu Total</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">45 231,89 €</div>
                <p className="text-xs text-muted-foreground">+20,1% par rapport au mois dernier</p>
            </CardContent>
        </Card>
    );
};

export default TotalRevenueCard;
