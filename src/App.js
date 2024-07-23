/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';

function App() {
  let [shoes] = useState()
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">TTANG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Row>
        <Col sm>
          <img 
          src="https://codingapple1.github.io/shop/shoes1.jpg"
          width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </Col>
        <Col sm>
        <img 
          src="https://codingapple1.github.io/shop/shoes2.jpg"
          width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col sm>
          <img 
          src="https://codingapple1.github.io/shop/shoes3.jpg"
          width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
