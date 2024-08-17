/* eslint-disable */
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
function Detail(props) {
  let {id} = useParams();
  const shoe = props.shoes.find(function(item) { return item.id === Number(id)})
  if(!shoe) {
    return <div>404 페이지</div>
  }
  else {
    return (
      <Container>
        <Row>
          <Col>
            <img src={`https://codingapple1.github.io/shop/shoes${shoe.id +1}.jpg`} width="100%" />
          </Col>
          <Col>
            <h4 className="pt-5">{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </Col>
        </Row>
      </Container> 
    )
  }
  
}

export default Detail;