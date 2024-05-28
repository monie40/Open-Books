import { Col, Row } from 'reactstrap';
import BookCard from './BookCard';

//This component is expecting a prop named books, we can destructure books in the parameter list here, books is an object
const BooksList = ({books}) => {
    //console.log(books);
    const { docs } = books;
    //console.log(docs);
    return (
        <Row className = 'ms-auto'>
            {docs.map((item) => {
                return (
                    <Col md className = 'm-1'>
                        <BookCard book = {item} />
                    </Col>
                );
                


            })}
        </Row>
    );





};

export default BooksList;