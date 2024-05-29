import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
//We will import Link to turn each card into a clickable link
import { Link } from "react-router-dom";

//This component is being a passed a prop, this prop wil have a book object, we can destructure the book object in the parameter list,
//each book item will have properties of author_name (an array), ebook_access, first_publish_year, title, ratings_averate.
const BookCard = ({ book }) => {
  console.log(book);

  const {
    author_name,
    ebook_access,
    first_publish_year,
    title,
    ratings_average,
    isbn,
  } = book;
  const picSrc = isbn
    ? "https://covers.openlibrary.org/b/isbn/" + isbn[0] + "-L.jpg"
    : undefined;

  return (
    <Card>
      {picSrc && <CardImg width="100%" src={picSrc} alt="Picture of book" />}

      <CardTitle>{title}</CardTitle>
      <CardBody>
        <CardText>Author: {author_name[0]}</CardText>
        <CardText>E-Book Access: {ebook_access}</CardText>
        <CardText>Publishing Year: {first_publish_year}</CardText>
        <CardText>Rating: {ratings_average}</CardText>
      </CardBody>
    </Card>
  );
};

export default BookCard;
