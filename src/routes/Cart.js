import { Table } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeName } from "./../store.js"

function Cart() {

  // state는 모든 state를 뜻하고, 일부분만 가져올 수 있다
  let item = useSelector((state)=> state.item)
  let user = useSelector((state)=> state.user)
  let dispatch = useDispatch()
  return (
    <div>
      {user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            item.map(function(a,i) {
              return(
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.count}</td>
                  <td><button onClick={()=>{
                    dispatch(changeName())
                  }}>+</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart