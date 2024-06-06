import React from "react";
import { EnrichedPhoto } from "@/utils/types";
interface PhotoListProps {
    photos: EnrichedPhoto[];
}


const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
    {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="p-4 bg-white rounded shadow">
                        <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
                        <img src={photo.thumbnailUrl} alt={photo.title} className="mb-2" />
                        <p className="text-sm">Album: {photo.album.title}</p>
                        <p className="text-sm">User: {photo.album.user.name} ({photo.album.user.email})</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default PhotoList
