import * as React from 'react';
import ArtDescription from './ArtDescription';
import ArtImage from './ArtImage';

const ArtSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <ArtDescription />
                    <ArtImage />
                </div>
            </div>
        </section>
    );
};

export default ArtSection;
