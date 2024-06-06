
import { off } from "process";
import { getUsers, getAlbums,getPhotos } from "../repositories/photo.repository";
import {  EnrichedPhoto } from "../utils/constants";
export const fetchCompleteData = async (id:number|null =null,filters:any={},limit:number = 25,offset:number =0)=>{
    try {
        const [users, albums, photos] = await Promise.all([getUsers(),getAlbums(),getPhotos()])
        let enrichedPhotos:EnrichedPhoto[] = photos.map((photo)=>{
            const album = albums.find((album:any)=> album.id === photo.albumId)
            const user = users.find((user)=>user.id===photo.albumId);
            return {
                ...photo,
                album: {
                    ...album,
                    user: {
                        ...user
                    }
                }
            } as EnrichedPhoto;

        })
        if (id){
            enrichedPhotos = enrichedPhotos.filter((photo)=>photo.id ===id);
        }
        if (filters.title){
            enrichedPhotos = enrichedPhotos.filter((photo)=>photo.title.includes(filters.title));
        }
        if (filters['album.title']) {
            enrichedPhotos = enrichedPhotos.filter((photo) => photo.album.title.includes(filters['album.title']));
        }

        if (filters['album.user.email']) {
            enrichedPhotos = enrichedPhotos.filter((photo) => photo.album.user.email === filters['album.user.email']);
        }

        return enrichedPhotos.slice(offset, offset + limit);

    } catch (error) {
        console.error("Error fetching and enriching data: ", error);
        throw error;
    }
    
}

export const fetchById = async (id:number|null =null,filters:any={},limit:number = 25,offset:number =0)=>{
    try {
        fetchCompleteData(id,filters,limit,offset);
    } catch (error) {
        console.error("Error fetching and enriching data by id: ", error);
        throw error;
    }
    
}