export class Review {
    text: string;
    rate: number;
    date: string;
    author: {
        details: {
            name: string;
        }
    };
}