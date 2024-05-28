import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Adjust the import path as needed
import { DrawerHome } from '@/components/home/DrawerHome'; // Adjust the import path as needed

interface ArtCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    artist: string;
    onSubmit: () => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ title, description, price, imageUrl, artist, onSubmit }) => {
    return (
        <Card>
            <CardContent>
                <img
                    alt={description}
                    className="h-80 w-full rounded-lg object-cover p-5"
                    height={300}
                    src={imageUrl}
                    style={{
                        aspectRatio: "400/300",
                        objectFit: "cover",
                    }}
                    width={400}
                />
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">{title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{price}€</p>
                    </div>
                    <DrawerHome
                        title={title}
                        description={description}
                        triggerText="Voir"
                        onSubmit={onSubmit}
                        prix={price}
                        artiste={artist}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default ArtCard;
