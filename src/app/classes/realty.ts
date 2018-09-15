import { Image } from './image';
import { Parameter } from './parameter';
import { Property } from './property';
import { Multilanguage } from './multilanguage';
import { Price } from './price';
import { Address } from './address';
import { RealtyCategory } from './realty-category';

export class Realty {
    id: number;
    rooms: number;
    bathRooms: number;
    guests: number;
    guestPrice: number;
    price: number;
    categoryId: number;
    hasTV: boolean;
    hasAirConditioner: boolean;
    allowPets: boolean;
    name?: Multilanguage;
    description?: Multilanguage;
    category: RealtyCategory;
    address: Address;
    images: Image[];
    prices: Price[];
    parameters: Parameter[];
    properties: Property[];
}