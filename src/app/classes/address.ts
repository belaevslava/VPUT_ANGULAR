import { Multilanguage } from './multilanguage';

export class Address {
    city: {
        name: Multilanguage;
        country: {
            name: Multilanguage
        };
    };
    latitude: number | string;
    longitude: number | string;
}