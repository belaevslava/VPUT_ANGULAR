import { Realty } from './realty';

export class RealtySearchResult {
    data: Realty[];
    current_page: number;
    last_page: number;
    per_page: number;
    from: number;
    to: number;
    total: number;
}
