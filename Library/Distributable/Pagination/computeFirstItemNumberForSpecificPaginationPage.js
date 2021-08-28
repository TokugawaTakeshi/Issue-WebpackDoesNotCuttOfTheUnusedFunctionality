export default function computeFirstItemNumberForSpecificPaginationPage({ currentPageNumber, itemsCountPerPage }) {
    return (itemsCountPerPage * (currentPageNumber - 1)) + 1;
}
