import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

function Cart() {

  // state는 모든 state를 뜻하고, 일부분만 가져올 수 있다
  let item = useSelector((state)=> state.item)
  console.log(item);
  return (
    <div>
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
            item.map(function(a) {
              return(
                <tr>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.count}</td>
                  <td>x</td>
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