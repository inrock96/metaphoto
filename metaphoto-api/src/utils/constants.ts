export const API_ENDPOINTS = {
    USERS: 'https://jsonplaceholder.typicode.com/users',
    ALBUMS: 'https://jsonplaceholder.typicode.com/albums',
    PHOTOS: 'https://jsonplaceholder.typicode.com/photos',
}

export interface Album  {
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string,
}

export interface Geo {
    lat: string;
    lng: string;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface EnrichedPhoto extends Photo {
    album: Album & { user: User };
}


