import { Image } from './image';
import { Parameter } from './parameter';
import { Property } from './property';
import { Multilanguage } from './multilanguage';

export class Realty {
    images: Image[];
    address: {
        city: {
            name: Multilanguage;
            country: {
                name: Multilanguage
            };
        };
        latitude: number | string;
        longitude: number | string;
    };
    id: number;
    name: Multilanguage;
    rooms: number;
    bathRooms: number;
    guests: number;
    guestPrice: number;
    price: number;
    categoryId: number;
    parameters: Parameter[];
    properties: Property[];
}