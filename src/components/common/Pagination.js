const Pagination = ({ nextPage, prevPage, gotoPage, currentPage, pagesCount }) => {
    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a className="pagination-previous" onClick={prevPage}>Previous</a>
            <a className="pagination-next" onClick={nextPage}>Next page</a>
            <ul className="pagination-list">
                {
                    [...Array(pagesCount)].map((_, pageInd) => <li key={pageInd} >
                        <a className={`pagination-link ${currentPage === pageInd ? 'is-current' : ''}`} aria-label={`Goto page ${pageInd + 1}`} data-testid="pagination-link" onClick={() => gotoPage(pageInd)}>{pageInd + 1}</a>
                    </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Pagination