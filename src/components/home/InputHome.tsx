import * as React from "react";

type InputProps = {
    className?: string;
    placeholder?: string;
    type?: string;
};

export const Input: React.FC<InputProps> = ({ className, placeholder, type }) => {
    return (
        <input
            className={`h-9 w-full rounded-md border border-gray-300 bg-white px-4 text-sm ${className}`}
            placeholder={placeholder}
            type={type}
        />
    );
};