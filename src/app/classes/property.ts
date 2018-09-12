import { Multilanguage } from './multilanguage';

export class Property {
    value: any;
    property_value: {
        id: number;
        value: Multilanguage;
        propertyId: number;
        property: {
            alias: string;
            name: Multilanguage;
        };
    };
}