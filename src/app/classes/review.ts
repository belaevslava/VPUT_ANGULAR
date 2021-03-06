import {Realty} from './realty';

export class Review {
    text: string;
    rate: number;
    date: string;
    author: {
        details: {
            name: string;
            avatar: string;
        }
    };
    owner: Realty;
}