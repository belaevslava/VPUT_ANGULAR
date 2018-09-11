import { Realty } from './realty';

export class SearchRealty {
    data: Realty[];
    current_page: number;
    last_page: number;
    per_page: number;
    from: number;
    to: number;
    total: number;
}
