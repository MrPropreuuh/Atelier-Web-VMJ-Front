import * as React from "react";

type ImageProps = {
    src: string;
    alt: string;
    className?: string;
    height?: number;
    width?: number;
    style?: React.CSSProperties;
};

export const Image: React.FC<ImageProps> = ({ src, alt, className, height, width, style }) => (
    <img src={src} alt={alt} className={className} height={height} width={width} style={style} />
);