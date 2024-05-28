import * as React from "react";

type TextLinkProps = {
    href: string;
    children: React.ReactNode;
};

export const TextLink: React.FC<TextLinkProps> = ({ href, children }) => (
    <a className="text-sm font-medium text-gray-400 hover:text-gray-50" href={href}>
        {children}
    </a>
);