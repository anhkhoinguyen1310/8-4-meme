import React from "react";
import {
  Nav,
  Form,
  Navbar,
  Button,
  FormControl,
} from "react-bootstrap";



function Navbarr() {
  return (

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"> Meme Generator</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>

  );
}
<nav class="sticky-top p-0 shadow navbar navbar-expand-md navbar-dark bg-primary">
  <a class="col-md-3 mr-0 px-3 navbar-brand" href="/">Meme Generator</a>
  <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
    <span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="basic-navbar-nav"><div class="m-auto navbar-nav"><a href="/" class="nav-link"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> Create Meme</a><a href="/gallery" class="nav-link"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg> Gallery</a></div></div></nav>
export default Navbarr