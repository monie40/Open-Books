import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
//We will import Link to turn each card into a clickable link
import { Link } from 'react-router-dom';


const BookCard = () => {
   
    return(
            <Card>
                <CardImg width = '100%' src = '' alt = 'Picture of book' />
                <CardImgOverlay>
                    <CardTitle>Book Title</CardTitle>
                </CardImgOverlay>
            </Card>
    );
};

export default BookCard;