export declare type PaginationCollection<Element> = {
    [key: number]: Array<Element> | undefined;
    getItemsForPage: (targetPageNumber: number) => Array<Element>;
    readonly pagesCount: number;
};
export default function splitToPaginationCollection<Element>(flatArray: Array<Element>, options: {
    itemsCountPerPaginationPage: number;
    pagesNumerationFrom: 0 | 1;
}): PaginationCollection<Element>;
