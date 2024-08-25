/* eslint-disable */
import { Nav ,Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import styled from 'styled-components'

// let ColorBtn = styled.button`
//   background : ${ props => props.bg };
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
//   padding : 10px;
// `
// let Box = styled.div`
//   background : grey;
//   padding : 20px;
// `

function Detail(props) {
  
  let [count , setCount] = useState(0);
  let [timediv, setTimediv] = useState(true);
  let [warn, setWarn] = useState(false);
  let [inputValue, setInputValue] = useState('');
  let [tab, setTab] = useState(0);
  let {id} = useParams();

  // useEffect(()=> {
  //   // 시간이 오래걸리는 코드, 서버에서 데이터 가져오기, 타이머 등 작성
  //   // 렌더링이 모두 완료된 후 실행된다. -> 좀 더 빠르게 HTML 을 보여줄 수 있음
  //   let a = setTimeout(()=>{ setTimediv(false) }, 2000);
  //   // useEffect 동작 전에 실행되는 return()=>{} (cleanup function)
  //   return() => {
  //     clearTimeout(a); // 타이머 제거
  //   }
  // },[]);

  useEffect(()=> {
    isNaN(inputValue) ? setWarn(true) : setWarn(false);
  },[inputValue])

  let [detailFade, setDetailFade] = useState('');
  useEffect(()=> {
    let fadeTime = setTimeout(()=>{setDetailFade('end')},500)
  return () => {
    clearTimeout(fadeTime);
    setDetailFade('');
  }
  }, [props])

  const shoe = props.shoes.find(function(item) { 
    return item.id === Number(id)
  })
  if(!shoe) {
    console.log(id)
    return <div>404 페이지</div>
  }
  else {
    return (
      <Container className={`start ${detailFade}`}>
        {/* {
          timediv === true ? <div className='alert alert-warning'>
          2초이내 구매시 할인
          </div> : null
        }
        {count}
        <button onClick={()=>{setCount(count+1)}}>버튼2</button> */}
        <Row>
          <Col>
            <img src={`https://codingapple1.github.io/shop/shoes${shoe.id +1}.jpg`} width="100%" />
          </Col>
          <Col>
            {
              warn === true ? 
              <div style={{backgroundColor:"red", color:"white"}}>경고 : 숫자만 입력하세요.</div>
              : null
            }
            <input onChange={(e)=>{setInputValue(e.target.value)}}></input>
            <h4 className="pt-5">{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </Col>
        </Row>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab = {tab}/>
      </Container> 
    )
  }
}

function TabContent(props) {
  // if(props.tab == 0) {
  //   return <div>내용0</div>
  // }
  // else if (props.tab == 1) {
  //   return <div>내용1</div>
  // }
  // else if (props.tab == 2) {
  //   return <div>내용2</div>
  // }
  let [fade, setFade] = useState('');
  useEffect(()=>{
    let fadeTime = setTimeout(()=>{ setFade('end') }, 50)
    return () => {
      clearTimeout(fadeTime);
      setFade('')
    }
  }, [props])

  return (
    <div className={`start ${fade}`}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab] }
    </div>
  )
}

export default Detail;