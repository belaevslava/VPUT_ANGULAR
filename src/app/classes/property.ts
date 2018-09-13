import { Multilanguage } from './multilanguage';

export class Property {
    id: number;
    measureId: number;
    measurement: {
        alias: string;
        categoryId: number;
        date: number;
        declension1: string;
        declension2: string;
        declension3: string;
        description: string;
        id: number;
        name: string;
        priority: number;
        shortName: string;
        statusId: number;
    };
    ownerId: number;
    priority: number;
    propertyValueId: number;
    property_value: {
        id: number;
        description: string;
        measureCategoryId: number;
        measurement_category: {
            alias: string;
            date: number;
            description: string;
            id: number;
            name: string;
            parentId: number;
            priority: number;
            statusId: string;
            text: string;
        };
        alias: string;
        date: number;
        name: string;
        parentId: number;
        priority: number;
        statusId: number;
        text: string;
        property: {
            alias: string;
            categoryId: number;
            date: number;
            description: string;
            id: number;
            imagePath: string;
            measurementId: number;
            name: Multilanguage;
            priority: number;
            statusId: number;
        };
        categoryId: number;
        imagePath: string;
        measurementId: number;
        propertyId: number;
        value: Multilanguage;
    };
    value: number | string;
}