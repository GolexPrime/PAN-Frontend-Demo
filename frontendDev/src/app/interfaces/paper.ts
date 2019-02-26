import { Author } from "./author";

export interface Paper {
    title: string,
    lang?: string,
    year?: number,
    authors?: Author[],
    issue?: string,
    publisher?: string,
    url?: string[],
    page_start?: string,
    volume?: string,
    id: string,
    keywords?: string[],
    fos?: string[],
    n_citation?: number,
    page_end?: string,
    doi?: string,
    doc_type?: string,
    venue?: string,
    references?: string[],
    abstract?: string
}