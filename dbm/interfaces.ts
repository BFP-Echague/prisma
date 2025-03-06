export interface IdParams {
    id: string;
}

export type BlankObject = NonNullable<unknown>;


export interface PagedResult<T> {
    data: T;
    pageInfo: {
        cursorNext: number | null;
    };
}