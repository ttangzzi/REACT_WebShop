/* eslint-disable */
import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data'

function App() {
  let [shoes] = useState(data)
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
        {
          data.map(function(a, i) {
            return (
              <Product image={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} title={shoes[i].title} content={shoes[i].content}/>
            )
          })
        }
      </Row>
    </div>
  );
}

function Product(props) {
  return (
    <Col sm>
      <img 
      src={props.image}
      width="80%"/>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </Col>
  )
}

export default App;
