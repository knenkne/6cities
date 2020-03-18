import {city, id, property} from './types';

export interface Location {
    latitude: number;
    longitude: number;
    zoom: number;
}

export interface City {
    location: Location;
    name: city;
}

export interface User {
    readonly id: id;
    avatarUrl: string;
    isPro: boolean;
    name: string;
    email?: string;
    description?: string;
}

export interface Review {
    readonly id: id;
    comment: string;
    date: string;
    rating: number;
    user: User;
}

export interface Status {
    isAuthorized: boolean;
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
    location: Location;
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: property;
}
