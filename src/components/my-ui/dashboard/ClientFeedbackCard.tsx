import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const ClientFeedbackCard: React.FC = () => {
    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle>Retour d'Information des Clients</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                    <Star className="text-yellow-500 h-5 w-5" />
                    <div>
                        <p className="text-sm font-medium">"Excellent produit !"</p>
                        <p className="text-xs text-muted-foreground">- John Doe</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Star className="text-yellow-500 h-5 w-5" />
                    <div>
                        <p className="text-sm font-medium">"Excellent produit !"</p>
                        <p className="text-xs text-muted-foreground">- John Doe</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Star className="text-yellow-500 h-5 w-5" />
                    <div>
                        <p className="text-sm font-medium">"Excellent produit !"</p>
                        <p className="text-xs text-muted-foreground">- John Doe</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Star className="text-yellow-500 h-5 w-5" />
                    <div>
                        <p className="text-sm font-medium">"Excellent produit !"</p>
                        <p className="text-xs text-muted-foreground">- John Doe</p>
                    </div>
                </div>
                {/* Ajouter plus de retours au besoin */}
            </CardContent>
        </Card>
    );
};

export default ClientFeedbackCard;
