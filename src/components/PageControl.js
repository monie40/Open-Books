import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { searchLimit } from "./Searchbox";

const maxPageControls = 10;

const PageControl = ({ books }) => {
  if (!books) return <></>;
  const { numFound, start } = books;
  if (numFound === 0) return <></>;
  const numPages = Math.ceil(numFound / searchLimit);
  const activePaginationItem = start / searchLimit;
  const pageItems = [
    <PaginationItem>
      <PaginationLink>{"<<"}</PaginationLink>
    </PaginationItem>,
    <PaginationItem>
      <PaginationLink>{"<"}</PaginationLink>
    </PaginationItem>,
  ];
  const numPaginationsToRender = Math.min(maxPageControls, numPages);
  const paginationTruncated = numPages > maxPageControls;
  for (let i = 0; i < numPaginationsToRender; i++) {
    pageItems.push(
      <PaginationItem active={activePaginationItem === i}>
        <PaginationLink>{i + 1}</PaginationLink>
      </PaginationItem>
    );
  }
  if (paginationTruncated) {
    pageItems.push(
      <PaginationItem>
        <PaginationLink>...</PaginationLink>
      </PaginationItem>
    );
  }
  pageItems.push(
    <PaginationItem>
      <PaginationLink>{">"}</PaginationLink>
    </PaginationItem>,
    <PaginationItem>
      <PaginationLink>{">>"}</PaginationLink>
    </PaginationItem>
  );
  return <Pagination>{pageItems}</Pagination>;
};

export default PageControl;
