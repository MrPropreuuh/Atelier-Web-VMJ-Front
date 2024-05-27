"use client"

import React, { useState, useRef } from 'react';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@radix-ui/react-context-menu';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const ImageUpload: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="space-y-2">
            <Label htmlFor="image"></Label>
            <ContextMenu>
                <ContextMenuTrigger asChild>
                    <div
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        className="border-dashed border-2 border-gray-400 p-4 rounded-md flex justify-center items-center"
                        style={{ minHeight: '150px', cursor: 'pointer' }}
                        onClick={handleClick}
                    >
                        {image ? (
                            <img src={image} alt="Uploaded" className="max-h-full max-w-full" />
                        ) : (
                            <p>Déposez une images ici</p>
                        )}
                    </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem onSelect={handleClick}>Choisir une image</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ImageUpload;
