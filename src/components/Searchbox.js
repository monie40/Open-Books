import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import BooksList from '../features/books/BooksList';

const Searchbox = () => {
    const [data, setData] = useState(null);

    const handleSubmit = (values) => {
        const { title } = values;
        const codedTitle = title.replaceAll(' ', '+');
        const searchLimit = 5;
        const url = 'https://openlibrary.org/search.json?title=' + codedTitle + '&limit=' + searchLimit;
         fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));

        console.log(data);
        const bookData = JSON.stringify(data);

    //When we render the component Booklist, we pass in a prop named books and for the value of books, we pass in data (the results from our fetch)
    }

    return (
        <>
        <Formik
            initialValues = {{
                title: ''
            }}

            onSubmit = {handleSubmit}
        >

            <Form>
                <FormGroup row>
                    <Label htmlFor = 'title'>
                        Enter Title of Book
                    </Label>
                    <Col>
                        <Field className = 'form-control' name = 'title' placeholder = 'Title' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Button type = 'submit' color = 'primary'>
                           Search for Books
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>

        {data && 
                <>
                <h3>Results: {data.numFound}</h3>
                <BooksList books = {data}/>
                </>}
        </>



    );
};

export default Searchbox;