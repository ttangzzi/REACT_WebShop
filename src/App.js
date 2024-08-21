/* eslint-disable */
import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data'
import Detail from './routes/component'
import { Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"
import axios from "axios"

function App() {
  let [shoes, setShoes] = useState(data)
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
              shoes.map(function(a, i) {
              return (
                <Product key={i}
                i={i}
                shoes={shoes[i]} />
              )
              })
            }
          </Row>
          </>
        }/>
        <Route path="/detail/:id" element={<Detail shoes = {shoes}/>}/>

        <Route path="*" element={<div>404 페이지</div>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>지역</div>}/>
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
            let copyData = [...data, ...result.data]
            setShoes(copyData)
            console.log(copyData)
        })
        .catch(()=>{
          // 예외처리
          console.log("fail")
        })
      }}>추가</button>
    </div>
  );
}

function Product(props) {
  return (
    <Col>
      <a href={`/detail/${props.i}`}>
        <img 
        src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`}
        width="80%"/>
      </a>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
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

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
