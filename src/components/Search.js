import { Form, FormControl, Button } from "react-bootstrap";

const Search = ({ onSearch, query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <Form className="d-flex ms-auto" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search for movies"
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="dark" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
