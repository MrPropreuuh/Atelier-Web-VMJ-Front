import * as React from "react";
import { Image } from "@/components/home/ImageHome";

export const Logo: React.FC = () => (
    <div className="flex items-center gap-2">
        <Image src="/logo_nav.png" alt="L'artelier Logo" className="h-10 w-10 object-cover" />
        <span className="text-lg font-bold text-gray-50">L'Artelier</span>
    </div>
);