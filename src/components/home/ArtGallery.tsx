import * as React from 'react';
import ArtCard from './ArtCard'; // Adjust the import path as needed

interface ArtGalleryProps {
    artworks: {
        title: string;
        description: string;
        price: number;
        imageUrl: string;
        artist: string;
        onSubmit: () => void;
    }[];
}

const ArtGallery: React.FC<ArtGalleryProps> = ({ artworks }) => {
    return (
        <section className="py-12 sm:py-16 lg:py-5">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {artworks.map((artwork, index) => (
                        <ArtCard
                            key={index}
                            title={artwork.title}
                            description={artwork.description}
                            price={artwork.price}
                            imageUrl={artwork.imageUrl}
                            artist={artwork.artist}
                            onSubmit={artwork.onSubmit}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArtGallery;
