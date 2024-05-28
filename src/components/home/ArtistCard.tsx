import React from "react";
import Link from "next/link";

interface ArtistCardProps {
    name: string;
    imageUrl: string;
    link: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, imageUrl, link }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                alt={`Artiste ${name}`}
                className="h-24 w-24 rounded-full object-cover"
                height={96}
                src={imageUrl}
                style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                }}
                width={96}
            />
            <h3 className="mt-4 text-lg font-medium text-[#030712] dark:text-gray-50">{name}</h3>
            <Link
                className="mt-2 text-sm font-medium text-gray-500 hover:text-[#030712] dark:text-gray-400 dark:hover:text-gray-50"
                href={link}
            >
                Découvrir l'artiste
            </Link>
        </div>
    );
};

export default ArtistCard;
