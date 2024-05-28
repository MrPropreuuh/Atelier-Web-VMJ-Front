import * as React from "react";
import { Card } from "@/components/home/CardHome";
import { DrawerHome } from "@/components/home/DrawerHome";

type Artwork = {
    title: string;
    description: string;
    artist: string;
    price: number;
    imageUrl: string;
};

type ArtworkListProps = {
    artworks: Artwork[];
};

export const ArtworkList: React.FC<ArtworkListProps> = ({ artworks }) => (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork, index) => (
            <Card
                key={index}
                title={artwork.title}
                description={artwork.description}
                artist={artwork.artist}
                imageUrl={artwork.imageUrl}
                trigger={<DrawerHome title={artwork.title} description={artwork.description} artiste={artwork.artist} prix={artwork.price} triggerText="Voir" onSubmit={function (): void {
                    throw new Error("Function not implemented.");
                }} />}
            />
        ))}
    </div>
);