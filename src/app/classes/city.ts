import { Multilanguage } from './multilanguage';

export class City {
    id: number;
    alias: string;
    country: {
      id: number;
      alias: string;
      name?: Multilanguage;
    };
    name?: Multilanguage;
    numberOfRealty: number;
}