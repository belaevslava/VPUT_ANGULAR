import {Image} from './image';

export class Realty {
    images: Image[];
    address: {
        city: {
            name: {
                ru: string;
                en: string;
                ua: string;
            };
            country: {
                name: {
                    ru: string;
                    en: string;
                    ua: string;
                }
            };
        };
    };
    id: number;
    name: {
        ru: string;
        en: string;
        ua: string;
    };
    rooms: number;
    guests: number;
    guestPrice: number;
    price: number;
    categoryId: number;
}