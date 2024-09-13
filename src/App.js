/* eslint-disable */
import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data'
import Detail from './routes/Detail.js'
import Cart from './routes/Cart'
import { Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"
import axios from "axios"

function App() {
  let [load, setLoad] = useState("none");
  let [addCount, setAddCount] = useState(0);
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([]))
  },[])

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">TTANG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
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
          <p style={{color : "grey", display: load}}>loading...</p>
          <button onClick={()=>{
            setLoad("block")
            if(addCount == 0) {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                let copyData = [...shoes, ...result.data]
                setShoes(copyData)
                setAddCount(addCount = addCount + 1)
                setLoad("none")
              })
              .catch(()=>{
                // 예외처리
                console.log("fail")
                setLoad("none")
              })
            }
            else if (addCount == 1) {
              axios.get('https://codingapple1.github.io/shop/data3.json')
              .then((result)=>{
                let copyData = [...shoes, ...result.data]
                setShoes(copyData)
                setAddCount(addCount = addCount + 1)
                setLoad("none")
              })
              .catch(()=>{
                // 예외처리
                console.log("fail")
                setLoad("none")
              })
            }
          }} style={{display: addCount > 1 ? "none": "inline-block" }}>추가</button>
          </>
        }/>
        <Route path="/detail/:id" 
        element={<Detail shoes = {shoes}/>}/>

        <Route path="/cart" element={<Cart/>} />

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
    </div>
  );
}

function Product(props) {
  return (
    <>
    <div style={{display: props.i % 3 == 0 ? "inline-block" : "none"}}></div>
    <Col>
      <Link to={`/detail/${props.i}`} onClick={()=>{
        let watch = JSON.parse(localStorage.getItem("watched"));
        watch.push(props.i+1);
        let set = [...new Set(watch)]
        console.log(set);
        localStorage.setItem("watched", JSON.stringify(set))
        }}>
        <img 
        src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`}
        width="80%"/>
      </Link>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
    </>
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
