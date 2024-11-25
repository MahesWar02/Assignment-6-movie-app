import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

const Header = ({ title, onSearch, query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <Navbar
      expand="lg"
      className="p-20"
      style={{
        backgroundColor: "#EC8305",
      }}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#" className="text-white">
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Form pencarian di dalam navbar */}
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
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
