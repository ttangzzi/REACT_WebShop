/* eslint-disable */
import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data'
import Detail from './routes/component'
import { Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate();
  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">TTANG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <Row>
            {
              data.map(function(a, i) {
              return (
                <Product 
                image={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} 
                title={shoes[i].title} 
                content={shoes[i].content}/>
              )
              })
            }
          </Row>
          </>
        }/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="*" element={<div>404 페이지</div>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>지역</div>}/>
        </Route>
      </Routes>


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

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
