import axios from "axios";

import { EnrichedPhoto } from "@/utils/types";
import { Console } from "console";

const API_URL = process.env.NEXT_PUBLIC_API_URL
export const fetchPhotos = async (filters:any = {},limit:number = 25, offset: number = 0): Promise<EnrichedPhoto[]>=>{
    const params = {...filters,limit,offset};
    const response = await axios.get<EnrichedPhoto[]>(`${API_URL}/photos`,{params});
    console.log(API_URL)
    return response.data;
}

export const fetchPhotosById= async (id:number):Promise<EnrichedPhoto>=>{
    const response = await axios<EnrichedPhoto>(`${API_URL}/photos/${id}`);
    return response.data
}
