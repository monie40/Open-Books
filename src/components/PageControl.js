import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { searchLimit } from "./Searchbox";

const maxPageControls = 10;

const PageControl = ({ books, lastSearch, setData }) => {
  if (!books || books.numFound === 0) return <></>;

  const { numFound, start } = books;
  // round up for partial pages
  const numPages = Math.ceil(numFound / searchLimit);
  const activePaginationItem = start / searchLimit;
  // pages start at 1 so this helps some things
  const activePage = activePaginationItem + 1;
  // dont render the max amount if we dont have that many pages
  const numPaginationsToRender = Math.min(maxPageControls, numPages);
  // if the number of pages is more than we show, then were truncating the results
  const paginationTruncated = numPages > maxPageControls;
  // are we at the end of the pages
  const allPagesShown = numPages - activePaginationItem < maxPageControls;
  // sticks at 0 for beginning of render until we get beyond 5
  const pageWindowStart = Math.max(0, activePage - 5);
  // if were at the start, show just the max amount to render
  // if we're past 5, and the items at the start are disappearing, just render 5 ahead
  const pageWindowEnd =
    activePage > 5 ? activePage + 5 : numPaginationsToRender;

  const handlePaginate = (page) => {
    // only do the fetch if it makes sense
    // no going off the start or end
    if (page > 0 && page <= numPages) {
      fetch(
        `https://openlibrary.org/search.json?title=${lastSearch}&limit=${searchLimit}&page=${page}`
      )
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        })
        .catch((error) => console.error(error));
    }
  };

  const pageItems = [
    <PaginationItem>
      <PaginationLink onClick={() => handlePaginate(1)}>{"<<"}</PaginationLink>
    </PaginationItem>,
    <PaginationItem>
      <PaginationLink onClick={() => handlePaginate(activePage - 1)}>
        {"<"}
      </PaginationLink>
    </PaginationItem>,
  ];
  for (let i = pageWindowStart; i < pageWindowEnd; i++) {
    if (i === numPages) break;
    pageItems.push(
      <PaginationItem active={activePaginationItem === i}>
        <PaginationLink onClick={() => handlePaginate(i + 1)}>
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    );
  }
  if (paginationTruncated && !allPagesShown) {
    pageItems.push(
      <PaginationItem>
        <PaginationLink>...</PaginationLink>
      </PaginationItem>
    );
  }
  pageItems.push(
    <PaginationItem>
      <PaginationLink onClick={() => handlePaginate(activePage + 1)}>
        {">"}
      </PaginationLink>
    </PaginationItem>,
    <PaginationItem>
      <PaginationLink onClick={() => handlePaginate(numPages)}>
        {">>"}
      </PaginationLink>
    </PaginationItem>
  );
  return <Pagination>{pageItems}</Pagination>;
};

export default PageControl;
