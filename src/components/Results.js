import BooksList from "../features/books/BooksList";
const Results = ({ books }) => {
  if (!books) return <></>;
  return (
    <>
      <h3>Results: {books.numFound}</h3>
      <BooksList books={books} />
    </>
  );
};
export default Results;
