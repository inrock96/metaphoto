import { Request,Response } from "express";
import { fetchCompleteData } from "../services/photo.service";

export const getPhotos = async(req:Request,res:Response)=>{
    const {title,albumTitle,userEmail,limit=25,offset=0} = req.query;
    const filters: any = {}
    if (title)filters.title = title;
    if (albumTitle) filters['album.title'] = albumTitle;
    if (userEmail) filters['album.user.email'] = userEmail;
    try {
        const data = await fetchCompleteData(null,filters,Number(limit),Number(offset));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }
}

export const getPhotosById = async(req:Request,res:Response)=>{
    const {id }= req.params
    const {title,albumTitle,userEmail,limit=25,offset=0} = req.query;
    const filters: any = {};
    if (title)filters.title = title;
    if (albumTitle) filters['album.title'] = albumTitle;
    if (userEmail) filters['album.user.email'] = userEmail;
    try {
        const data = await fetchCompleteData(id?Number(id):null);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }
}

