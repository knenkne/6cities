export type property = `apartment` | `room` | `house` | `hotel`;

export type location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type id = number
export type offers = Offer[]
export type cityName = `Paris` | `Cologne` | `Brussels` | `Amsterdam` | `Hamburg` | `Dusseldorf`

export interface City {
    location: location;
    name: cityName;
}

export interface User {
    readonly id: id;
    avatarUrl: string;
    isPro: boolean;
    name: string;
    email?: string;
    description?: string;
}

export interface Status {
    isAuthorized: boolean;
}

export interface Review {
    readonly id: id;
    comment: string;
    date: string;
    rating: number;
    user: User;
}

export interface Offer {
    readonly id: id;
    bedrooms: number;
    city: City;
    description: string;
    goods: string[];
    host: User;
    images: string[];
    isFavorite: boolean;
    isPremium: boolean;
    location: location;
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: property;
}

