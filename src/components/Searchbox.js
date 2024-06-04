import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

export const searchLimit = 5;

const Searchbox = ({ setData, setLastSearch }) => {
  const handleSubmit = (values) => {
    const { title } = values;
    const codedTitle = title.replaceAll(" ", "+");

    const url = `https://openlibrary.org/search.json?title=${codedTitle}&limit=${searchLimit}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setLastSearch(codedTitle);
        setData(json);
      })
      .catch((error) => console.error(error));

    //When we render the component Booklist, we pass in a prop named books and for the value of books, we pass in data (the results from our fetch)
  };

  return (
    <section className="bookContent">
      <Formik
        initialValues={{
          title: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup row>
            <Label htmlFor="title">Enter Title of Book</Label>
            <Col>
              <Field
                className="form-control"
                name="title"
                placeholder="Title"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Button type="submit" color="primary">
                Search for Books
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </section>
  );
};

export default Searchbox;
