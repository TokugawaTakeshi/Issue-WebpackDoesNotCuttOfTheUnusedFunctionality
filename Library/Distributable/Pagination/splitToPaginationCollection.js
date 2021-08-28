export default function splitToPaginationCollection(flatArray, options) {
    const pagesCount = Math.ceil(flatArray.length / options.itemsCountPerPaginationPage);
    const paginationCollection = {
        pagesCount,
        getItemsForPage(targetPageNumber) {
            const itemsForTargetPage = this[targetPageNumber];
            return typeof itemsForTargetPage === "undefined" ? [] : itemsForTargetPage;
        }
    };
    let elementStartingPositionForCurrentPage = 0;
    let elementEndingPositionForCurrentPage = elementStartingPositionForCurrentPage + options.itemsCountPerPaginationPage;
    const lastPageNumber = options.pagesNumerationFrom === 0 ? pagesCount : pagesCount + 1;
    for (let pageNumber = options.pagesNumerationFrom; pageNumber < lastPageNumber; pageNumber++) {
        paginationCollection[pageNumber] = flatArray.slice(elementStartingPositionForCurrentPage, elementEndingPositionForCurrentPage);
        elementStartingPositionForCurrentPage = elementStartingPositionForCurrentPage + options.itemsCountPerPaginationPage;
        elementEndingPositionForCurrentPage = elementStartingPositionForCurrentPage + options.itemsCountPerPaginationPage;
    }
    return paginationCollection;
}
