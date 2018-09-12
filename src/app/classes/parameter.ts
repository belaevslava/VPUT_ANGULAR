import { Multilanguage } from './multilanguage';

export class Parameter {
    parameter_value: {
        id: number;
        value: Multilanguage;
        parameter: {
            alias: string;
            name: Multilanguage;
        };
    };
}