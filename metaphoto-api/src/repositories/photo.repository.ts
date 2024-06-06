import { fetchData } from "../utils/common"; 
import { API_ENDPOINTS, Album,Photo,User,} from '../utils/constants'

export const getUsers = async ():Promise<User[]> => {
    return await fetchData(API_ENDPOINTS.USERS)
}



export const getAlbums = async ():Promise<Album[]> => {
    return await fetchData(API_ENDPOINTS.ALBUMS)
}

export const getPhotos = async ():Promise<Photo[]> => {
    return await fetchData(API_ENDPOINTS.PHOTOS)
}