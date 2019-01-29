import { Source } from './source.enum';

export interface Quote {
    appearsIn?: string,
    author: string,
    content: string,
    id: number,
    image?: string,
    source: Source,
}