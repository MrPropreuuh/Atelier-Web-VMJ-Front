import * as React from 'react';

const ArtImage: React.FC = () => {
    return (
        <img
            alt="mettre img d'une galerie"
            className="h-80 w-full rounded-lg object-cover sm:h-80 lg:h-full"
            height={600}
            src="/gallery.png"
            style={{
                aspectRatio: "300/200",
                objectFit: "cover",
            }}
            width={800}
        />
    );
};

export default ArtImage;
