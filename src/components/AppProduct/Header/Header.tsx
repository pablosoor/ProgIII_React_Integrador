import { Container, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <FaShoppingCart style={{ marginRight: '10px' }} />
          Carga de productos
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
