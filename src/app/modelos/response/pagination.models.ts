export interface Links {
    first: string;
    last: string;
    prev: string;
    next: string;
}

export interface Pagination {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}
