import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const TaskListCard: React.FC = () => {
    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle>Liste de Tâches</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <p className="text-sm">Mettre à jour le catalogue de produits</p>
                </div>
                {/* Ajouter plus de tâches au besoin */}
            </CardContent>
        </Card>
    );
};

export default TaskListCard;
