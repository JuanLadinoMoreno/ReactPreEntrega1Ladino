import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const  NavBar = () => {
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Burguer Robles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Quienes Somos</Nav.Link>
            <Nav.Link href="#link">Eventos</Nav.Link>
            <Nav.Link href="#link">Asados</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hamburguesas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                HotDogs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Baguettes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sadwiches
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Burritos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget>
            <button></button>
        </CartWidget>
      </Container>
    </Navbar>
        </div>
    );
}

export default NavBar;