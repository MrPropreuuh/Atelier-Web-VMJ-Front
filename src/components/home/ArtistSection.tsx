import React from "react";
import ArtistCard from "./ArtistCard";

const artists = [
    {
        name: "Jane Doe",
        imageUrl: "/artiste3.png",
        link: "#",
    },
    {
        name: "John Smith",
        imageUrl: "/artiste3.png",
        link: "#",
    },
    {
        name: "Sarah Lee",
        imageUrl: "/artiste3.png",
        link: "#",
    },
    {
        name: "Michael Chen",
        imageUrl: "/artiste3.png",
        link: "#",
    },
];

const ArtistSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-[#030712] dark:text-gray-50 sm:text-4xl">
                    Nos artistes partenaires
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {artists.map((artist, index) => (
                        <ArtistCard
                            key={index}
                            name={artist.name}
                            imageUrl={artist.imageUrl}
                            link={artist.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArtistSection;
