import * as React from "react";
import { Image } from "@/components/home/ImageHome";

type CardProps = {
    title: string;
    description: string;
    artist: string;
    imageUrl: string;
    trigger: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, description, artist, imageUrl, trigger }) => (
    <div className="card">
        <div className="card-content">
            <Image src={imageUrl} alt={description} className="h-80 w-full rounded-lg object-cover p-5" height={300} style={{ aspectRatio: '400/300', objectFit: 'cover' }} width={400} />
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium text-[#030712] dark:text-gray-50">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{artist}</p>
                </div>
                {trigger}
            </div>
        </div>
    </div>
);