export class City {
    id: number;
    alias: string;
    country: {
      id: number;
      alias: string;
      name: {
          ru: string;
          en: string;
          ua: string;
      }
    };
    name: {
        ru: string;
        en: string;
        ua: string;
    };
    numberOfRealty: number;
}